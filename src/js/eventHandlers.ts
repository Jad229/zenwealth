// eventListeners.ts
import {
  active,
  addIncome,
  allBtn,
  allEl,
  expenseBtn,
  expenseEl,
  hide,
  inactive,
  incomeAmount,
  incomeBtn,
  incomeEl,
  incomeTitle,
  show,
  updateUI,
} from "./ui";

interface Entry {
  type: string;
  title: string;
  amount: number;
}

const ENTRY_LIST: Entry[] = [];

expenseBtn?.addEventListener("click", () => {
  active(expenseBtn);
  inactive([incomeBtn, allBtn]);
  show(expenseEl);
  hide([incomeEl, allEl]);
});

incomeBtn?.addEventListener("click", () => {
  active(incomeBtn);
  inactive([expenseBtn, allBtn]);
  show(incomeEl);
  hide([expenseEl, allEl]);
});

allBtn?.addEventListener("click", () => {
  active(allBtn);
  inactive([expenseBtn, incomeBtn]);
  show(allEl);
  hide([expenseEl, incomeEl]);
});

addIncome?.addEventListener("click", () => {
  const income: Entry = {
    type: "income",
    title: incomeTitle?.value || "",
    amount: parseFloat(incomeAmount?.value) || 0,
  };

  console.log(income);
  ENTRY_LIST.push(income);
  updateUI();
  // clearInput([incomeTitle, incomeAmount]); // Uncomment when clearInput is implemented in the main codebase
});
