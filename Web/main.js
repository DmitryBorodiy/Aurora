var headerUI;
var rootFrame;
var getProductButton;
var feedbackCommand;
var supportUkraine;
var mobileMenuSidebar;
var mobileMenuBackdrop;
var searchBar;
var searchCommand;
var SearchUI;
var ThemeView;
let domLock;

var IsMenuOpen = false;

//window.onload = function(){
    //Page_OnLoaded();
//};

function Page_OnLoaded() {
    headerUI = document.getElementsByTagName("header")[0];
    rootFrame = document.getElementById("frame");
    feedbackCommand = document.getElementById("feedback-command");
    getProductButton = document.getElementById("get-product-command");
    supportUkraine = document.getElementById("feedback-command");
    mobileMenuSidebar = document.getElementById("mobile-menu-sidebar");
    mobileMenuBackdrop = document.getElementById("sidebar-shell-backdrop");
    searchBar = document.getElementById("mobile-search-bar");
    searchCommand = document.getElementById("mobile-search-command");
    ThemeView = document.getElementById("theme-view-box");
    domLock = document.querySelector(".lock");

    getProductButton.addEventListener("click", GetProduct);
    feedbackCommand.addEventListener("click", SendReview);
    searchCommand.addEventListener("click", MakeSearch);

    InitLockIcon();
};

function Page_OnResize() {
    var windowWidth = getWindowWidth();

    document.getElementById("frame").style.height = getWindowHeight() + "px";
    document.getElementById("frame").style.width = getWindowWidth() + "px";
};

function getWindowWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
}

function getWindowHeight() {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.documentElement.offsetHeight
    );
}

function NavigateFrame(page){
    try {
        document.getElementById("frame").src = page.toString();
        var buttons = document.querySelectorAll('#navigation-menu button');

        buttons.forEach(function (button) {
            button.classList.remove('fluent-hyperlink-selected');
            button.classList.add('fluent-hyperlink');
        });

        var clickedButton = event.currentTarget;
        clickedButton.classList.add('fluent-hyperlink-selected');
        clickedButton.classList.remove('fluent-hyperlink');
    }
    catch(e){
        console.log(e);
    }
}

function GetProduct(){
    try{
        var platform = navigator.platform.toString();
        console.log(platform);

        if(platform.indexOf("Win")){
            window.open("ms-windows-store://pdp/?productid=9MXZLDLCTFWL");
        }
        else{
            window.open("https://www.microsoft.com/store/apps/9MXZLDLCTFWL");
        }
    }
    catch(e){
        console.log(e);
    }
}

function SendReview(){
    try{
        var feedbackTitle = "Aurora product feedback";
        window.open("mailto:dima.borodiy@outlook.com?subject=" + feedbackTitle.toString());
    }
    catch(e){
        console.log(e);
    }
}

function SetMenuOpened(isOpen){
    IsMenuOpen = isOpen;

    if(mobileMenuSidebar == null)
    {
        mobileMenuSidebar = document.getElementById("mobile-menu-sidebar");
        mobileMenuBackdrop = document.getElementById("sidebar-shell-backdrop");
    }

    if(isOpen == true){
        mobileMenuSidebar.classList.remove("hide-menu-sidebar");
        mobileMenuSidebar.classList.add("show-menu-sidebar");

        mobileMenuBackdrop.style.visibility = "visible";
    }
    else{
        mobileMenuSidebar.classList.remove("show-menu-sidebar");
        mobileMenuSidebar.classList.add("hide-menu-sidebar");

        mobileMenuBackdrop.style.visibility = "collapse";
    }
}

function MobileMenuButton_OnClick(){
    if(IsMenuOpen == false){
        SetMenuOpened(true);
    }
    else{
        SetMenuOpened(false);
    }
}

function Search(query){
    try{
        var rootUrl = "https://cse.google.com/cse?cx=a2c93e9887f704b6d#gsc.tab=0&gsc.q=" + query.toString();
        window.open(rootUrl);
    }
    catch(e){
        console.log(e);
    }
}

function MakeSearch(){
    try{
        if(searchBar == null){
            searchBar = document.getElementById("mobile-search-bar");
        }

        var searchQuery = searchBar.value.toString();

        if(searchQuery != null && searchBar != null){
            Search(searchQuery.toString());
        }
    }
    catch(e){
        console.log(e);
    }
}

function GetPremiumSubscription(){
    try{
        window.open("aurora:premium");
    }
    catch(e){
        console.log(e);
    }
}

//#region SecuritySection
function InitLockIcon(){
    let closed = false;

    if(domLock != null){
        domLock.addEventListener("click", ()=> {
            closed = !closed;
            domLock.classList.toggle("closed", closed);

            let anim = closed ?
                        "LinearShake ease-in-out 280ms, 360ms AngularShake ease-in-out 280ms" :
                        "LinearShake ease-in-out 280ms";

            domLock.style.animation = "none";
            setTimeout(()=> domLock.style.animation = anim, 0);
        });
    }
}
//#endregion