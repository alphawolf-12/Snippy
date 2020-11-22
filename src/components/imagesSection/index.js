import React, {Component} from 'react';
import {connect} from 'react-redux';
import Card from '../Card';
import Loading from '../loading';
import Error from '../error';


import './styles.css';

import {fetchResults} from '../../reducers/actions';

class ImagesSection extends Component {
    constructor(){
        super();
        this.state = {};
    }

    handleLoadMore = ev => {
        ev.preventDefault();
        const {currentPage, searchValue} = this.props;
        this.props.fetchResults({q:searchValue, page:currentPage+1 })
    }

    renderResults = (results, currentPage, lastPage) => {
        return (
            <div style={{display: 'grid'}}>
                <div style={{ display: 'flex',flexWrap: 'wrap', margin :'2% 10%'}}>
                    {results.map( ele => <Card data={ele} />)}
                </div>
                {currentPage <= lastPage && 
                    <button 
                        className="load-more" 
                        onClick={this.handleLoadMore}> Load More </button> 
                }
            </div>
        );
    }

    render(){
        const {results, lastPage, currentPage, 
            resultsLoading, resultsError, errMsg} = this.props; 
        return(
            <div>
                
                {resultsLoading && <Loading />}
                {!resultsLoading && resultsError && <Error msg ={errMsg}/>}
                {!resultsLoading && !resultsError && results && results.length > 0 
                 && this.renderResults(results, currentPage, lastPage) 
                }
            </div>
        );
    }
}

const mapStateToProps = (reducer = {}) => ({
    resultsLoading: reducer.resultsLoading,
    resultsError: reducer.resultsError,
    errMsg: reducer.errMsg,
    results : reducer.results,
    lastPage: reducer.lastPage,
    currentPage: reducer.currentPage,
    searchValue: reducer.searchValue
});
const mapDispatchToProps = {
    fetchResults
};

export default connect (mapStateToProps,mapDispatchToProps)(ImagesSection);