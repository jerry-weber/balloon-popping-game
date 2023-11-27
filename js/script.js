let popped = 0;

document
  .getElementById("balloon-gallery")
  .addEventListener("mouseover", function (e) {
    if (e.target.classList.contains("balloon")) {
      e.target.style.backgroundColor = "#ededed";
      e.target.textContent = "POP!";
      popped++;
      removeEvent(e);
      checkAllPopped();
    }
  });

document.getElementById("sniffer").addEventListener("click", function () {
  location.reload();
});

// Other functions remain unchanged

function removeEvent(e) {
  e.target.removeEventListener("mouseover", function () {});
}

function checkAllPopped() {
  if (popped === 25) {
    console.log("all popped!");
    let balloons = document.querySelectorAll("#balloon-gallery .balloon");
    let message = document.querySelector("#yay-no-balloons");

    balloons.forEach((balloon) => balloon.remove());
    message.style.display = "block";
  }
}
