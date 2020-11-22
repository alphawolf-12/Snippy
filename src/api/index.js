import axios from 'axios';

const stringifyParams = (params = {}) => {
    const queryParams = Object.keys(params).reduce( (acc, item) => {
        acc += `${item}=${params[item]}&`;
        return acc;
    }, '');
    return queryParams.slice(0,-1);
}

export const fetchData = (params = {}) => {
    const url = 'https://api.jikan.moe/v3/search/anime?' + stringifyParams(params);
    return axios.get(url);
}