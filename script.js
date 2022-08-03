console.log("script running");

// navBar script
const dailySumButton = document.querySelector("#daily-sum-button");
const navLogButton = document.querySelector("#log-button");
const aboutButton = document.querySelector("#about-us-button");

dailySumButton.addEventListener('click', (e) => {
  dailySumButton.classList.add("selected");
  navLogButton.classList.remove("selected");
  aboutButton.classList.remove("selected");
  location.href ="#daily-summary";
});

navLogButton.addEventListener('click', (e) => {
  dailySumButton.classList.remove("selected");
  navLogButton.classList.add("selected");
  aboutButton.classList.remove("selected");
  location.href ="#log";
});

aboutButton.addEventListener('click', (e) => {
  dailySumButton.classList.remove("selected");
  navLogButton.classList.remove("selected");
  aboutButton.classList.add("selected");
  location.href ="#footer";
});

// When the user scrolls the page, execute navAnimation
window.onscroll = function() { navAnimation() };

// Get the navbar
const navbar = document.getElementById("navbar");

// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function navAnimation() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
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

const incSum = document.querySelector("#incomeSummary");
const expSum = document.querySelector("#expenseSummary");
const estExpSum = document.querySelector("#estExpenseSummary");
const savingSum = document.querySelector("#savingSummary");
const estSavingSum = document.querySelector("#estSavingSummary");

updateSummary();

logButton.addEventListener("click", (e) => {
  let amount = parseFloat(amountInField.value);
  if (isNaN(amount)) {
    //alarm
  } else if (amount < 0) {
    //alarm
  } else {
    switch (inputTypeField.value) {
    case "select":
      // alarm
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