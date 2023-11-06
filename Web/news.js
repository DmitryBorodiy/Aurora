var RootNewsLayout;
var BlogPosts;

function NewsPage_OnLoad(){
    try{
        RootNewsLayout = document.getElementById("rootNewsLayout");
        BlogPosts = document.getElementById("blog-posts");

        NewsPage_OnResize();
    }
    catch(e){
        console.log(e);
    }
}

function LaunchBlogPostPage(url){
    try{
        console.log(url);

        window.localStorage.setItem("blogpost_page", url.toString());
        document.location.href = "views/blogpost.html";
    }
    catch(e){
        console.log(e);
    }
}

function NewsPage_OnResize(){
    try{
        var windowWidth = getWindowWidth();

        if(windowWidth > 620){
            document.getElementById("blog-posts").style.paddingLeft = "36px";
            document.getElementById("rootNewsLayout").style.paddingLeft = "42px";
        }
        else if(windowWidth < 620){
            document.getElementById("blog-posts").style.paddingLeft = "116px";
            document.getElementById("rootNewsLayout").style.paddingLeft = "120px";
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