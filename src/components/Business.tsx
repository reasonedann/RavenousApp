import * as React from 'react';
import { BusinessType } from './RavenousApp';

import styled from '@emotion/styled';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 16.66rem;
    margin: 0 .5rem 2.3rem .5rem;

    h1 {
        margin-bottom: .5rem;
        font-size: 1.2rem;
        font-weight: 600;
    }
`;

const ImgContainer = styled.img`
    height: 16.66rem;
    margin-bottom: 1rem;
`;

const Business = (props: BusinessType) => {

    const { imageSrc, name, address, city, state, zipCode, category, rating, reviewCount } = props;
    return (
        <Container>
            <ImgContainer src={imageSrc} />
            <h1>{name}</h1>
            <h4>{address}, {city}</h4>
            <h4>{state}, {zipCode}</h4>
            <h5>{category}</h5>
            <h5>{rating}, {reviewCount}</h5>
        </Container>
    );
};

export default Business;