import { request } from "../Utils/request";

export async function getAppListSerivce() {
  return request('/getAppList', {
    method: 'POST'
  });
}