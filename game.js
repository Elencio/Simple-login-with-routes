const character = document.getElementById("character");
const obstacles = document.querySelectorAll(".obstacle");
const score = document.querySelector(".score span");
let scoreCount = 0;

function moveLeft() {
  let leftPosition = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
  
  if (leftPosition > 0) {
    character.style.left = `${leftPosition - 20}px`;
  }
}

function moveRight() {
  let leftPosition = parseInt(window.getComputedStyle(character).getPropertyValue("left"));

  if (leftPosition < 450) {
    character.style.left = `${leftPosition + 20}px`;
  }
}

document.addEventListener("keydown", function(event) {
  if (event.key === "ArrowLeft") {
    moveLeft();
  } else if (event.key === "ArrowRight") {
    moveRight();
  }
});

setInterval(function() {
  for (let i = 0; i < obstacles.length; i++) {
    let obstacle = obstacles[i];
    let topPosition = parseInt(window.getComputedStyle(obstacle).getPropertyValue("top"));

    if (topPosition >= 400) {
      topPosition = -50;
      let randomLeftPosition = Math.floor(Math.random() * 350);
      obstacle.style.left = `${randomLeftPosition}px`;
      scoreCount++;
      score.textContent = scoreCount; 

       if(scoreCount > 15) {
        alert(`You Win! Your Score is ${scoreCount} and the password is "password123" and the email is elencio123@gmail.com"`);
        window.location.origin();
       }
    }

    obstacle.style.top = `${topPosition + 1}px`;

    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    let obstacleTop = parseInt(window.getComputedStyle(obstacle).getPropertyValue("top"));
    let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));

    if (obstacleTop < characterTop + 50 && obstacleTop + 50 > characterTop && obstacleLeft < characterLeft + 50 && obstacleLeft + 100 > characterLeft) {
      alert(`Game Over! Your Score is ${scoreCount}`);
      window.location.origin();
    }
  }
}, 10);
