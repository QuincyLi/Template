import Router from 'koa-router';
import request from 'request-promise';

import license from '../license/license';

const router = new Router();

let accessToken = '';
let refreshToken = '';
let expiresIn = '';

router.get('/', async (ctx) => {
  await ctx.render('views/index.html');
});

router.get('*', (ctx) => {
  ctx.redirect('/');
});

router.post('/getToken', async (ctx) => {
  // 获取静态资源
  // request(`http://10.30.55.101/api/auth/oauth2/token?grantType=client_credential&appid=${license.appid}&secret=${license.secret}`, (error, response, body) => {
  //   if (error) {
  //     console.error(error);
  //     return;
  //   }

  //   expiresIn = JSON.parse(body).expiresIn;
  //   accessToken = JSON.parse(body).accessToken;
  //   refreshToken = JSON.parse(body).refreshToken;
  //   ctx.body = JSON.stringify({ accessToken, refreshToken, expiresIn });
  // });
  const url = `http://10.30.55.101/api/auth/oauth2/token?grantType=client_credential&appid=${license.appid}&secret=${license.secret}`;
  try {
    ctx.body = await request.get(url);
  } catch (e) {
    ctx.body = JSON.stringify(e);
  }
});

router.post('/getAppList', async ctx => {
  ctx.body = await request.get('http://10.30.52.63:8080/api/compose/manage/app?');
});

export default router;