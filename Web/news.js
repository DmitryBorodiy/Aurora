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