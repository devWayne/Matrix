const fs = require('fs');
const Handlebars = require('handlebars');

var getModule = function(_path) {
    var _data = JSON.parse(fs.readFileSync('./components/modules/module1/default.data.json'));
    var _tpl = Handlebars.compile(fs.readFileSync('./components/modules/module1/index.hbs').toString());
    return {
        success:true,
        layout: _tpl(_data)

    }
};

module.exports = getModule;
