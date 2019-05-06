import * as React from 'react';
import Business from './Business';
import { observer } from 'mobx-react';

import styled from '@emotion/styled';
import { AppStoreComponent } from '../stores/AppStore';

const BusList = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 4.4rem 10%;
`;

@observer
class BusinessList extends AppStoreComponent {

    render() {
        const businesses = this.appState.businesses;

        console.log('to to', businesses)
        return (
            <BusList>
                {businesses.map((business) =>
                    <Business
                        key={business.id}
                        id={business.id}
                        imageSrc={business.imageSrc}
                        name={business.name}
                        address={business.address}
                        city={business.city}
                        state={business.state}
                        zipCode={business.zipCode}
                        category={business.category}
                        rating={business.rating}
                        reviewCount={business.reviewCount}
                    />
                )}
            </BusList>
        );
    }
};

export default BusinessList;