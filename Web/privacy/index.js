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
};

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