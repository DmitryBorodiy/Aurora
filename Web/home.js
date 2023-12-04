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

        if(pageWidth < 510){
            document.getElementById("features").style.top = "-24px";
        }
        else{
            document.getElementById("features").style.top = "32px";
        }

        if(pageWidth < 490){
            document.getElementById("segmented-ui").style.right = "12px";
        }
        else{
            document.getElementById("segmented-ui").style.right = "0px";
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

function SetScreenshotDisplayByIndex(index){
    try{
        for(var i = 0; i <= 3; i++){
            if(i != index){
                document.getElementsByClassName("app-screenshot")[i].style.visibility = "collapse";
                document.getElementsByClassName("app-screenshot")[i].style.display = "none";
            }
            else{
                document.getElementsByClassName("app-screenshot")[i].style.visibility = "visible";
                document.getElementsByClassName("app-screenshot")[i].style.display = "block";
            }
        }
    }
    catch(e){
        console.log(e);
    }
}