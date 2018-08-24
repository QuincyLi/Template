import Router from 'koa-router';
import license from '../license/license';

const router = new Router();

router.get('/', async (ctx) => {
  await ctx.render('views/index.html');
});

router.post('/getToken', async (ctx) => {
  // 获取静态资源
  ctx.body = await request(`http://10.30.55.101/api/auth/oauth2/token?grantType=client_credential&appid=${license.appid}&secret=${license.secret}`, (error, response, body) => {
    if (error) {
      console.error(error);
      return;
    }
    return JSON.parse(body).accessToken;
  });
});

export default router;