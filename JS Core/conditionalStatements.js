/* Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, and 
`runTests` with `switch` for test type messages.  */

function launchBrowser(browserName){

    if(browserName==="Chrome"){
        console.log("Running on Chrome Browser");    
    }
    else{
        console.log("running in this browser : "+browserName);
        
    }

}

function runTests(testType){

    switch(testType){
        case "smoke":
            console.log("smoke testing");
            break
         
        case "sanity":
            console.log("sanity testing");
            break

        case "regression":
            console.log("regression testing");
            break
         
        default:
            console.log("smoke test");
                   
    }
}

launchBrowser("Edge")
launchBrowser("Chrome")
launchBrowser("FireFox")
runTests("smoke")
runTests("sanity")
runTests("automation")
runTests("regression")
