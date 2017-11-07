
//define functions here

function getIt(){
  $('p').on('click', function(){
    alert('hey')
  })
}

function frameIt(){
  $('img').on('load', function(){
    $(this).addClass("tasty");
  })
}


var pressIt = function(){
    $("input[type='text']").on('keydown', function(key){
      if(key.which === 71)
        alert("Hey");
    })
}

var submitIt = function(){
    $("form").on('submit', function(){
      alert("Your form is going to be submitted now.");
    })
}

$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
submit();

});
