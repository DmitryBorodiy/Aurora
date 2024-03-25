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
            document.getElementById("looks-beautiful").style.paddingLeft = "24px";
            document.getElementById("looks-beautiful").style.paddingRight = "24px";
        }
        else{
            document.getElementById("features").style.top = "32px";
            document.getElementById("looks-beautiful").style.paddingLeft = "56px";
            document.getElementById("looks-beautiful").style.paddingRight = "56px";
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

function getPreferredColorScheme() {
    if(window.matchMedia) {
      if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        return 'dark';
      } else {
        return 'light';
      }
    }
    
    return 'light';
}

function SetScreenshotDisplayByIndex(index){
    try{
        let appScreenViewImg = document.getElementById("app-screen-img");
        let appTheme = getPreferredColorScheme();
        let pictureSource = document.getElementById("app-screen-media");

        if(pictureSource != null){
            pictureSource.remove();
        }

        console.log(appScreenViewImg);

        if(appScreenViewImg != null){
            switch(index){
                case 0:
                    if(appTheme == 'light'){
                        appScreenViewImg.src = "assets/screenshots/Screen-main.png";
                    }
                    else{
                        appScreenViewImg.src = "assets/screenshots/Screen-main-dark.png";
                    }
                break;
                case 1:
                    if(appTheme == 'light'){
                        appScreenViewImg.src = "assets/screenshots/Screen-explore.png";
                    }
                    else{
                        appScreenViewImg.src = "assets/screenshots/Screen-explore-dark.png";
                    }
                break;
                case 2:
                    if(appTheme == 'light'){
                        appScreenViewImg.src = "assets/screenshots/Screen-assistant.png";
                    }
                    else{
                        appScreenViewImg.src = "assets/screenshots/Screen-assistant-dark.png";
                    }
                break;
                case 3:
                    if(appTheme == 'light'){
                        appScreenViewImg.src = "assets/screenshots/Screen-search.png";
                    }
                    else{
                        appScreenViewImg.src = "assets/screenshots/Screen-search-dark.png";
                    }
                break;
                case 4:
                    if(appTheme == 'light'){
                        appScreenViewImg.src = "assets/screenshots/";
                    }
                    else{
                        appScreenViewImg.src = "assets/screenshots/";
                    }
                break;
            }
        }
    }
    catch(e){
        console.log(e);
    }
}

//#region themes-slider



//#endregion

//#region scrolling animation

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
}

window.addEventListener("scroll", reveal);

reveal();

//#endregion

//#region Sharing

function ShareUrl(url, title, text){
    const shareData = {
        title: title,
        text: text,
        url: url,
    };
    
    navigator.share(shareData);
}

//#endregion