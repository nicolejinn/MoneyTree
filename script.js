console.log("script running");

// navBar script
const dailySumButton = document.querySelector("#daily-sum-button");
const navLogButton = document.querySelector("#log-button");
const aboutButton = document.querySelector("#about-us-button");

dailySumButton.addEventListener('click', (e) => {
  dailySumButton.classList.add("selected");
  navLogButton.classList.remove("selected");
  aboutButton.classList.remove("selected");
  //add code to open link to element
})

navLogButton.addEventListener('click', (e) => {
  dailySumButton.classList.remove("selected");
  navLogButton.classList.add("selected");
  aboutButton.classList.remove("selected");
})

aboutButton.addEventListener('click', (e) => {
  dailySumButton.classList.remove("selected");
  navLogButton.classList.remove("selected");
  aboutButton.classList.add("selected");
})


let incomeHistory = [];
let expenseHisotry = [];

const logButton = document.querySelector("#save-button");

// to retrive current date
var dt = new Date();
document.getElementById("date").innerHTML = dt.toLocaleDateString();
