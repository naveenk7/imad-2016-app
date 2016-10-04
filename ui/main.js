console.log('Loaded!');
//change the text of the div main-text div

var element = document.getElementById('main-text');
element.innerHTML = "New Naveen";

//move the image
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight() {
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + "px";
 }
 img.onlcick = function () {
    var interval = setInterval(function (){moveRight()}, 50); 
};
