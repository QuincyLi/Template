import Koa from 'koa';
import path from 'path';
import views from 'koa-views';
import serve from 'koa-static';
import Router from 'koa-router';
import request from 'request-promise';

import index from '../routes/index';
import license from '../license/license';

const app = new Koa();
const router = new Router();
const staticPath = process.env.NODE_ENV === 'DEV' ? path.resolve('./src') : path.resolve('./dist/src');

let accessToken = '';

// 优先验证token，如果不带token则重定向到auth
// middleware一定要在static之前，以免更目录get请求被拦截
app.use(async (ctx, next) => {
  const { code } = ctx.request.query;
  try {
    if (!accessToken && !code) {
      let url = `${license.ipConfig}/api/auth/oauth2/authorize`;
      url += `?responseType=code&appid=${license.appId}&redirectUri=${ctx.request.origin}&state=state&scope=scope`;
      ctx.redirect(url);
    } else if (!accessToken && code) {
      let url = `${license.ipConfig}/api/auth/oauth2/accessToken`;
      url += `?grantType=authorization_code&appid=${license.appId}&secret=${license.secret}&code=${code}`;
      const res = await request.get(url);
      accessToken = JSON.parse(res).accessToken;
      ctx.redirect('/');
      return next();
    } else if (accessToken) {
      ctx.accessToken = accessToken;
      return next();
    }
  } catch (e) {
    ctx.body = JSON.stringify(e);
  }
});

if (process.env.NODE_ENV === 'DEV') {
  const devMiddleware = require('koa-webpack-dev-middleware');
  const hotMiddleware = require('koa-webpack-hot-middleware');
  const webpack = require('webpack');
  const devConfig = require('../../webpack.config/webpack.dev.config');
  const complie = webpack(devConfig);

  app.use(devMiddleware(complie, {
    noInfo: true,
    // 编译信息有颜色显示
    stats: {
      colors: true,
      quiet: true,
      publicPath: devConfig.output.publicPath
    }
  }));

  app.use(hotMiddleware(complie));
}

// app.use(
//   views(staticPath, {
//     extension: 'ejs'
//   })
// );

// app.use(
//   serve(staticPath)
// );

router.use('', index.routes(), index.allowedMethods());

app.use(router.routes(), router.allowedMethods());


app.listen(3000, () => {
  console.log('port 3000 has been listened!');
});