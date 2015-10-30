const Koa = require('koa');
const app = new Koa();

// logger

app.use((ctx, next) => {
  const start = new Date;
  return next().then(() => {
    const ms = new Date - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}`);
  });
});

// response

app.use(ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);