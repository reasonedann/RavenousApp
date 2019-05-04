import * as React from 'react';
import { observer } from 'mobx-react';

import BusinessList from './BusinessList';
import SearchBar from './SearchBar';
import { AppStore } from '../stores/AppStore';

import styled from '@emotion/styled';

interface RavenousAppProps {
    store: AppStore
};

@observer
class RavenousApp extends React.Component<RavenousAppProps> {

    render = () => {
        const { searchYelp, businesses } = this.props.store;
        console.log('appppppppp')
        return (
            <Container>
                <SearchBar searchYelp={searchYelp} />
                <BusinessList businesses={businesses} />
            </Container>
        );
    }
};

export default RavenousApp;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px auto;
    min-width: 460px;
    max-width: 1200px;
`;


