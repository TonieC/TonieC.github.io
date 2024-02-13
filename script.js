
  // Add click event listener to the second button
  button1.addEventListener("click", function() {
    // Show Image 2 and hide Image 1
    image1.style.display = "none";
    image2.style.display = "block";
  });
  var button = document.getElementById("button");
  var button1 = document.getElementById("button1");
  var message = document.getElementById("message");

  // Add click event listener to the first button
  button.addEventListener("click", function() {
    // Show the message and hide the first button
    message.style.display = "block";
    button.style.display = "none";
  });

  // Add click event listener to the second button
  button1.addEventListener("click", function() {
    // Show the message and hide the second button
    message.style.display = "block";
    button1.style.display = "none";
  });