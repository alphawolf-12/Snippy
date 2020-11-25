import {
    UPDATE_SEARCH_VALUE,
    RESULTS_LOADING,
    RESULTS_FETCHED,
    RESULTS_ERROR
} from './actionTypes';

const INITIAL_STATE= {
    currentPage: 1,
    searchValue: ''
};

const reducer = (state = INITIAL_STATE, action) => {

    const {type, payload} = action;

    switch(type){
        case UPDATE_SEARCH_VALUE: {
            return {
                ...state,
                searchValue: payload
            }
        }

        case RESULTS_LOADING: {
            if(payload && payload.destroyPrevious){
                return {
                    ...state,
                    resultsLoading: true,
                    results : []
                }
            }else{
            return {
                ...state,
                resultsLoading: true,
                }
            }
        }

        case RESULTS_FETCHED: {
            return{
                ...state,
                resultsLoading: false,
                resultsError: false,
                results: (state.results || []).concat(payload.results),
                lastPage: payload.lastPage,
                currentPage: payload.currentPage
            }
        }

        case RESULTS_ERROR: {
            return {
                ...state,
                resultsLoading: false,
                resultsError: true,
                errMsg: payload
            }
        }

    }
}

export default reducer;