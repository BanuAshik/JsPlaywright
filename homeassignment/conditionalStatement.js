function launchBrowser(){

if (browserName==="chrome")
{
   console.log("148.0.7778.97");
}
else
{    console.log("browser not supported, please enter the valid browser for windows environment");
}
}
let browserName = "chrome";
launchBrowser();



function runTests(){
    switch(testType)
    {
        case 1:
         console.log("smoke");
        break;
        case 2:
         console.log("regression");
        break;
        case 3:
         console.log("sanity");
        break;
        default:
            console.log("smoke")
            break;
    }
}
let testType=2
runTests(testType);
