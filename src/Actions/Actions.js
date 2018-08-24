export const GETTOKEN = 'GETTOKEN';
export const GOTTOKEN = 'GOTTOKEN';

export function getToken() {
  return {
    type: GETTOKEN
  }
}

export function gotToken(){
  return {
    type: GOTTOKEM
  }
}
