import { request } from "../Utils/request";

export async function getTokenSerivce() {
  return request('/getToken', {
    method: 'POST'
  });
}