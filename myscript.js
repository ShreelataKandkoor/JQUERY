$('h1').click(function(){
  console.log('There was a click!');
})

$('li').click(function(){
  console.log('any li was clicked!');
})


$('h1').click(function(){
  $(this).text("I was changed!")
})
//Key Press


$('input').eq(0).keypress(function(event){
  if (event.which === 13) {
    $('h4').toggleClass('turnBlue');
  }
})


//On() Method

$('h1').on('dblclick',function(){
  $(this).toggleClass('turnBlue');
})

$('h1').on('mouseenter',function(){
  $(this).toggleClass('turnBlue');
})


//
$('input').eq(0).on('click',function(){
  $('.container').fadeOut(3000)
})
