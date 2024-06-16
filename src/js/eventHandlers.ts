import { addBudget, createBudget } from "./data";
import {
  UpdateBudgetUI,
  budgetForm,
  buttonAddBudget,
  buttonAddExpense,
  buttonAddIncome,
  buttonBudgetSubmit,
  buttonEntry,
  containerEntryMenu,
  expenseForm,
  incomeForm,
  inputBudgetAmount,
  inputBudgetTitle,
  overlay,
} from "./ui";

buttonEntry.addEventListener("click", () => {
  overlay.classList.remove("hidden");
  containerEntryMenu.classList.remove("hidden");
});

overlay.addEventListener("click", () => {
  containerEntryMenu.classList.add("hidden");
  overlay.classList.add("hidden");
  budgetForm.classList.add("hidden");
});

buttonAddBudget.addEventListener("click", () => {
  overlay.classList.remove("hidden");
  budgetForm.classList.remove("hidden");
  containerEntryMenu.classList.add("hidden");
});

buttonAddIncome.addEventListener("click", () => {
  alert("click");
});

buttonAddExpense.addEventListener("click", () => {
  alert("click");
});

buttonBudgetSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  // Grabs input values
  const title = inputBudgetTitle.value;
  const amount = parseInt(inputBudgetAmount.value);

  const newBudget = createBudget(title, amount);

  // add budget to list
  addBudget(newBudget);

  // update UI to reflect changes
  UpdateBudgetUI();

  // Close modal
  budgetForm.classList.add("hidden");
  overlay.classList.add("hidden");
});
