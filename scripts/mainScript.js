console.log("main script running");

// to retrive current date
const dt = new Date();
document.querySelector("#date").innerHTML = dt.toLocaleDateString();

// Retrieving and storing user data
let incomeHistory = [];
let expenseHistory = [];
let dailyIncome = 0;
let dailyExpense = 0;

const inputTypeField = document.querySelector("#select-types");
const amountInField = document.querySelector("#amount-input");
const descriptInField = document.querySelector("#description-input");
const logButton = document.querySelector("#save-button");

const errorMsg = document.querySelector("#error"); // TODO: better error message

const incSum = document.querySelector("#incomeSummary");
const expSum = document.querySelector("#expenseSummary");
const estExpSum = document.querySelector("#estExpenseSummary");
const savingSum = document.querySelector("#savingSummary");
const estSavingSum = document.querySelector("#estSavingSummary");

//modal 
const modal = document.querySelector(".modal");
const trigger = document.querySelector(".history");
const closeButton = document.querySelector(".close-button");

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

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}