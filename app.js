const Koa = require('koa');
const app = new Koa(); 
const co = require('co');
const views = require('koa-views');
const convert = require('koa-convert');

router = require('./route');


app.use(convert(views('views', {
  map: {
    html: 'ejs'
  }
})));

app.use(co.wrap(function *(ctx, next){
  const start = new Date;
  yield next();
  const ms = new Date - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
}));


app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(6900,()=>{
    console.info('listen at 6900');
});
