// math.random;
var checkClk = document.querySelector("button");

checkClk.addEventListener('click', function(){
// function Random(number){
//   return Math.floor(math.random()*(number+1) )
// }
function bgChange(){
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')'
  document.body.style.backgroundColor = rndCol;
  console.log(rndCol);

});

/* Code not working
 api -- re usable functionality that can be used anywhere
 Check Geolocation ApI and how you can use it.
 Dom(document model) api manipulute text content(eg html)
 querySelector
 ---returns the element of the selected provider eg ('p')
 ==== Strict equality
 method Number();
*/
