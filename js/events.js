//define functions here
function getIt(){
  $('p').on('click', function(){
    alert('hey')
  })
}

function frameIt(){
  $('').on('load', function(){
    
  })
}

function pressIt(){
  $('form').on('keydown', function(){
    if($("input:first").val() === 71){
      alert('alert you pressed G')
      return
    }  
  })
}

function submitIt(){
  $('form').on('submit', function(){
    alert('Your form is going to be submitted now.')
    return
  })
}

$(document).ready(function(){

// call functions here

});
