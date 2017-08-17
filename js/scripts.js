// Business Logic
function errorCheck(message) {
  if (!message) {
    return "error: no input";
  }
}







// User Interface Logic
$(document).ready(function() {
  $("#message").submit(function(event) {
  event.preventDefault();
  var message = $("input#message").val();
  console.log(errorCheck(message));
  });
});
