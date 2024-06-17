import { addBudget, createBudget } from "./data";
import {
  UpdateBudgetUI,
  budgetForm,
  buttonAddBudget,
  buttonAddExpense,
  buttonAddIncome,
  buttonBudgetSubmit,
  buttonEntry,
  closeModal,
  containerEntryMenu,
  expenseForm,
  incomeForm,
  inputBudgetAmount,
  inputBudgetTitle,
  openModalWithContent,
  overlay,
} from "./ui";

buttonEntry.addEventListener("click", () => {
  openModalWithContent(containerEntryMenu);
});

overlay.addEventListener("click", () => {
  closeModal();
});

buttonAddBudget.addEventListener("click", () => {
  openModalWithContent(budgetForm);
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
  closeModal();
});
