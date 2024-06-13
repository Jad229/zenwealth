export type Entry = {
  type: "expense" | "income";
  title: string;
  amount: number;
};

export type Budget = {
  title: string;
  amount: number;
  category?: string;
};
