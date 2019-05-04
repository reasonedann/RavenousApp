import { Yelp } from '../util/Yelp';
import * as React from 'react';
import BusinessList from './BusinessList';
import SearchBar from './SearchBar';

import styled from '@emotion/styled';

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


interface RavenousAppStateType {
    businesses: Array<BusinessType>,
};

export default class RavenousApp extends React.Component<{}, RavenousAppStateType> {

    constructor(props: {}) {
        super(props);
        this.state = {
            businesses: []
        }
    }

    searchYelp = (term: string, location: string, sortBy: string) => {
        Yelp.search(term, location, sortBy)
        .then((businesses) => this.setState({businesses: businesses}))
    }

    render = () => {
        return (
            <Container>
                <SearchBar searchYelp={this.searchYelp} />
                <BusinessList businesses={this.state.businesses} />
            </Container>
        );
    }
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px auto;
    min-width: 460px;
    max-width: 1200px;
`;


