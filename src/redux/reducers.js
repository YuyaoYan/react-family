import counter from './reducer/counter';
import userInfo from './reducer/userInfo';
import { combineReducers } from 'redux';

export default combineReducers({
  counter,
  userInfo,
});
