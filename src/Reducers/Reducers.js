import { combineReducers } from 'redux';
import { GETTOKEN, GOTTOKEN } from '../Actions/Actions';

function getToken({ type }) {
  switch (type) {
    case GETTOKEN: 
      return { type: GETTOKEN };
    case GOTTOKEN:
      return { type: GOTTOKEN };
  }
}

export default combineReducers({ getToken: getToken });