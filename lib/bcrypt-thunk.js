const bcrypt = require("bcrypt");

module.exports = bcrypt.genSaltSync;
module.exports = bcrypt.hashSync;
module.exports = bcrypt.compareSync;
module.exports.getRounds = bcrypt.getRounds;

module.exports.genSalt = function(rounds, ignore) {
  return new Promise((resolve, reject)=> {
    bcrypt.genSalt(rounds, ignore, (err, salt)=> {
      if (err) { return reject(err); }
      return resolve(salt);
    });
  });
};

module.exports.hash = function(data, salt) {
  return new Promise((resolve, reject)=> {
    bcrypt.hash(data, salt, (err, hash)=> {
      if (err) { return reject(err); }
      return resolve(hash);
    });
  });
};

module.exports.compare = function(data, hash) {
  return new Promise((resolve, reject)=> {
    bcrypt.compare(data, hash, (err, matched)=> {
      if (err) { return reject(err); }
      return resolve(matched);
    });
  });
};
