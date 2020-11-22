import React, {Component} from 'react';
import {Provider} from 'react-redux';
import './index.css';
import Title from './components/Title';
import {getStore} from './store';
class App extends Component{
  constructor(){
    super();
    this.state = {
      store: getStore({})
    };
  }

  render(){
    return(
      <div className='main-div'>
        <Provider store={this.state.store}>
          <Title />
        </Provider>
    </div>);
  }

}

export default App;
