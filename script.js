$("Document").ready(function () {
    $("#linkedIn").click(function () {
        window.location="https://www.linkedin.com/in/matruprasad-chand-137a35133/";
    });
    $("#twitter").click(function () {
        window.location="https://twitter.com/Matt110110";
    });
    $("#facebook").click(function () {
        window.location="https://www.facebook.com/Matt110110";
    });
    $("#insta").click(function () {
        window.location="https://www.instagram.com/matt110110/";
    });
    $("#github").click(function () {
        window.location="https://github.com/Matt110110";
    });
});
document.getElementById("But").addEventListener("click", function () {
   document.querySelector(".navbar-collapse").classList.toggle('in');
});