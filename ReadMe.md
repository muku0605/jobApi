## upgrade the package,jsob to latest version.

npm i -g npm-check-updates
ncu -u
npm install

## hashing password

npm install bcryptjs

const bcrypt = require("bcryptjs");
const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(password, salt);

## compare password

UserSchema.methods.comparePassword = async function (candidatePassword) {
const isMatch = await bcrypt.compare(candidatePassword, this.password);
return isMatch;
};

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

## sSwagger

export the Api from postman .
use apimatic to change format
https://www.apimatic.io/

in apimatic export the json collecion from postman
modify group and skip auth where it is not required.

then export API (OPEN APi 3.0(YAML))

add nodemon in dev script

"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"start": "node app.js",
"dev": "nodemon app.js"
}
npm run dev
