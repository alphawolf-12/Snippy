import {
    UPDATE_SEARCH_VALUE,
    RESULTS_LOADING,
    RESULTS_FETCHED,
    RESULTS_ERROR
} from './actionTypes';

import {fetchData} from '../api';

export const handleSearchChange = data => dispatch => {
    dispatch({
        type: UPDATE_SEARCH_VALUE,
        payload: data
    })
};

export const fetchResults = (params = {}) => dispatch => {
    if(!params.page){
        dispatch({
            type: RESULTS_LOADING,
            payload : {destroyPrevious: true}
        })
    }else{
        dispatch({
            type: RESULTS_LOADING
        })
    }
    fetchData(params).then(res => {
        const response = res.data;
        dispatch({
            type: RESULTS_FETCHED,
            payload: {
                lastPage: response.last_page,
                results: response.results,
                currentPage: params.page || 1
            }
        })
    }).catch(err => {
        dispatch({
            type: RESULTS_ERROR,
            payload: JSON.stringify(err.message)        
        })
    })
}
