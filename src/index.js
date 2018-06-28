import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'

import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import './index.css';
import Home from './Container/Home';
import Mrf from './Container/Mrf'
import Header from './Container/Header'
import Footer from './Component/Footer'

import { getAsyncInjectors } from './Utils/asyncInjectors';
import store from './Store';
import { historyObject } from './Store/createStore'
import mrfReducer from './Container/Mrf/reducer.js';
import mrfSaga from './Container/Mrf/sagas.js';


const { injectReducer, injectSagas } = getAsyncInjectors(store);
injectReducer('mrf', mrfReducer);
injectSagas(mrfSaga);

  

ReactDOM.render(
    <Provider store={store}>
      { /* ConnectedRouter will use the store from Provider automatically */ }
      
      <ConnectedRouter history={historyObject()}>
        <div>
          <Header />  
          <Route exact path="/" component={Home}/>
          <Route exact path="/mrf" component={Mrf}/>
          <Footer />  
        </div>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)
