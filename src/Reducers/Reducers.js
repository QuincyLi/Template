import { combineReducers } from 'redux';
import { GETTOKEN, GOTTOKEN } from '../Actions/Actions';

function getToken(defaultAction = GETTOKEN , action) {
  console.log(defaultAction, action);
  switch (action.type) {
    case GETTOKEN:
      return { type: GETTOKEN };
    case GOTTOKEN:
    default:
      return { type: GOTTOKEN };
  }
}

export default combineReducers({ getToken: getToken });