import React, {Component} from 'react';
import {connect} from 'react-redux';
import './styles.css';

class UrlTitle extends Component {
    constructor(){
        super();
        this.state = {};
    }
    render(){
        const {searchValue,currentPage} = this.props;
        return(
            <div className='url-title'>
                <p> Requesting: </p>
                <p className='url'>
                    {`https://api.jikan.moe/v3/search/anime?q=${searchValue || '{}'}&page=${currentPage || 1}`}
                </p>
        </div>);
    }
}

const mapStateToProps = (reducer = {}) => ({
    searchValue: reducer.searchValue,
    currentPage: reducer.currentPage
});
const mapDispatchToProps = {};

export default connect (mapStateToProps,mapDispatchToProps)(UrlTitle);