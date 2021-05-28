import React, {useEffect} from "react";
import { GlobalContext } from "../context/globalContext";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions , getTransactions } = React.useContext(GlobalContext);
  // console.log(transactions)

  useEffect(()=>{
    getTransactions()
    //eslint-disable-next-line
  }, [])
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
