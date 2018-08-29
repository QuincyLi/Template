import { combineReducers } from 'redux';
import { GETAPPLIST, GOTAPPLIST } from '../Actions/Actions';

function getAppList(defaultAction = GETAPPLIST , action) {
  switch (action.type) {
    case GETAPPLIST:
      return { type: GETAPPLIST };
    case GOTAPPLIST:
    default:
      return { ...action };
  }
}

export default combineReducers({ AppList: getAppList });