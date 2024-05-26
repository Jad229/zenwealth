import "../styles.css";

const balanceEl = document.querySelector(".balance .value");

const outcomeTotalEl = document.querySelector(".income-total");
const incomeTotalEl = document.querySelector(".outcome-total");
const chartEl = document.querySelector(".chart");

const expenseBtn = document.querySelector(".expense-tab");
const incomeBtn = document.querySelector(".income-tab");
const allBtn = document.querySelector(".all-tab");

const expenseEl = document.querySelector("#expense");
const incomeEl = document.querySelector("#income");
const allEl = document.querySelector("#all");

const incomeList = document.querySelector("#income .list");
const expenseList = document.querySelector("#expense .list");
const allList = document.querySelector("#all .list");

const addIncome = document.querySelector(".add-income-btn");
const incomeTitle = document.getElementById("income-title-input");
const incomeAmount = document.getElementById("income-amount-input");

const addExpense = document.querySelector(".add-expense-btn");
const expenseTitle = document.getElementById("expense-title-input");
const expenseAmount = document.getElementById("expense-amount-input");
