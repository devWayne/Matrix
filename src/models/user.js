const bcrypt = require("../../lib/bcrypt-thunk"); 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const co = require("co");

var UserSchema = new Schema({
  username: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
}, {
  toJSON: {
    transform: function(doc, ret, options) {
      delete ret.password;
    },
  },
});

/**
 * Middlewares
 */
UserSchema.pre("save", function(done) {
  // only hash the password if it has been modified (or is new)
  if (!this.isModified("password")) {
    return done();
  }

  co.wrap(function*() {
    try {
      var salt = yield bcrypt.genSalt();
      var hash = yield bcrypt.hash(this.password, salt);
      this.password = hash;
      done();
    } catch (err) {
      done(err);
    }
  }).call(this).then(done);
});

/**
 * Methods
 */
UserSchema.methods.comparePassword = function *(candidatePassword) {
  return yield bcrypt.compare(candidatePassword, this.password);
};

/**
 * Statics
 */

UserSchema.statics.passwordMatches = function *(username, password) {
  var user = yield this.findOne({ username: username.toLowerCase() }).exec();
  if (!user) {
    throw new Error("User not found");
  }

  if (yield user.comparePassword(password)) {
    return user;
  }

  throw new Error("Password does not match");
};

// Model creation
mongoose.model("User", UserSchema);