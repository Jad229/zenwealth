export type Entry = {
  type: "expense" | "income";
  title: string;
  amount: number;
};

export type Budget = {
  title: string;
  cap: number;
  category: string;
};
