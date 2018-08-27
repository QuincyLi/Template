export function request(url, options) {
  const newOptions = {
    ...options
  }

  return fetch(url, newOptions).then((result) => {
    return result;
  }).catch((err) => {
    return err;
  });
}