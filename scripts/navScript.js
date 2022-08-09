console.log("nav script running");

// Get the navbar
const navbar = document.querySelector("#navbar");
// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Get nav buttons
const dailySumButton = document.querySelector("#daily-sum-button");
const navLogButton = document.querySelector("#log-button");
const aboutButton = document.querySelector("#about-us-button");


// Get sections and their centre position
const dailySum = document.querySelector("#daily-summary-section");
const dailySumPos = dailySum.offsetTop + dailySum.offsetHeight/2;

const log = document.querySelector("#log-section");
const logPos = (log.offsetTop + log.offsetHeight)/2;

// Navigate to corresponding location when button pressed
dailySumButton.addEventListener('click', (e) => {
  selectDailySum();
});

navLogButton.addEventListener('click', (e) => {
  selectLog();
});

aboutButton.addEventListener('click', (e) => {
  selectAbout();
});

// When the user scrolls the page, execute navAnimation
window.onscroll = function() { navAnimation() };

function selectDailySum(){
  dailySumButton.classList.add("selected");
  navLogButton.classList.remove("selected");
  aboutButton.classList.remove("selected");
  location.href ="#daily-summary";
}

function selectLog(){
  dailySumButton.classList.remove("selected");
  navLogButton.classList.add("selected");
  aboutButton.classList.remove("selected");
  location.href ="#log";
}

function selectAbout(){
  dailySumButton.classList.remove("selected");
  navLogButton.classList.remove("selected");
  aboutButton.classList.add("selected");
  location.href ="#footer";
}

function navAnimation() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }

  if (dailySumPos > window.pageYOffset) {//daily summary
    dailySumButton.classList.add("selected");
    navLogButton.classList.remove("selected");
    aboutButton.classList.remove("selected");
  } else if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) { // about us
    dailySumButton.classList.remove("selected");
    navLogButton.classList.remove("selected");
    aboutButton.classList.add("selected");
  } else{ // log
    dailySumButton.classList.remove("selected");
    navLogButton.classList.add("selected");
    aboutButton.classList.remove("selected");
  }
}
// 