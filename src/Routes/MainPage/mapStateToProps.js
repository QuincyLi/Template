export function mapStateToProps(state) {
  return {
    data: state.AppList.list
  };
}