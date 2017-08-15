$("Document").ready(function () {
    $('[data-toggle="tooltip"]').tooltip(); 
    
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
  
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });

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
    $("#facebook").addClass("w3-text-blue");
    $("#twitter").addClass("w3-text-indigo");
    $("#insta").addClass("w3-text-pink");
    $("#linkedIn").addClass("w3-text-aqua");
});