//business logic
  var outPut = '';
  var countTonumber;
function condition() {
  for (var count = 1; count <= countTonumber; count++) {
    if ((count % 3 == 0) && (count % 5 == 0)) {
      outPut += 'pingpong';
    } else if (count % 5 == 0) {
      outPut += 'pong';
    } else if (count % 3 == 0) {
      outPut += 'ping';
    } else {
      outPut += count.toString();
    }
    if (count != countTonumber) {
      outPut += ',';
    }
  }
}


//user interface logic

$(document).ready(function(){
$("form").submit(function(event){
countTonumber=$("input#name").val();
condition();
$(".results").show();
$(".output").text(outPut);
event.preventDefault();
});

});
