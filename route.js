const router = require('koa-router')();
const co = require('co');
const getLayout = require('./lib/get-layout');
const getModule = require('./lib/get-module');
const publishPage = require('./lib/publish-page');

router
  /*.get('/', async(ctx, next) => {
    await ctx.render('index');
  })*/
  .get('/',co.wrap(function *(ctx, next){
     yield ctx.render('index');
  }))

  .post('/users', (ctx, next) => {
    // ...
  })
  .put('/users/:id', (ctx, next) => {
    // ...
  })
  .del('/users/:id', (ctx, next) => {
    // ...
  })



   //api
   .get('/api/getlayout',co.wrap((ctx, next) => {
        ctx.body = getLayout();
   }))

   .get('/api/getModules',co.wrap((ctx,next) =>{
        ctx.body = getModule();
   }))

   .post('/api/publishPage',co.wrap((ctx,next) =>{
        var page = ctx.request.body.page;
        console.log(page);
        if(publishPage(page,'test1')){
            ctx.body =200;
        }
   }))


module.exports = router;
