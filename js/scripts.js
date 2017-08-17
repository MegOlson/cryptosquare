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

function encodeString(message) {
  message = cleanString(message);
  var error = errorCheck(message);
  if (error) {
    return error;
  } else {
    return message;
  }
}


// User Interface Logic
$(document).ready(function() {
  $("#message").submit(function(event) {
  event.preventDefault();
  var message = $("input#message-input").val();
  console.log(encodeString(message));
  });
});
