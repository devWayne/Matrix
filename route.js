const router = require('koa-router')();
const co = require('co');

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
  });


module.exports = router;
