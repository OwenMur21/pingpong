//business logic

var countTonumber;

function condition() {
  for (var count = 1; count <= countTonumber; count++) {
    if ((count % 3 == 0) && (count % 5 == 0)) {

      $("ul#output").append("<li>" + 'pingpong' + "</li>");
    } else if (count % 5 == 0) {

      $("ul#output").append("<li>" + 'pong' + "</li>");
    } else if (count % 3 == 0) {

      $("ul#output").append("<li>" + 'ping' + "</li>");
    } else {

      $("ul#output").append("<li>" + count.toString() + "</li>");
    }

  }
}


//user interface logic

$(document).ready(function() {
  $("form").submit(function(event) {
    $("#output").text('');
    countTonumber = parseInt($("input#name").val());
    condition();

    $("#output").show();

    $("input#name").val("");


    event.preventDefault();
  });

});
