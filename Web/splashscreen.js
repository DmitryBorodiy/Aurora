function rootLayout_OnLoad(){
    var rootLayout;
    rootLayout = document.getElementById("rootLayout");
    rootLayout.style.height = window.innerHeight + "px";
    //console.log(window.innerHeight + "px");
}

function LoadHome(){
    document.location.href = "home.html";
}

setTimeout(rootLayout_OnLoad, 1);
setTimeout(LoadHome, 5600);