const Koa = require('koa');
const co = require('co');
const convert = require('koa-convert');
const bodyParser = require('koa-bodyparser');
const path = require('path');


const app = new Koa(); 
app.use(bodyParser());

/**
 * static serve
 */
const serve = require('koa-static');
app.use(convert(serve(__dirname + '/static')));


/**
 * render config
 */
const render = require('koa-ejs');
render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'layout',
  viewExt: 'html',
  cache: false,
  debug: true
});

/**
 *  logger
 */
app.use(co.wrap(function *(ctx, next){
  const start = new Date;
  yield next();
  const ms = new Date - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
}));


/**
 *  router
 */
router = require('./route');
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(6900,()=>{
    console.info('listen at 6900');
});
