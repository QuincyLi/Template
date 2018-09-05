import fs from 'fs';
import path from 'path';
import Router from 'koa-router';
import request from 'request-promise';

import license from '../license/license';

const router = new Router();

let accessToken = '';

router.all('/', async (ctx, next) => {
  // const { code } = ctx.request.query;
  // try {
  //   if (!accessToken && !code) {
  //     let url = `${license.ipConfig}/api/auth/oauth2/authorize`;
  //     url += `?responseType=code&appid=${license.appId}&redirectUri=${ctx.request.origin}&state=state&scope=scope`;
  //     ctx.redirect(url);
  //   } else if (!accessToken && code) {
  //     let url = `${license.ipConfig}/api/auth/oauth2/accessToken`;
  //     url += `?grantType=authorization_code&appid=${license.appId}&secret=${license.secret}&code=${code}`;
  //     const res = await request.get(url);
  //     accessToken = JSON.parse(res).accessToken;
  //     // ctx.redirect('/');
  //     return next();
  //   }
  // } catch (e) {
  //   ctx.body = JSON.stringify(e);
  // }
});

router.get('index', async ctx => {

});
// router.post('/getToken', async (ctx) => {
//   // 获取静态资源
//   // request(`http://10.30.55.101/api/auth/oauth2/token?grantType=client_credential&appid=${license.appid}&secret=${license.secret}`, (error, response, body) => {
//   //   if (error) {
//   //     console.error(error);
//   //     return;
//   //   }

//   //   expiresIn = JSON.parse(body).expiresIn;
//   //   accessToken = JSON.parse(body).accessToken;
//   //   refreshToken = JSON.parse(body).refreshToken;
//   //   ctx.body = JSON.stringify({ accessToken, refreshToken, expiresIn });
//   // });
//   // const url = `http://10.30.52.63:8080/api/auth/oauth2/token?grantType=client_credential&appid=${license.appid}&secret=${license.secret}`;
//   // try {
//   //   const token = JSON.parse(await request.get(url));
//   //   accessToken = token.accessToken;
//   //   refreshToken = token.refreshToken;
//   //   expiresIn = token.expiresIn;
//   //   ctx.body = JSON.stringify({ accessToken, expiresIn, refreshToken });
//   // } catch (e) {
//   //   ctx.body = JSON.stringify(e);
//   // }
// });

router.post('/getToken', async ctx => {
  // try {

  // } catch (e) {
  //   ctx.body = JSON.stringify(e);
  // }
  // ctx.body = JSON.stringify({ success: true });
});

router.post('/getAppList', async ctx => {
  const url = `http://10.30.52.25:8080/api/compose/manage/apps?accessToken=${ctx.accessToken}`;
  try{
    ctx.body = await request.get(url);
  }catch(e){
    console.log(e);
  }
});

export default router;