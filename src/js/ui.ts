import { BUDGET_LIST, ENTRY_LIST } from "./data";
import { Entry } from "./types";

// Elements
export const overlay = select<HTMLDivElement>("#overlay");

// Forms
export const budgetForm = select<HTMLFormElement>("#budgetForm");
export const incomeForm = select<HTMLFormElement>("#incomeForm");
export const expenseForm = select<HTMLFormElement>("#expenseForm");

// Inputs
export const inputBudgetTitle = select<HTMLInputElement>("#budgetTitle");
export const inputBudgetAmount = select<HTMLInputElement>("#budgetAmount");

// Buttons
export const buttonBudgetSubmit = select<HTMLButtonElement>("#budgetSubmit");

// Account elements
const balanceEl = select<HTMLElement>(".balance .value");
const outcomeTotalEl = select<HTMLParagraphElement>(".income-total");
const incomeTotalEl = select<HTMLParagraphElement>(".outcome-total");
const chartEl = select<HTMLDivElement>(".chart");

//Entry Selection Elements
export const containerEntryMenu = select<HTMLDivElement>("#entryMenu");
export const buttonAddIncome = select<HTMLButtonElement>(".add-income-btn");
export const buttonAddBudget = select<HTMLButtonElement>(".add-budget-btn");
export const buttonAddExpense = select<HTMLButtonElement>(".add-expense-btn");

// Navigation Elements
export const buttonEntry = select<HTMLButtonElement>(".add-entry-button");

//Budget Elements
const containerBudgets = select<HTMLElement>(".budgets-container");

// UI Functions

export function UpdateBudgetUI() {
  containerBudgets.innerHTML = "";
  BUDGET_LIST.forEach((budget, i) => {
    const cardBudgetEl = createElementWithClass("div", "budget-card");
    const budgetTitleEl = createElementWithClass("p", "budget-title");
    const budgetChartEl = createElementWithClass("div", "budget-chart");
    const budgetRemainingEl = createElementWithClass("p", "budget-remaining");

    budgetTitleEl.textContent = budget.title;
    budgetRemainingEl.textContent = budget.amount.toString();

    cardBudgetEl.appendChild(budgetTitleEl);
    cardBudgetEl.appendChild(budgetChartEl);
    cardBudgetEl.appendChild(budgetRemainingEl);

    containerBudgets.appendChild(cardBudgetEl);
  });
}

// Custom function to select elements for readability
function select<Type>(query: string): Type {
  const htmlElement = <Type>document.querySelector(query);
  return htmlElement;
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
