import Router from 'koa-router';
import request from 'request';

import license from '../license/license';

const router = new Router();

let token = '';
// 获取静态资源
request(`http://10.30.55.101/api/auth/oauth2/token?grantType=client_credential&appid=${license.appid}&secret=${license.secret}`, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }
  token =  JSON.parse(body).accessToken;
});

router.get('/', async (ctx) => {
  await ctx.render('views/index.html');
});

router.get('*', (ctx) => {
  ctx.redirect('/');
});

router.post('/getToken', async (ctx) => {
  ctx.body = token;
});

export default router;