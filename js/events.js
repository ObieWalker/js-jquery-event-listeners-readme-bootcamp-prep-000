
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


function pressIt(){
  $('form').on('keydown', function(){
    if($(key.which === 71){
      alert('alert you pressed G')
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
