import { BUDGET_LIST, ENTRY_LIST, getBudget } from "./data";
import { Entry } from "./types";

// Elements
export const overlay = select<HTMLDivElement>("#overlay");
export const modal = select<HTMLDivElement>("#modal");

// Forms
export const budgetForm = select<HTMLFormElement>("#budgetForm");
export const incomeForm = select<HTMLFormElement>("#incomeForm");
export const expenseForm = select<HTMLFormElement>("#expenseForm");
export const editBudgetForm = select<HTMLFormElement>("#editBudgetForm");

// Inputs
export const inputBudgetTitle = select<HTMLInputElement>("#budgetTitle");
export const inputBudgetAmount = select<HTMLInputElement>("#budgetAmount");
export const inputEditBudgetAmount =
  select<HTMLInputElement>("#editBudgetAmount");
export const inputEditBudgetTitle =
  select<HTMLInputElement>("#editBudgetTitle");

// Buttons
export const buttonBudgetSubmit = select<HTMLButtonElement>("#budgetSubmit");
export const buttonEditBudgetSubmit =
  select<HTMLButtonElement>("#editBudgetSubmit");

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
  BUDGET_LIST.forEach((budget, idx) => {
    const cardBudgetEl = createElementWithClass("div", "budget-card");
    const budgetTitleEl = createElementWithClass("p", "budget-title");
    const budgetChartEl = createElementWithClass("div", "budget-chart");
    const budgetRemainingEl = createElementWithClass("p", "budget-remaining");

    cardBudgetEl.dataset.index = `${idx}`;

    cardBudgetEl.addEventListener("click", () => {
      const budget = getBudget(idx);

      inputEditBudgetAmount.value = `${budget.amount}`;
      inputEditBudgetTitle.value = `${budget.title}`;

      buttonEditBudgetSubmit.dataset.id = `${idx}`;

      openModalWithContent(editBudgetForm);
    });

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

export function openModalWithContent(content: HTMLElement) {
  // Injects html content into the modal
  modal.appendChild(content);

  // Makes the modal and content visible
  content.classList.remove("hidden");
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
}

export function closeModal() {
  // Clears the modal of content when closing
  modal.innerHTML = "";

  // Makes overlay and modal invisible
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
}
