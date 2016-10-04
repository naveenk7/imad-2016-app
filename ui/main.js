console.log('Loaded!');

//counter code:
var button = document.getElementById('counter');
var counter=0;

button.onclick = function() {
    
    
counter=counter+1;
var span = document.getElementById('count');

span.innerHTML = counter.toString();
    
}

//change the text of the div main-text div

/*var element = document.getElementById('main-text');
element.innerHTML = "New Naveen";

//move the image
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight() {
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
 }
 img.onlcick = function () {
    var interval = setInterval(moveRight, 50); 
};*/
