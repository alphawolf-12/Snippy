import React, {Component} from 'react';
import {connect} from 'react-redux';
import './styles.css';

import SearchBar from '../searchBar';
import UrlText from '../urlTitle';
import ImagesSection from '../imagesSection';

class Title extends Component {
    constructor(){
        super();
        this.state = {};
    }

    render(){
        return(
            <div style={{display:'flex', flexDirection:'column'}}>
                <SearchBar />
                <UrlText />
                <ImagesSection />  
             </div>
        );
    }
}

const mapStateToProps = (reducer = {}) => ({});
const mapDispatchToProps = {};

export default connect (mapStateToProps,mapDispatchToProps)(Title);