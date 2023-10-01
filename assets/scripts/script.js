//Select Elements
const balanceEl = document.querySelector(".balance .value");
const incomeTotalEl = document.querySelector(".income-total");
const expenseTotalEl = document.querySelector(".expense-total");
const incomeEl = document.querySelector("#income");
const expenseEl = document.querySelector("#expense");
const allEl = document.querySelector("#all");
const incomeList = document.querySelector("#income .list");
const expenseList = document.querySelector("#expense .list");
const allList = document.querySelector("#all .list");

// SELECT BTNS
const expenseBtn = document.querySelector(".tab1");
const incomeBtn = document.querySelector(".tab2");
const allBtn = document.querySelector(".tab3");

//INPUT BTNS
const addExpense = document.querySelector(".add-expense");
const expenseTitle = document.getElementById("expense-title-input");
const expenseAmount = document.getElementById("expense-amount-input");

const addIncome = document.querySelector(".add-income");
const incomeTitle = document.getElementById("income-title-input");
const incomeAmount = document.getElementById("income-amount-input");

// VARIABLES
let ENTRY_LIST;
let balance = 0, income = 0, outcome = 0;
const DELETE = "delete", EDIT = "edit";

// LOOK IF THERE IS SAVED DATA IN LOCALSTORAGE
ENTRY_LIST = JSON.parse(localStorage.getItem("entry_list")) || [];
updateUI();

// EVENT LISTENERS
expenseBtn.addEventListener("click", function(){
   show(expenseEl);
   hide( [incomeEl, allEl] );
   active( expenseBtn );
   inactive( [incomeBtn, allBtn] );
})
incomeBtn.addEventListener("click", function(){
   show(incomeEl);
   hide( [expenseEl, allEl] );
   active( incomeBtn );
   inactive( [expenseBtn, allBtn] );
})
allBtn.addEventListener("click", function(){
   show(allEl);
   hide( [incomeEl, expenseEl] );
   active( allBtn );
   inactive( [incomeBtn, expenseBtn] );
})

// addExpense.addEventListener("click", function(){
//    // IF ONE OF THE INPUTS IS EMPTY => EXIT
//    if(!expenseTitle.value || !expenseAmount.value ) return;

//    // SAVE THE ENTRY TO ENTRY_LIST
//    let expense = {
//        type : "expense",
//        title : expenseTitle.value,
//        amount : parseInt(expenseAmount.value)
//    }
//    ENTRY_LIST.push(expense);

//    updateUI();
//    clearInput( [expenseTitle, expenseAmount] )
// })

// addIncome.addEventListener("click", function(){
//    // IF ONE OF THE INPUTS IS EMPTY => EXIT
//    if(!incomeTitle.value || !incomeAmount.value ) return;

//    // SAVE THE ENTRY TO ENTRY_LIST
//    let income = {
//        type : "income",
//        title : incomeTitle.value,
//        amount : parseInt(incomeAmount.value)
//    }
//    ENTRY_LIST.push(income);

//    updateUI();
//    clearInput( [incomeTitle, incomeAmount] )
// })

// incomeList.addEventListener("click", deleteOrEdit);
// expenseList.addEventListener("click", deleteOrEdit);
// allList.addEventListener("click", deleteOrEdit);

function clearElement(elements){
   elements.forEach( element => {
       element.innerHTML = "";
   })
}

function calculateTotal(type, list){
   let sum = 0;

   list.forEach( entry => {
       if( entry.type == type ){
           sum += entry.amount;
       }
   })

   return sum;
}

function calculateBalance(income, expense){
   return income - expense;
}

function clearInput(inputs){
   inputs.forEach( input => {
       input.value = "";
   })
}


function show(element){
   element.classList.remove("hide");
}

function hide( elements ){
   elements.forEach( element => {
       element.classList.add("hide");
   })
}

function active(element){
   element.classList.add("active");
}

function inactive( elements ){
   elements.forEach( element => {
       element.classList.remove("active");
   })
}
