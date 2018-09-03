
// on scroll change the background color
// var myNav = document.querySelector('ul');/
// myNav.scrollIntoView();
// myNav.scrollIntoView(true);
// // myNav.scrollIntoView({block: "center"});
// myNav.scrollIntoView({behavior:"auto",   block: "end", inline:"nearest"});

// // on mouse Over
// the navigation should show icons
var changeColor = document.getElementById("name")
//
// changeColor.addEventListener("mouseover", function()){
//   changeColor.target.style.color = "pink";
//
//   setTimeout(function(){
//     changeColor.target.style.color="";
//   }500);
// }, false);
//
changeColor.addEventListener("mouseover" function()){
  changeColor.target.style.color= "orange";
  setTimeout(function(){
    changeColor.taget.style.color = "";
  },500);
},false);
//
//
// // For iser input
// // "Create a function that asks the user to write anything they want to know about me"
// if name display huge name
// life display the following pictures.
//
// image change on mouse Over
// text change on click




document.getElementById("news").addEventListener("mouseover", function() {
  document.getElementById("BG").style.backgroundImage = "url(img/southamericangrandmother.jpg)";
}, false);
document.getElementById("news").addEventListener("mouseout", function() {
   document.getElementById("BG").style.backgroundImage = "";
}, false);
