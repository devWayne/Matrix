const router = require('koa-router')();
const co = require('co');
const getLayout = require('./control/get-layout');
const getModule = require('./control/get-module');
const publishPage = require('./control/publish-page');

router
    .get('/', co.wrap(function*(ctx, next) {
        yield ctx.render('index');
    }))



//api
.get('/api/getlayout', co.wrap((ctx, next) => {
    ctx.body = getLayout();
}))

.get('/api/getModules', co.wrap((ctx, next) => {
    ctx.body = getModule();
}))

.post('/api/publishPage', co.wrap((ctx, next) => {
    var page = ctx.request.body.page;
    publishPage(page, 'test1')
    ctx.body = {
        success: true
    };
}))


module.exports = router;
