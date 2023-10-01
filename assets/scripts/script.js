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

//Select BTNS

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



// function show(element){
//    element.classList.remove("hide");
// }

// function hide( elements ){
//    elements.forEach( element => {
//        element.classList.add("hide");
//    })
// }

// function active(element){
//    element.classList.add("active");
// }

// function inactive( elements ){
//    elements.forEach( element => {
//        element.classList.remove("active");
//    })
// }
