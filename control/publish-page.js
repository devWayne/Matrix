const fs = require('fs');
const config = require('../config');

const upload = require('../lib/upload');

var publishPage = function(str, name) {

    //save pages
    fs.writeFileSync('./pages/' + name + '.html',str);
    upload(config.config,'/data/webapps/static/pages/test1.html','./pages/test1.html');
    
}

module.exports = publishPage;
