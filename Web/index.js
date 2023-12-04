import {
    StandardLuminance,
    baseLayerLuminance,
    fillColor,
    allComponents,
    accentBaseColor,
    provideFluentDesignSystem,
    SwatchRGB
} from "https://unpkg.com/@fluentui/web-components@2.0.0";

var navigationBar;
var branding;
var headerSeparator;
var appScreenshot;
var supportUkraine;
var sendFeedback;
var mobileMenuButton;
var mobileMenuSidebar;
var menuBackdrop;
var rootFrame;
var headerUI;
var headerActions;

var windowTheme = "Light";

window.onload = (event) => {
    if(hasElementWithId("frame")){
        rootFrame = document.getElementById("frame");

        rootFrame.addEventListener('load', function() {
            HandleScrollingAttach();
        });
    }

    navigationBar = document.getElementById("navigation-menu");
    branding = document.getElementById("branding-div");
    appScreenshot = document.getElementById("app-screenshot");
    supportUkraine = document.getElementById("support-ukraine");
    sendFeedback = document.getElementById("feedback-command");
    mobileMenuButton = document.getElementById("mobile-menu-button");
    mobileMenuSidebar = document.getElementById("mobile-menu-sidebar");
    menuBackdrop = document.getElementById("menu-backdrop");

    HandleScrollingAttach();
    ApplyTheme();

    window.addEventListener("resize", Page_OnResize);

    Page_OnResize();
};

function HandleScrollingAttach(){
    try{
        if(hasElementWithId("frame") && 
           hasElementWithId("header-ui") &&
           hasElementWithId("header-actions"))
        {
            rootFrame = document.getElementById("frame");
            headerUI = document.getElementById("header-ui");
            headerActions = document.getElementById("header-actions");

            var frameContentWindow = rootFrame.contentWindow;
            
            if(frameContentWindow != null){
                frameContentWindow.addEventListener("scroll", function() {
                    if(frameContentWindow.pageYOffset == 0){
                        document.getElementById("header-ui").style.removeProperty("backdrop-filter");
                        headerUI.style.backgroundColor = "transparent";
                        headerActions.style.right = "34px";
                    }
                    else{
                        headerActions.style.right = "18px";

                        if(windowTheme == "Dark") {
                            document.getElementById("header-ui").style.backdropFilter = "blur(60px)";
                            headerUI.style.backgroundColor = "rgba(20, 20, 20, 76%)";
                        }
                        else if(windowTheme == "Light") {
                            document.getElementById("header-ui").style.backdropFilter = "blur(50px)";
                            headerUI.style.backgroundColor = "rgba(255, 255, 255, 76%)";
                        }
                    }
                });
            }
        }
    }
    catch(e){
        console.log(e);
    }
}

function hasElementWithId(elementId) {
    var element = document.getElementById(elementId);
    return (element !== null);
}

function ApplyTheme(){
    try{
        const currentTheme = window.matchMedia("(prefers-color-scheme: dark)");

        if(currentTheme.matches){
            var root = document.getElementById("fluent-design-provider");
            baseLayerLuminance.setValueFor(root, StandardLuminance.DarkMode);

            windowTheme = "Dark";
        }
        else{
            var root = document.getElementById("fluent-design-provider");
            baseLayerLuminance.setValueFor(root, StandardLuminance.LightMode);

            windowTheme = "Light";
        }

        window.localStorage.setItem("theme", windowTheme);
    }
    catch(e){
        console.log(e);
    }
}

function Page_OnResize(){
    try{
        var pageWidth = getWindowWidth();

        if(pageWidth < 620){
            mobileMenuButton.style.visibility = "visible";
            navigationBar.style.visibility = "collapse";
            branding.style.left = "60px";
            sendFeedback.style.visibility = "collapse";
            supportUkraine.style.visibility = "collapse";
        }
        else{
            mobileMenuButton.style.visibility = "collapse";
            navigationBar.style.visibility = "visible";
            branding.style.left = "20px";
            sendFeedback.style.visibility = "visible";
            supportUkraine.style.visibility = "visible";
        }
    }
    catch(e){
        console.log(e);
    }
}

function getWindowWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
}