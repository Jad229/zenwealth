import "../styles.css";

type Entry = {
  type: "expense" | "income";
  title: string;
  amount: number;
};

let ENTRY_LIST: Entry[] = [];

const balanceEl = document.querySelector(".balance .value");

// Account elements
const outcomeTotalEl = document.querySelector(".income-total");
const incomeTotalEl = document.querySelector(".outcome-total");
const chartEl = document.querySelector(".chart");

// Dashboard navigation tab elements
const expenseBtn: HTMLElement | null = document.querySelector(".expense-tab");
const incomeBtn: HTMLElement | null = document.querySelector(".income-tab");
const allBtn: HTMLElement | null = document.querySelector(".all-tab");

// Dashboard tab section elements
const expenseEl: HTMLElement | null = document.querySelector("#expense");
const incomeEl: HTMLElement | null = document.querySelector("#income");
const allEl: HTMLElement | null = document.querySelector("#all");

// Section list elements
const incomeList = document.querySelector("#income .list");
const expenseList = document.querySelector("#expense .list");
const allList = document.querySelector("#all .list");

// Income input elements
const addIncome = document.querySelector(".add-income-btn");
const incomeTitle = document.getElementById("incomeTitle") as HTMLInputElement;
const incomeAmount = document.getElementById(
  "incomeAmount",
) as HTMLInputElement;

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

function active(element: HTMLElement | null) {
  element?.classList.add("active");
}

function inactive(elements: Array<HTMLElement | null>) {
  elements.forEach((element) => {
    element?.classList.remove("active");
  });
}

function show(element: HTMLElement | null) {
  element?.classList.remove("hide");
}

function hide(elements: Array<HTMLElement | null>) {
  elements.forEach((element) => {
    element?.classList.add("hide");
  });
}

addIncome?.addEventListener("click", () => {
  const income: Entry = {
    type: "income",
    title: incomeTitle?.value,
    amount: parseFloat(incomeAmount?.value),
  };

  console.log(income);
  ENTRY_LIST.push(income);
  updateUI();
  //   clearInput([incomeTitle, incomeAmount]);
});

function updateUI() {
  ENTRY_LIST.forEach((entry) => {
    const listEl = document.createElement("li");
    const titleEl = document.createElement("p");

    titleEl.innerText = entry.title;
    listEl.appendChild(titleEl);
    incomeList?.appendChild(listEl);
  });
}

function clearInput(inputs: HTMLInputElement[]) {
  inputs?.forEach((input) => {
    input.value = "";
  });
}
