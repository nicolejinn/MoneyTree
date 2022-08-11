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

const dailySumOffset = 350;
const windowOffset = 25;

let ifSmoothScroll = false;

navAnimation();

// Navigate to corresponding location when button pressed
dailySumButton.addEventListener('click', (e) => {
  selectDailySum();
  ifSmoothScroll = true;
  window.scrollTo(0, dailySumPos-dailySumOffset);
});

navLogButton.addEventListener('click', (e) => {
  selectLog();
  ifSmoothScroll = true;
  window.scrollTo(0, logPos);
});

aboutButton.addEventListener('click', (e) => {
  selectAbout();
  ifSmoothScroll = true;
  window.scrollTo(0, document.body.scrollHeight);
});

function selectDailySum(){
  dailySumButton.classList.add("selected");
  navLogButton.classList.remove("selected");
  aboutButton.classList.remove("selected");
}

function selectLog(){
  dailySumButton.classList.remove("selected");
  navLogButton.classList.add("selected");
  aboutButton.classList.remove("selected");
}

function selectAbout(){
  dailySumButton.classList.remove("selected");
  navLogButton.classList.remove("selected");
  aboutButton.classList.add("selected");
}

// When the user scrolls the page, execute navAnimation
window.onscroll = function() {navAnimation()};

function navAnimation() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
  
  if (!ifSmoothScroll){
    if (dailySumPos > window.scrollY) {//daily summary
      selectDailySum();
    } else if ((window.innerHeight + window.scrollY + windowOffset) >= document.body.scrollHeight) { // about us
      selectAbout();
    } else{ // log
      selectLog();
    }
  }
}
