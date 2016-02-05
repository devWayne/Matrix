const fs = require('fs');

var getLayout = function(_path) {

    return {
        success:true,
        layout:fs.readFileSync('./pages/template.html').toString()

    }
};

module.exports = getLayout;
