import {
  buttonAddBudget,
  buttonAddExpense,
  buttonAddIncome,
  buttonEntry,
  containerEntryMenu,
  overlay,
} from "./ui";

buttonEntry.addEventListener("click", () => {
  overlay.classList.remove("hidden");
  containerEntryMenu.classList.remove("hidden");
});

overlay.addEventListener("click", () => {
  containerEntryMenu.classList.add("hidden");
  overlay.classList.add("hidden");
});

buttonAddBudget.addEventListener("click", () => {});

buttonAddIncome.addEventListener("click", () => {
  alert("click");
});

buttonAddExpense.addEventListener("click", () => {
  alert("click");
});
