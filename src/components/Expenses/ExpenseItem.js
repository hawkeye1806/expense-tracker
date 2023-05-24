import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const expenceDate = props.date;
  //   console.log(expenceDate);
  const expenceTitle = props.title;
  const expenceAmount = props.amount;

  return (
    <Card className="expense-item">
      <ExpenseDate date={expenceDate} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${expenceAmount} </div>
      </div>
    </Card>
  );
};
export default ExpenseItem;
