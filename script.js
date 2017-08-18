$("Document").ready(function () {
    $("#linkedIn").click(function () {
        window.location="https://www.linkedin.com/";
    });
    $("#twitter").click(function () {
        window.location="https://twitter.com/";
    });
    $("#facebook").click(function () {
        window.location="https://www.facebook.com/";
    });
    $("#insta").click(function () {
        window.location="https://www.instagram.com/";
    });
    $("#github").click(function () {
        window.location="https://github.com/";
    });
});
document.getElementById("But").addEventListener("click", function () {
   document.querySelector(".navbar-collapse").classList.toggle('in');
});