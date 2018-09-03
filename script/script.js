// var myHeading = document.querySelector('h1');
// myHeading.textContent = "I'm Jacky Kimani";

var myImage = document.getElementById('logo');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
if (mySrc === "images/logo.png"){
    myImage.setAttribute ('src',"images/keem2.jpg");
}
else if (mySrc === "images/keem2.jpg"){
    myImage.setAttribute ('src', "images/keem.JPG");
}
else{
    myImage.setAttribute ('src', "images/logo.png");
}
}

var myName = document.getElementById("name");
myName.addEventListener("mouseover", function( change) {
    change.target.style.color ="orange";

    // reset the color after a short delay
    setTimeout(function() {
      change.target.style.color = "pink";
    }, 1500);
  }, false);
