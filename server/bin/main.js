import Koa from 'koa';
import path from 'path';
import request from 'request';
import views from 'koa-views';

import router from '../routes/index';

const app = new Koa();

let staticPath = process.env.NODE_ENV === 'DEV' ? '../../src' : 'dist';
let token = '';

if (process.env.NODE_ENV === 'DEV') {
  const devMiddleware = require('koa-webpack-dev-middleware');
  const hotMiddleware = require('koa-webpack-hot-middleware');
  const webpack = require('webpack');
  const devConfig = require('../../webpack.config/webpack.config');
  const complie = webpack(devConfig);

  app.use(devMiddleware(complie, {
    noInfo: true,
    // 编译信息有颜色显示
    stats: {
      colors: true
    }
  }));

  app.use(hotMiddleware(complie));
}

// 加载静态资源
app.use(views(
  path.join(__dirname, staticPath), { extension: ['html', 'js'] }
));

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
console.log('port 3000 has been listened!');