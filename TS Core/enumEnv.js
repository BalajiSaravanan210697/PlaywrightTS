"use strict";
var Environment;
(function (Environment) {
    Environment[Environment["LOCAL"] = 0] = "LOCAL";
    Environment[Environment["DEVELOPMENT"] = 1] = "DEVELOPMENT";
    Environment[Environment["STAGING"] = 2] = "STAGING";
    Environment[Environment["PRODUCTION"] = 3] = "PRODUCTION";
})(Environment || (Environment = {}));
console.log(Environment);
function runTest(env) {
    console.log('Tests are running in the - ' + env + ' environment');
}
runTest(Environment.LOCAL);
runTest(Environment.PRODUCTION);
runTest(Environment.STAGING);
runTest(Environment.DEVELOPMENT);
