const fs = require('fs');

var publishPage = function(str, name) {

    fs.writeFile('./pages/' + name + '.html',str, (err) => {
        if (err) {
            console.log(err);
            throw err;
        }
        console.log('success');
        return true;
    });
}

module.exports = publishPage;
