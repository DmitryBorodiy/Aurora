function HomePage_OnLoaded(){
    HomePage_OnResize();
}

function HomePage_OnResize(){
    try{
        var pageWidth = getWindowWidth();

        if(pageWidth < 620){
            document.getElementById("hero-container").style.paddingBottom = "60px";
        }
        else if(pageWidth > 620){
            document.getElementById("hero-container").style.paddingBottom = "260px";
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
