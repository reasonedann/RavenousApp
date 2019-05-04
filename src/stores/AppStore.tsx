import * as React from 'react';
import {observable, action, runInAction} from 'mobx';

const apiKey = 'DOVfi94T66luo4KUFrGmUrLCftpbKezTrJWbuRBFi4eNCTwv_rsCuYC-ksi6uafqFKkIuwzdfRvqR1krjhr3tk4qCv0Dq5gqC-7RYJKFJ37huerwnOQ7G6OBep_IXHYx';
interface YelpBusinessType {
    id: string | undefined,
    image_url: string,
    name: string,
    location: {
        address1: string,
        city: string,
        state: string,
        zip_code: string
    },
    categories: {
        title: string
    },
    rating: number,
    review_count: number
};
export interface BusinessType {
    id: string,
    imageSrc: string,
    name: string,
    address: string,
    city: string,
    state: string,
    zipCode: string,
    category: string,
    rating: number,
    reviewCount: number
};

export class AppStore {
    @observable businesses: Array<BusinessType> = [];

    async search(term: string, location: string, sortBy: string) {
        try {
            const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
                headers: {
                    Authorization: `Bearer ${apiKey}`
                }
            });
            console.log('traj1')
            const jsonResponse = await response.json();
            console.log('traj2')
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map((business: YelpBusinessType) => { return {
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories.title,
                    rating: business.rating,
                    reviewCount: business.review_count
                }})
            }
        } catch(error) {
            console.log(error)
            alert('Mission impossible. No connection.')
        };
    };

    searchYelp = (term: string, location: string, sortBy: string) => {
        this.search(term, location, sortBy)
        .then((businesses) => runInAction(() => this.businesses = businesses));
        console.log('search yelp')
    }
}

export default React.createContext(
    new AppStore()
);