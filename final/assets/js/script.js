function suggestFood() {
  // Show the loading animation
  var loading = document.getElementById("loading");
  loading.style.display = "block";
  setTimeout(function() {
    // Generate a random food recommendation based on the selected mood
    var mood = document.getElementById("mood").value;
    var foods = {
      happy: ["Pizza", "Ice cream", "Hamburger", "Tacos"],
      sad: ["Chocolate", "Mac and cheese", "Soup", "Grilled cheese"],
      stressed: ["Sushi", "Pad Thai", "Biryani", "Stir-fry"],
      excited: ["BBQ ribs", "Fried chicken", "Nachos", "Philly cheesesteak"]
    };
    var randomFood = foods[mood][Math.floor(Math.random() * foods[mood].length)];

    // Hide the loading animation and display the food recommendation
    loading.style.display = "none";
    var foodInfo = document.getElementById("food-info");
    foodInfo.style.display = "block";
    var foodLabels = document.getElementById("food-labels");
    foodLabels.innerHTML = "";
    var label;
    for (var i = 0; i < foods[mood].length; i++) {
      label = document.createElement("label");
      label.innerText = foods[mood][i];
      foodLabels.appendChild(label);
    }
    var foodImage = document.getElementById("food-image");
    foodImage.src = "images/" + mood + ".jpg";
  }, 1000);
}

// Add bubbles to the page
var bubbleContainer = document.getElementById("bubbles");
for (var i = 0; i < 20; i++) {
  var bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.style.animationDelay = Math.floor(Math.random() * 10) + "s";
  bubbleContainer.appendChild(bubble);
}