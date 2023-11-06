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

var windowTheme = "Light";

window.onload = (event) => {
    navigationBar = document.getElementById("navigation-menu");
    branding = document.getElementById("branding-div");
    headerSeparator = document.getElementsByTagName("hr")[0];
    appScreenshot = document.getElementById("app-screenshot");
    supportUkraine = document.getElementById("support-ukraine");
    sendFeedback = document.getElementById("feedback-command");
    mobileMenuButton = document.getElementById("mobile-menu-button");
    mobileMenuSidebar = document.getElementById("mobile-menu-sidebar");
    menuBackdrop = document.getElementById("menu-backdrop");

    ApplyTheme();

    window.addEventListener("resize", Page_OnResize);

    Page_OnResize();
};

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
            headerSeparator.style.visibility = "collapse";
            navigationBar.style.visibility = "collapse";
            branding.style.left = "60px";
            sendFeedback.style.visibility = "collapse";
            supportUkraine.style.visibility = "collapse";
        }
        else{
            mobileMenuButton.style.visibility = "collapse";
            headerSeparator.style.visibility = "visible";
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