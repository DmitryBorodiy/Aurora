import {
    StandardLuminance,
    baseLayerLuminance,
    fillColor,
    allComponents,
    accentBaseColor,
    provideFluentDesignSystem,
    SwatchRGB
} from "https://unpkg.com/@fluentui/web-components@2.0.0";

window.onload = (event) => {
    ApplyTheme();

    getProductButton = document.getElementById("get-product-command");
    sendFeedbackButton = document.getElementById("send-feedback-command");
    brandingBox = document.getElementById("branding-div");
    headerUI = document.getElementsByTagName("header")[0];
    bradingIcon = document.getElementById("branding-logo");
    brandingTitle = document.getElementById("branding-title");
    pageTag = document.getElementById("page-tag");
    mobileMenuButton = document.getElementById("mobile-menu-button");

    getProductButton.addEventListener("click", GetProduct);
    sendFeedbackButton.addEventListener("click", SendReview);
};

window.onresize = (event) => {
    var windowWidth = getWindowWidth();

    if(windowWidth < 560){
        brandingTitle.style.visibility = "collapse";
        document.getElementsByTagName("hr")[0].style.visibility = "collapse";
        headerUI.style.display = "table";
        headerUI.style.textAlign = "center";
        pageTag.style.visibility = "collapse";
        sendFeedbackButton.style.visibility = "collapse";
        brandingBox.style.visibility = "collapse";
        mobileMenuButton.style.visibility = "visible";
    }
    else{
        brandingTitle.style.visibility = "visible";
        document.getElementsByTagName("hr")[0].style.visibility = "visible";
        headerUI.style.display = null;
        headerUI.style.textAlign = null;
        pageTag.style.visibility = "visible";
        sendFeedbackButton.style.visibility = "visible";
        brandingBox.style.visibility = "visible";
        mobileMenuButton.style.visibility = "collapse";
    }
};

var getProductButton;
var sendFeedbackButton;
var brandingBox;
var brandingTitle;
var bradingIcon;
var headerUI;
var pageTag;
var mobileMenuButton;

function getWindowWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
}

function ApplyTheme(){
    try{
        const currentTheme = window.matchMedia("(prefers-color-scheme: dark)");

        if(currentTheme.matches){
            var root = document.getElementById("fluent-design-provider");
            baseLayerLuminance.setValueFor(root, StandardLuminance.DarkMode);
        }
        else{
            var root = document.getElementById("fluent-design-provider");
            baseLayerLuminance.setValueFor(root, StandardLuminance.LightMode);
        }
    }
    catch(e){
        console.log(e);
    }
}

function GetProduct(event){
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