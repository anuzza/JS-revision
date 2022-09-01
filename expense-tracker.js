const account = {
  name: "Anuja Sharma",
  expenses: [],
  incomes: [],
  addExpense: function (description, amount) {
    this.expenses.push({
      description: description,
      amount: amount,
    });
  },
  addIncome: function (description, amount) {
    this.incomes.push({ description, amount });
  },
  getAccountSummary: function () {
    let totalExpense = 0;
    let totalIncome = 0;
    this.expenses.forEach((expense) => {
      totalExpense = totalExpense + expense.amount;
    });
    this.incomes.forEach((income) => {
      totalIncome = totalIncome + income.amount;
    });
    const totalBalance = totalIncome - totalExpense;

    return `${this.name} has a balance of $${totalBalance}. $${totalIncome} in income, $${totalExpense} in expenses.`;
  },
};

//Expense->description, amount
//addExpense-> description, amount
//getAccountSummary-> total up all expenses->Anuja has $567 in expenses.

//1. add income arrray to the account
//2. addincome method-> description, amount
//3. tweak getAccountSummary

//Andrew mead has a balance of $10 in income, $90 in expenses.

account.addExpense("Rent", 950);
account.addExpense("Coffee", 2);
account.addIncome("Job", 1000);
console.log(account.getAccountSummary());
