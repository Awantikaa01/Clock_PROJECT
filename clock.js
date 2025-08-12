const hourHand = document.getElementById("hour");
const minuteHand = document.getElementById("minute");
const secondHand = document.getElementById("second");
const tickSound = document.getElementById("tick");
const numberContainer = document.querySelector(".numbers");

function setClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secDeg = (seconds / 60) * 360;
  const minDeg = (minutes / 60) * 360 + (seconds / 60) * 6;
  const hourDeg = (hours / 12) * 360 + (minutes / 60) * 30;

  secondHand.style.transform = `translateX(-50%) rotate(${secDeg}deg)`;
  minuteHand.style.transform = `translateX(-50%) rotate(${minDeg}deg)`;
  hourHand.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;

  //tickSound.currentTime = 0;
  //tickSound.play();
}

setInterval(setClock, 1000);
setClock();

// Numbers around clock
for (let i = 1; i <= 12; i++) {
  const number = document.createElement("div");
  const angle = (i * 30) * (Math.PI / 180);
  const radius = 130;
  const x = 150 + radius * Math.sin(angle);
  const y = 150 - radius * Math.cos(angle);
  number.style.left = `${x}px`;
  number.style.top = `${y}px`;
  number.textContent = i;
  numberContainer.appendChild(number);
}

// Toggle Light/Dark
document.getElementById("toggleMode").onclick = () => {
  document.body.classList.toggle("dark-mode");
};

// Open timer clock
function openTimer() {
  window.open("timer.html", "_blank");
}

// Date display
function updateDate() {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById("dateDisplay").textContent = now.toLocaleDateString(undefined, options);
}
updateDate();

const localQuotes = [
  { text: "One day or day one. You decide.", author: "Paulo Coelho" },
  { text: "Breathe in courage, exhale doubt.", author: "Unknown" },
  { text: "Make it simple, but significant.", author: "Don Draper" },
  { text: "Stay close to anything that makes you glad you’re alive.", author: "Hafez" },
  { text: "Dream big. Start small. Act now.", author: "Robin Sharma" },
  { text: "You don’t find the happy life. You make it.", author: "Camilla Eyring Kimball" },
  { text: "Progress, not perfection.", author: "Marie Forleo" },
  { text: "Romanticize your life. Romanticize your day.", author: "Pinterest Quote" },
  { text: "Live less out of habit and more out of intent.", author: "Amy Rubin" },
  { text: "Trust the timing of your life.", author: "Pinterest" },
  { text: "Collect moments, not things.", author: "Unknown" },
  { text: "Do it with passion or not at all.", author: "Rosa Nouchette Carey" },
  { text: "Your vibe attracts your tribe.", author: "Unknown" }

];

function updateLocalQuote() {
  const random = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  document.getElementById("quote-text").textContent = `“${random.text}”`;
  document.getElementById("quote-author").textContent = `— ${random.author}`;
}

// Initial call + update every hour
updateLocalQuote();
setInterval(updateLocalQuote, 3600000);

function openCalendarTodo() {
  window.open('calendar-todo.html', '_blank', 'width=600,height=700');
}

// ✅ Auto Dark Mode Based on Time (7 PM to 7 AM)
(function autoDarkMode() {
  const now = new Date();
  const hour = now.getHours();
  const isDark = document.body.classList.contains("dark-mode");

  // If time is after 7 PM (19) or before 7 AM (7)
  if ((hour >= 19 || hour < 7) && !isDark) {
    document.body.classList.add("dark-mode");
  } else if (hour >= 7 && hour < 19 && isDark) {
    document.body.classList.remove("dark-mode");
  }
})();

document.getElementById("toggleMode").onclick = () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem('dark-mode', document.body.classList.contains("dark-mode"));
};


function openCalculator() {
  window.open('calculator.html', '_blank', 'width=400,height=500');
}
