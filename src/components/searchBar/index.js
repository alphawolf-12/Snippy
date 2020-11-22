import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles.css';

import { handleSearchChange, fetchResults } from '../../reducers/actions';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            searchPlaceholder: 'Search Here',
            searchValue: ''
        }
    }

    handleChange = ev => {
        ev.preventDefault();
        const searchValue = ev.target.value;
        this.setState({searchValue});
        // this.props.handleSearchChange(searchValue);
    }

    handleKeyPress = ev => {
        if(ev.key == 'Enter'){
            ev.preventDefault();
            const {searchValue} = this.state;
            this.props.handleSearchChange(searchValue.trim());
            this.props.fetchResults({q:searchValue.trim()});
        }
    }

    handleGo = ev => {
        ev.preventDefault();
        const {searchValue} = this.state;
        this.props.handleSearchChange(searchValue.trim());
        this.props.fetchResults({q:searchValue.trim()});
    }

    render() {
        const { searchPlaceholder, searchValue } = this.state;
        return( 
            <div className="searchBar">
                <input
                    className="input-field"
                    placeholder={searchPlaceholder}
                    key="search"
                    type="text"
                    value={searchValue}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress} />
                <button onClick={this.handleGo} className='search-button'>
                    Go
                </button>
            </div>
        )
    }

}

const mapStateToProps = (reducer = {}) => ({
    searchValue: reducer.searchValue
})

const mapDispatchToProps = {
    handleSearchChange,
    fetchResults
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);