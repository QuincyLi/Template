import { combineReducers } from 'redux';
import { GETTOKEN, getToken } from '../Actions/Actions';

function getToken({ type }) {
  switch (type) {
    case GETTOKEN: 
      return { type: GETTOKEN };
  }
}

export default combineReducers({ getToken: getToken });