$(document).ready(function(){
  $('#homepage').on('click', openGate);
  $('body').addClass('visible');
  $('.nav_link').on('click', followLink)
});

openGate = function(){
  $('body').addClass('open_gate');
  setTimeout(function(){
    $('body').addClass('fade_out');
  }, 600);
  setTimeout(function(){
    window.location.href = 'store.html';
  }, 1400);
}

followLink = function(e){
  var link = $(e.target).attr('href');
  console.log(link);
  e.preventDefault();
  e.stopPropagation();
  $('body').removeClass('visible');
  setTimeout(function(){
    window.location.href = link;
  }, 600); 
}