import { addBudget, createBudget, updateBudget } from "./data";
import {
  UpdateBudgetUI,
  budgetForm,
  buttonAddBudget,
  buttonAddExpense,
  buttonAddIncome,
  buttonBudgetSubmit,
  buttonEditBudgetSubmit,
  buttonEntry,
  closeModal,
  containerEntryMenu,
  expenseForm,
  incomeForm,
  inputBudgetAmount,
  inputBudgetTitle,
  inputEditBudgetAmount,
  inputEditBudgetTitle,
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

buttonEditBudgetSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  // Grabs id of budget to updated from button dataset
  const id = parseInt(buttonEditBudgetSubmit.dataset.id as string);

  // Grabs input values
  const title = inputEditBudgetTitle.value;
  const amount = parseInt(inputEditBudgetAmount.value);

  // Updated budget
  const updatedBudget = createBudget(title, amount);

  // updates budget in list
  updateBudget(id, updatedBudget);

  // update UI to reflect changes
  UpdateBudgetUI();

  // Close modal
  closeModal();
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
