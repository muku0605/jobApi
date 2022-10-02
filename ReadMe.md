## upgrade the package,jsob to latest version.

npm i -g npm-check-updates
ncu -u
npm install

## hashing password

npm install bcryptjs

const bcrypt = require("bcryptjs");
const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(password, salt);

## mongoose instance method

models User.js
UserSchema.methods.getName = function () {
return this.name;
};

## return created by and update by

use below in schema
model/job.js
{ timestamps: true }

#### security

-helmet
-cors
-xss-clean
-express-rate-limit
