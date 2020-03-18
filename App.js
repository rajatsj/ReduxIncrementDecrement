import React from 'react';
import {createStore}  from 'redux';
import {Provider} from 'react-redux';
import CounterApp from './Counter';
const initialstate={
  counter:0
}
const reducer=(state=initialstate,action)=>
{
  switch(action.type)
  {
    case 'Increase':
      return{counter:state.counter+1}
    case 'Decrease':
    return{counter:state.counter-1}
    case 'Reset':
      return{counter:state.counter=0}
  }
  return state
}
const store = createStore(reducer)
export default class App extends React.Component
{
  render(){
  return(
    <Provider store ={store}>
    <CounterApp/>
    </Provider>
  );
  }
}