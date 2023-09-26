function rootLayout_OnLoad(){
    var rootLayout;
    rootLayout = document.getElementById("rootLayout");
    rootLayout.style.height = window.innerHeight + "px";
}

function LoadHome(){
    document.location.href = "main.html";
}

setTimeout(rootLayout_OnLoad, 1);
setTimeout(LoadHome, 5600);