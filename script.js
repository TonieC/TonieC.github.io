var button = document.getElementById("button");
  var button1 = document.getElementById("button1");
  var image1 = document.getElementById("image1");
  var image2 = document.getElementById("image2");

  // Add click event listener to the first button
  button.addEventListener("click", function() {
    // Show Image 1 and hide Image 2
    image1.style.display = "block";
    image2.style.display = "none";
  });

  // Add click event listener to the second button
  button1.addEventListener("click", function() {
    // Show Image 2 and hide Image 1
    image1.style.display = "none";
    image2.style.display = "block";
  });
