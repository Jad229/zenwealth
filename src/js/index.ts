import "../styles.css";

const balanceEl = document.querySelector(".balance .value");

// Account elements
const outcomeTotalEl = document.querySelector(".income-total");
const incomeTotalEl = document.querySelector(".outcome-total");
const chartEl = document.querySelector(".chart");

// Dashboard navigation tab elements
const expenseBtn: HTMLButtonElement | null =
  document.querySelector(".expense-tab");
const incomeBtn: HTMLButtonElement | null =
  document.querySelector(".income-tab");
const allBtn: HTMLButtonElement | null = document.querySelector(".all-tab");

// Dashboard tab section elements
const expenseEl = document.querySelector("#expense");
const incomeEl = document.querySelector("#income");
const allEl = document.querySelector("#all");

// Section list elements
const incomeList = document.querySelector("#income .list");
const expenseList = document.querySelector("#expense .list");
const allList = document.querySelector("#all .list");

// Income input elements
const addIncome = document.querySelector(".add-income-btn");
const incomeTitle = document.getElementById("income-title-input");
const incomeAmount = document.getElementById("income-amount-input");

// Expense input elements
const addExpense = document.querySelector(".add-expense-btn");
const expenseTitle = document.getElementById("expense-title-input");
const expenseAmount = document.getElementById("expense-amount-input");

expenseBtn?.addEventListener("click", () => {
  active(expenseBtn);
  inactive([incomeBtn, allBtn]);
  show(expenseEl);
  hide([incomeEl, allEl]);
});

incomeBtn?.addEventListener("click", () => {
  active(incomeBtn);
  inactive([expenseBtn, allBtn]);
  show(incomeEl);
  hide([expenseEl, allEl]);
});

allBtn?.addEventListener("click", () => {
  active(allBtn);
  inactive([expenseBtn, incomeBtn]);
  show(allEl);
  hide([expenseEl, incomeEl]);
});

function active(element: HTMLButtonElement) {
  element.classList.add("active");
}

function inactive(elements: any[]) {
  elements.forEach((element) => {
    element.classList.remove("active");
  });
}

function show(element: any) {
  element.classList.remove("hide");
}

function hide(elements: any[]) {
  elements.forEach((element) => {
    element.classList.add("hide");
  });
}
