const a = require("../module-a/index");

module.exports = () => {
    a();
    console.log("call module-b index.js");
}