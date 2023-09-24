function rootLayout_OnLoad(){
    var rootLayout;
    rootLayout = document.getElementById("rootLayout");
    rootLayout.style.height = window.innerHeight + "px";
    //console.log(window.innerHeight + "px");
}

setTimeout(rootLayout_OnLoad, 1);