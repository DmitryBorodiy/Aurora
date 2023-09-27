var headerUI;
var rootFrame;
var getProductButton;
var feedbackCommand;
var supportUkraine;

function Page_OnLoaded() {
    headerUI = document.getElementsByTagName("header")[0];
    rootFrame = document.getElementById("frame");
    feedbackCommand = document.getElementById("feedback-command");
    getProductButton = document.getElementById("get-product-command");
    supportUkraine = document.getElementById("feedback-command");

    getProductButton.addEventListener("click", GetProduct);
    feedbackCommand.addEventListener("click", SendReview);
};

function Page_OnResize() {
    var windowWidth = getWindowWidth();

    document.getElementById("frame").style.height = getWindowHeight() + "px";
    document.getElementById("frame").style.width = getWindowWidth() + "px";
};

function getWindowWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
}

function getWindowHeight() {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.documentElement.offsetHeight
    );
}

function NavigateFrame(page){
    document.getElementById("frame").src = page.toString();
}

function GetProduct(){
    try{
        var platform = navigator.platform.toString();
        console.log(platform);

        if(platform.indexOf("Win")){
            window.open("ms-windows-store://pdp/?productid=9MXZLDLCTFWL");
        }
        else{
            window.open("https://www.microsoft.com/store/apps/9MXZLDLCTFWL");
        }
    }
    catch(e){
        console.log(e);
    }
}

function SendReview(){
    try{
        var feedbackTitle = "Aurora product feedback";
        window.open("mailto:dima.borodiy@outlook.com?subject=" + feedbackTitle.toString());
    }
    catch(e){
        console.log(e);
    }
}