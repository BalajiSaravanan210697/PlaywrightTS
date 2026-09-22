enum Environment {
    LOCAL,
    DEVELOPMENT,
    STAGING,
    PRODUCTION
}
console.log(Environment);

function runTest(env:Environment):void{
    console.log('Tests are running in the - '+env+ ' environment');
    
}

runTest(Environment.LOCAL)
runTest(Environment.PRODUCTION)
runTest(Environment.STAGING)
runTest(Environment.DEVELOPMENT)