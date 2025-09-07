const topics = [
  {
    topic: "Pele",
    image: "https://static.dw.com/image/61527609_802.jpg"
  },
  {
    topic: "Ronoldo",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb-NGEQDekk2BwsllLjk4tcIM_BPIzXECdsg&s"
  },
  {
    topic: "Rolodinio",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaEmC94kaMO1nDbbrlFweV0I1DhzWu-3vHHA&s"
  },
  {
    topic: "Sigma",
    image: "https://i.eurosport.com/2024/07/09/image-aa467a6b-fc52-43cf-b7f2-699839d87501-85-2560-1440.jpeghttps://upload.wikimedia.org/wikipedia/commons/5/55/Soccer_Cleats.jpg"
  }
];

const openPackBtn = document.getElementById("openPackBtn");
const packTopicDiv = document.getElementById("packTopic");
const miniGameSection = document.getElementById("miniGame");
const rewardSection = document.getElementById("reward");
const rewardImage = document.getElementById("rewardImage");
const ball = document.getElementById("ball");
const scoreDisplay = document.getElementById("score");

let selectedTopic = null;
let score = 0;

openPackBtn.addEventListener("click", () => {
  // Reset state
  score = 0;
  scoreDisplay.textContent = "0";
  rewardSection.classList.add("hidden");
  miniGameSection.classList.add("hidden");

  // Pick a random topic
  selectedTopic = topics[Math.floor(Math.random() * topics.length)];

  packTopicDiv.textContent = `Topic: ${selectedTopic.topic}`;
  packTopicDiv.classList.remove("hidden");

  // Show mini-game
  miniGameSection.classList.remove("hidden");
});

ball.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = score;

  if (score >= 3) {
    showReward();
  }
});

function showReward() {
  miniGameSection.classList.add("hidden");
  rewardImage.src = selectedTopic.image;
  rewardSection.classList.remove("hidden");
}
