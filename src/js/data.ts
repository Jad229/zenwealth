import { Budget, Entry } from "./types";

export let ENTRY_LIST: Entry[] = [];
export let BUDGET_LIST: Budget[] = [];

// Entry Functions (entries are income and expenses)
export function addEntry(entry: Entry) {
  ENTRY_LIST.push(entry);
  saveEntriesToLocalStorage();
}

export function getEntries(): Entry[] {
  return ENTRY_LIST;
}

export function updateEntry(index: number, updatedEntry: Entry) {
  ENTRY_LIST[index] = updatedEntry;
  saveEntriesToLocalStorage();
}

export function deleteEntry(index: number) {
  ENTRY_LIST.splice(index, 1);
  saveEntriesToLocalStorage();
}

// Budget Functions
export function createBudget(
  title: string,
  amount: number,
  category?: string,
): Budget {
  const newBudget: Budget = {
    title,
    amount,
    category,
  };

  return newBudget;
}

export function addBudget(budget: Budget) {
  BUDGET_LIST.push(budget);
  saveBudgetsToLocalStorage();
}

export function getBudgets(): Budget[] {
  return BUDGET_LIST;
}

export function getBudget(index: number) {
  return BUDGET_LIST[index];
}

export function updateBudget(index: number, updatedBudget: Budget) {
  BUDGET_LIST[index] = updatedBudget;
  saveBudgetsToLocalStorage();
}

export function deleteBudget(index: number) {
  BUDGET_LIST.splice(index, 1);
  saveBudgetsToLocalStorage();
}

// Local Storage Save Functions
export function saveBudgetsToLocalStorage() {
  localStorage.setItem("budgets", JSON.stringify(BUDGET_LIST));
}

export function saveEntriesToLocalStorage() {
  localStorage.setItem("entries", JSON.stringify(ENTRY_LIST));
}
