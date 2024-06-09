import { ENTRY_LIST } from "./data";
import { Entry } from "./types";

const balanceEl = document.querySelector<HTMLElement>(".balance .value");

// Account elements
const outcomeTotalEl =
  document.querySelector<HTMLParagraphElement>(".income-total");
const incomeTotalEl =
  document.querySelector<HTMLParagraphElement>(".outcome-total");
const chartEl = document.querySelector<HTMLDivElement>(".chart");

// Dashboard navigation tab elements
export const expenseBtn =
  document.querySelector<HTMLButtonElement>(".expense-tab");
export const incomeBtn =
  document.querySelector<HTMLButtonElement>(".income-tab");
export const allBtn = document.querySelector<HTMLButtonElement>(".all-tab");

// Dashboard tab section elements
export const expenseEl = document.querySelector<HTMLElement>("#expense");
export const incomeEl = document.querySelector<HTMLElement>("#income");
export const allEl = document.querySelector<HTMLElement>("#all");

// Section list elements
const incomeList = document.querySelector<HTMLUListElement>("#income .list");
const expenseList = document.querySelector<HTMLUListElement>("#expense .list");
const allList = document.querySelector<HTMLUListElement>("#all .list");

// Income input elements
export const addIncome =
  document.querySelector<HTMLButtonElement>(".add-income-btn");
export const incomeTitle = document.getElementById(
  "incomeTitle",
) as HTMLInputElement;
export const incomeAmount = document.getElementById(
  "incomeAmount",
) as HTMLInputElement;

// Expense input elements
const addExpense =
  document.querySelector<HTMLButtonElement>(".add-expense-btn");
const expenseTitle = document.getElementById(
  "expense-title-input",
) as HTMLInputElement;
const expenseAmount = document.getElementById(
  "expense-amount-input",
) as HTMLInputElement;

export const active = function (element: HTMLElement | null) {
  element?.classList.add("active");
};

export const inactive = function (elements: Array<HTMLElement | null>) {
  elements.forEach((element) => {
    element?.classList.remove("active");
  });
};

export const show = function (element: HTMLElement | null) {
  element?.classList.remove("hide");
};

export const hide = function (elements: Array<HTMLElement | null>) {
  elements.forEach((element) => {
    element?.classList.add("hide");
  });
};

export const updateUI = function () {
  // guard against null element
  if (!incomeList) return;

  // empty the incomeList element
  incomeList.innerHTML = "";

  // loop through the entries and create a list item
  ENTRY_LIST.forEach((entry) => {
    const listEl = createListElement(entry);
    incomeList?.appendChild(listEl);
  });
};

function createListElement(entry: Entry): HTMLElement {
  const listEl = createElementWithClass("li", "income");
  const colorEl = createElementWithClass("div", "list-item-color");
  const titleEl = createElementWithClass("h3", "list-item-title");
  const amountEl = createElementWithClass("p", "list-item-amount");
  const buttonsEl = createElementWithClass("div", "list-item-buttons");
  const editEl = createElementWithClass("button", "list-item-edit");
  const deleteEl = createElementWithClass("button", "list-item-delete");

  titleEl.innerText = entry.title;
  amountEl.innerText = `$${entry.amount.toString()}`;

  buttonsEl.appendChild(editEl);
  buttonsEl.appendChild(deleteEl);
  listEl.appendChild(colorEl);
  listEl.appendChild(titleEl);
  listEl.appendChild(amountEl);
  listEl.appendChild(buttonsEl);

  return listEl;
}

function createElementWithClass(
  elementTag: string,
  className: string,
): HTMLElement {
  const element = document.createElement(elementTag);
  element.classList.add(className);
  return element;
}

export const clearInput = function (inputs: HTMLInputElement[]) {
  inputs?.forEach((input) => {
    input.value = "";
  });
};
