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
    var square = [];
    var squareSides = Math.ceil(Math.sqrt(message.length));
    for (var i = 0; i < squareSides; i++) {
      square.push([]);
    }
    var messageArray = message.split("");
    var index = 0;
    messageArray.forEach(function(message) {
      square[index].push(message);
      index++;
      if (index === squareSides) {
        index = 0;
      }
    });
    var results = ""
    square.forEach(function(column) {
      results +=  column.join("");
    });
    var splitResults = "";
    for (var i = 0; i < results.length; i += 5) {
      splitResults += results.slice(i, i + 5) + " ";
    }
    return splitResults;
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
