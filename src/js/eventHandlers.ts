import {
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

  const newBudget = {
    title: inputBudgetTitle.value,
    amount: inputBudgetAmount.value,
  };

  console.log(newBudget);
});
