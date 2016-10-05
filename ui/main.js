console.log('Loaded!');

//counter code:
var button = document.getElementById('counter');

button.onclick = function() {
//Make a request to the counter end point
var request = new XMLHttpRequest();

//Make the request
    request.open('GET','http://naveenk7.imad.hasura-app.io/counter', true);
    request.send(null);
    
//capture the response and store it in a variable
  request.onreadystatechange = function(){
      if (request.readyState === XMLHttpRequest.DONE) {
    // everything is good, the response is received
                if (request.status === 200) {
            // perfect!
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
            } 
    } else {
     
    // still not ready
}
      

  };

};

//submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');

submit.onclick = function(){
    
    //capture a list of names and render it in a list
    var names = ['name1','name2','name3','name4'];
    var list ='';
    for (var i=0;i<names.length;i++){
        list += '<li>' +names[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML= list;
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
