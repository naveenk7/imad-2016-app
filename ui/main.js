console.log('Loaded!');

//counter code:
var button = document.getElementById('counter');

button.onclick = function() {
    console.log('Inside button click!');
//Make a request to the counter end point
var request = new XMLHttpRequest();

//capture the response and store it in a variable
  request.onreadystatechange = function(){
      if (request.readyState === XMLHttpRequest.DONE) {
    // everything is good, the response is received
                if (request.status === 200) {
            // perfect!
            var counter = request.responseText;
            console.log('Inside button click!'+ counter);
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
            } 
    } else {
         console.log('Not ready'+ request.status);
    // still not ready
}
      
    //Make the request
    request.open('GET','http://naveenk7.imad.hasura-app.io/counter', true);
    request.send(null);
  };

};

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
