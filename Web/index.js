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
var windowTheme = "Light";

window.onload = (event) => {
    navigationBar = document.getElementById("navigation-menu");
    branding = document.getElementById("branding-div");
    headerSeparator = document.getElementsByTagName("hr")[0];
    appScreenshot = document.getElementById("app-screenshot");

    ApplyTheme();

    window.addEventListener("resize", Page_OnResize);
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

        if(pageWidth < 700){
            //appScreenshot.style.top = "px";
            headerSeparator.style.visibility = "collapse";
            navigationBar.style.visibility = "collapse";
            branding.style.left = "60px";
        }
        else{
            //appScreenshot.style.top = "42px";
            headerSeparator.style.visibility = "visible";
            navigationBar.style.visibility = "visible";
            branding.style.left = "20px";
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