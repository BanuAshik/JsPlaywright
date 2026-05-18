function launchBrowser(browserName){

if (browserName==="chrome")
{
   return "148.0.7778.97"
}
else
{    return "browser not supported, please enter the valid browser for windows environment"
}


console.log(launchBrowser(browserName));
}


function runTests(testType){
    switch(testType)
    {
        case 1:smoke
        break;
        case 2:regression
        break;
        case3:sanity
        break;
        default:
            console.log("smoke")
            break;
    }
let testType=1

console.log(runTests(testType));
}