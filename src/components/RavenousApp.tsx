import * as React from 'react';
import { observer } from 'mobx-react';

import BusinessList from './BusinessList';
import SearchBar from './SearchBar';

import styled from '@emotion/styled';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px auto;
    min-width: 460px;
    max-width: 1200px;
`;

@observer
export class RavenousApp extends React.Component {
    render() {
        console.log('appppppppp')
        return (
            <Container>
                <SearchBar />
                <BusinessList />
            </Container>
        );
    }
};