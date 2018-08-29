import { GETAPPLIST } from 'root/Actions/Actions';

export function mapDispatchToProps(dispatch) {
  return {
    getAppList: () => {
      dispatch({
        type: GETAPPLIST
      })
    }
  }
}