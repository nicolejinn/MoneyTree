console.log("script running");

// navBar script
const dailySumButton = document.querySelector("#daily-sum-button");
const navLogButton = document.querySelector("#log-button");
const aboutButton = document.querySelector("#about-us-button");

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
// Get the navbar
const navbar = document.getElementById("navbar");
// Get the offset position of the navbar
const sticky = navbar.offsetTop;

const dailySum = document.getElementById("summary-header");
const dailySumPos = dailySum.offsetTop;

const log = document.getElementById("log-header");
const logPos = dailySum.offsetTop;

const about = document.getElementById("about");
const aboutPos = dailySum.offsetTop;

function navAnimation() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
  
  if (window.pageYOffset <= dailySumPos && window.pageYOffset < logPos){
    dailySumButton.classList.add("selected");
    navLogButton.classList.remove("selected");
    aboutButton.classList.remove("selected");
  }
  
  if (window.pageYOffset >= logPos && window.pageYOffset > dailySumPos){
    dailySumButton.classList.remove("selected");
    navLogButton.classList.add("selected");
    aboutButton.classList.remove("selected");
  }
  
 if (window.pageYOffset >= aboutPos && window.pageYOffset > logPos ){
    dailySumButton.classList.remove("selected");
    navLogButton.classList.remove("selected");
    aboutButton.classList.add("selected");
      }
}

// to retrive current date
var dt = new Date();
document.getElementById("date").innerHTML = dt.toLocaleDateString();


// Retrieving and storing user data
let incomeHistory = [];
let expenseHistory = [];
let dailyIncome = 0;
let dailyExpense = 0;

const inputTypeField = document.querySelector("#select-types");
const amountInField = document.querySelector("#amount-input");
const descriptInField = document.querySelector("#description-input");
const logButton = document.querySelector("#save-button");

const errorMsg = document.querySelector("#error");

const incSum = document.querySelector("#incomeSummary");
const expSum = document.querySelector("#expenseSummary");
const estExpSum = document.querySelector("#estExpenseSummary");
const savingSum = document.querySelector("#savingSummary");
const estSavingSum = document.querySelector("#estSavingSummary");

updateSummary();

logButton.addEventListener("click", (e) => {
  let amount = parseFloat(amountInField.value);
  if (isNaN(amount) || amount < 0) {
    errorMsg.classList.remove("hidden");
    amountInField.value = "";
    amountInField.placeholder = "Please input a positive number."
  } else {
    switch (inputTypeField.value) {
    case "select":
      errorMsg.classList.remove("hidden");
      inputTypeField.style.borderColor = "red";
      break;
    case "income":
      updateValues(amount, "income");
      break;
    case "expense":
      updateValues(amount, "expense");
      break;
  }
  }
});

function updateValues(amount, type) {
  let description = "";
  if (descriptInField.value.length !== 0) {
    description = descriptInField.value;
  }
  if (type==="income"){
    dailyIncome += amount;
    incomeHistory.push.apply(incomeHistory, [[amount, description]]);
  } else if (type==="expense"){
    dailyExpense += amount;
    expenseHistory.push.apply(expenseHistory, [[amount, description]]);
  }
  errorMsg.classList.add("hidden");
  console.log(dailyExpense);
  console.log(expenseHistory);
  updateSummary();
}

function updateSummary() {
  incSum.value = dailyIncome;
  expSum.value = dailyExpense;
  savingSum.value = dailyIncome-dailyExpense;

  estExpSum.value = "NA";
  estSavingSum.value = "NA";
}

//modal 
const modal = document.querySelector(".modal");
const trigger = document.querySelector(".history");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);