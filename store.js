import {createStore} from 'redux';


const initialState = {
  counter : 0
}

export function reducer(state = initialState, action){
  console.log('reducer', state, action);
switch(action.type){
  case "INCREMENT":
  return { counter : state.counter + 1};

  case "DECREMENT":
  return {counter : state.counter - 1};

  default :
  return state;
}

}

export const store = createStore(reducer);
