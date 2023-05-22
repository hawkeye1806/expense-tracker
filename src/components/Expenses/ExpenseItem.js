import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  console.log("Expence item evaluated by React");

  const expenceDate = props.date;
  //   console.log(expenceDate);
  const expenceTitle = props.title;
  const expenceAmount = props.amount;

  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={expenceDate} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${expenceAmount} </div>
      </div>
      <button onClick={clickHandler}> Change Title </button>
    </Card>
  );
};
export default ExpenseItem;
