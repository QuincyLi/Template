let Token = null;

export function request(url, options) {
  const newOptions = {
    headers: {},
    ...options
  }
  // if (Token) {
  //   newOptions.headers.Authorization = Token;
  // }
  return fetch(url, newOptions).then(res => res.json()).catch((err) => {
    return err;
  });
}

export function getToken() {
  request('/getToken', {
    method: 'POST'
  }).then(res => {
    Token = res.token;
  })
}