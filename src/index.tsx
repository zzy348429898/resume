import * as React from 'react';
import * as ReactDom from 'react-dom';
// import Hello from './components/Hello';
import Resume from './components/Resume';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers/rootReducer';
import { SliderInfoStore } from './reducers/sliderInfo';
import logger from 'redux-logger';
import NavContainer from './containers/NavContainer';
import ArrowContainer from './containers/ArrowContainer';
import HeaderNavContainer from './containers/HeaderNavContainer';
import { HeaderNavStore } from './reducers/headerNav';

export interface State {
  sliderInfo: SliderInfoStore,
  headerNav: HeaderNavStore
}
const initialState: State ={
  sliderInfo: {
    currentPage: 0
  },
  headerNav: {
    hidden: true
  }
};

const store = createStore(rootReducer, initialState, applyMiddleware(logger));

ReactDom.render(
  <Provider store={store}>
    <Resume></Resume>
    <HeaderNavContainer></HeaderNavContainer>
    <NavContainer></NavContainer>
    <ArrowContainer></ArrowContainer>
  </Provider>,
  document.getElementById('app'));