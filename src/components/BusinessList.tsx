import * as React from 'react';
import Business from './Business';
import { BusinessType } from '../stores/AppStore';
import { observer } from 'mobx-react';

import styled from '@emotion/styled';

const BusList = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 4.4rem 10%;
`;

interface BusinessListPropsTypes {
    businesses: Array<BusinessType>
};

@observer
class BusinessList extends React.Component<BusinessListPropsTypes> {

    render() {
        console.log('to to', this.props.businesses)
        return (
            <BusList>
                {this.props.businesses.map((business) =>
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