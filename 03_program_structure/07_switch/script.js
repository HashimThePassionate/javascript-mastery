function actionRainy() {
  console.log("Remember to bring an umbrella.");
}

function actionSunny() {
  console.log("Dress lightly.");
}

function actionCloudy() {
  console.log("Go outside.");
}

function defaultAction() {
  console.log("Unknown weather type!");
}

// Prompt the user for the weather
let weather = prompt("What is the weather like?");

// Dispatch using switch
switch (weather) {
  case "rainy":
    actionRainy();
    break;
  case "sunny":
    actionSunny();
    // No break statement here, so it falls through to the next case
  case "cloudy":
    actionCloudy();
    break;
  default:
    defaultAction();
    break;
}