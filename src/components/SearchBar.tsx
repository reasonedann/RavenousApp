import * as React from 'react';
import {observable} from 'mobx';
import { observer } from 'mobx-react';

import styled from '@emotion/styled';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 0;
    background-image: url('https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/background_search_desktop.jpg');
    height: 500px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
`;

const Options = styled.ul`
    list-style: none;
    display: flex;
    padding: 0;
    border-bottom: 2px solid black;
    margin: 50px 0;
`;

type OptionProps = {
    active: boolean
};

const Option = styled.li`
    cursor: pointer;
    padding: 15px 30px;
    background-color: ${(props: OptionProps)  => props.active ? 'orange' : 'transparent' };
    color: ${(props: OptionProps)  => props.active ? 'black' : 'lightgray' };
    font-weight: 700;
    font-size: 17px;
`;

const FormContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

const Input = styled.input`
    padding: 10px 20px;
    margin-right: 15px;
    margin-top: 25px;
    width: 350px;
    font-size: 16px;
    border: none;
`;

const Button = styled.button`
    width: 150px;
    font-size: 16px;
    font-weight: 700;
    color: silver;
    background: black;
    padding: 8px;
    margin-top: 60px;
    border-radius: 5px;
    border: none;
    :hover {
        background: silver;
        color: black;
    }
`;

interface SearchOptionsType {
    term: string,
    location: string,
    sortBy: string,
};

interface SearchBarProps {
    searchYelp(term: string, location: string, sortBy: string): void
};
@observer
class SearchBar extends React.Component<SearchBarProps, SearchOptionsType> {

    sortByOptions: Map<string, string> = new Map ([
        ['best_match', 'Best Match'],
        ['rating', 'Highest Rated'],
        ['review_count', 'Most Reviewed']
    ]);

    @observable SearchOptions = {
        term: '',
        location: '',
        sortBy: 'best_match',
    };

    handleSortByChange = (sortByOption: string) => {
        this.SearchOptions.sortBy = sortByOption;
    };

    handleTermChange = (event: any) => {
        this.SearchOptions.term = event.target.value;
    };

    handleLocationChange = (event: any) => {
        this.SearchOptions.location = event.target.value;
    };

    handleSearch = (event: any) => {
        event.preventDefault();
        this.props.searchYelp(this.SearchOptions.term, this.SearchOptions.location, this.SearchOptions.sortBy);
        console.log('handle search')
    }

    renderSortByOptions = () => {
        return [...this.sortByOptions.entries()].map(entry => {
            return <Option
                active={entry[0] === this.SearchOptions.sortBy}
                onClick={() =>
                    {
                        this.handleSortByChange(entry[0]);
                        this.props.searchYelp(this.SearchOptions.term, this.SearchOptions.location, this.SearchOptions.sortBy);
                    }}
                key={entry[0]}
                >{entry[1]}
            </Option>;
        });
    };

    render = () => {
        return (
            <Container>
                <Options>{this.renderSortByOptions()}</Options>
                <FormContainer>
                    <Input onChange={this.handleTermChange} placeholder="Search businesses" />
                    <Input onChange={this.handleLocationChange} placeholder="Where?" />
                </FormContainer>
                <Button onClick={this.handleSearch}>Let's go</Button>
            </Container>
        );
    }
};

export default SearchBar;