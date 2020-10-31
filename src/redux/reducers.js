import counter from './reducer/counter';

export default function combineReducers(state = {}, action) {
  // console.log({
  //   counter: counter(state.counter, action),
  // });
  return {
    counter: counter(state.counter, action),
  };
}
