import { GETTOKEN } from 'root/Actions/Actions';

export function mapDispatchToProps(dispatch) {
  return {
    getToken: () => {
      dispatch({
        type: GETTOKEN
      })
    }
  }
}