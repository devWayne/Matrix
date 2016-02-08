var Client = require('ssh2').Client;
var fs = require('fs');



function upload(opt,pathToRemoteFile,pathToLocalFile){

var options = {
    host: opt.host,
    port: opt.port,
    username: opt.username,
    password: opt.password
};

var client = new Client();
    console.log(options);

client.on('ready', function() {
  client.sftp(function(err, sftp) {
    if (err) throw err;
    sftp.fastPut(pathToLocalFile, pathToRemoteFile ,function(err) {
      if (err) throw err;
      else {
        console.log('uploaded file to:'+pathToRemoteFile);
      }
      client.end();
    });
  });
}).connect(options);

};

module.exports = upload ;
