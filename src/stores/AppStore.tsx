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


const search = async (term: string, location: string, sortBy: string): Promise<Array<BusinessType>> => {
    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: {
            Authorization: `Bearer ${apiKey}`
        }
    });

    const jsonResponse = await response.json();

    if (jsonResponse.businesses) {
        return jsonResponse.businesses.map((business: YelpBusinessType) => ({
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
        }));
    }

    return [];
};


export class  AppStore   {
    @observable businesses: Array<BusinessType> = [];

    static createForContext(): AppStore {
        return new AppStore();
    }

    searchYelp = async (term: string, location: string, sortBy: string) => {
        const businesses = await search(term, location, sortBy);
        console.info('Nowa otrzymana odpowiedź z danymi', businesses);
        this.businesses = businesses;
    }
}

const AppContext = React.createContext(AppStore.createForContext());

export const Provider = AppContext.Provider;

export class AppStoreComponent<PropsType = {}, StateType = {}> extends React.Component<PropsType, StateType> {
    static contextType = AppContext;

    get appState(): AppStore {
        //Fix for "any" type
        return this.context;
    }
}
