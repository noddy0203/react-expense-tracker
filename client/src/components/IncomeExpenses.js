import React, { useContext } from "react";
import { GlobalContext } from "../context/globalContext";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
   
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, index) => (acc += index), 0)
    .toFixed(2);

  const expense = (
    amounts
      .filter((item) => item < 0)
      .reduce((acc, index) => (acc += index), 0) * -1
  ).toFixed(2);

  return (
    <>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">{income} &#8377;</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">{expense} &#8377;</p>
        </div>
      </div>
    </>
  );
};

export default IncomeExpenses;
