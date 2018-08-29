export const GETAPPLIST = 'GETAPPLIST';
export const GOTAPPLIST = 'GOTAPPLIST';

export function getAppList() {
  return {
    type: GETAPPLIST
  }
}

export function gotAppList(){
  return {
    type: GOTAPPLIST
  }
}
