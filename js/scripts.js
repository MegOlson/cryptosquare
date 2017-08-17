// Business Logic
function errorCheck(message) {
  if (!message) {
    return "error: no input";
  }
}

function cleanString(message) {
  message = message.toLowerCase();
  message = message.replace(/[^a-z0-9]+/g, "");
  return message;
}





// User Interface Logic
$(document).ready(function() {
  $("#message").submit(function(event) {
  event.preventDefault();
  var message = $("input#message-input").val();
  console.log(message);
  console.log(cleanString(message));
  });
});
