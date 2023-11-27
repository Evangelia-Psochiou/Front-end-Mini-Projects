// Selecting DOM elements
const gameContainer = document.querySelector(".container"),
  userResult = document.querySelector(".user_result img"),
  cpuResult = document.querySelector(".cpu_result img"),
  result = document.querySelector(".result"),
  optionImages = document.querySelectorAll(".option_image");

// Adding an event listener to each option image
optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    // Adding the "active" class and changing the user's image
    image.classList.add("active");
    userResult.src = cpuResult.src = "./images/Rock.png";
    result.textContent = "Wait...";

    // Clearing the other images from the "active" class
    optionImages.forEach((image2, index2) => {
      index !== index2 && image2.classList.remove("active");
    });

    // Adding the "start" class for the animation
    gameContainer.classList.add("start");
    let randomNumber;
    // Delay of 2500ms (2.5 seconds) for the animation
    let time = setTimeout(() => {
      // Removing the "start" class for the animation
      gameContainer.classList.remove("start");

      // Getting the image selected by the user
      let imageSrc = e.target.querySelector("img").src;

      // Displaying the user's image
      userResult.src = imageSrc;

      // Random number for the CPU's choice
      randomNumber = Math.floor(Math.random() * 3);

      // Array with CPU images
      let cpuImages = [
        "./images/Rock.png",
        "./images/Paper.png",
        "./images/Scissors.png",
      ];

      // Displaying the CPU's image
      cpuResult.src = cpuImages[randomNumber];

      // Arrays with user and CPU values
      let cpuValue = ["R", "P", "S"][randomNumber];
      let userValue = ["R", "P", "S"][index];

      // Object with possible outcomes
      let outcomes = {
        RR: "Draw",
        RP: "Cpu",
        RS: "User",
        PP: "Draw",
        PR: "User",
        PS: "Cpu",
        SS: "Draw",
        SR: "Cpu",
        SP: "User",
      };

      // Finding the outcome in the outcomes object
      let outComeValue = outcomes[userValue + cpuValue];

      // Displaying the outcome
      result.textContent =
        userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!`;
    }, 2500);
  });
});
