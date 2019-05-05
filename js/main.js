$(document).ready(function(){
  $('body').on('click', openGate);
});

openGate = function(){
  $('body').addClass('open_gate');
}