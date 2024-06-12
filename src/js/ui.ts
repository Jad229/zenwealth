import { ENTRY_LIST } from "./data";
import { Entry } from "./types";

/* Elements */
export const overlay = select<HTMLDivElement>("#overlay");

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
const container = select<HTMLElement>(".budget-dashboard");

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
