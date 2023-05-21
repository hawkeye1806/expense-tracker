import "./ExpenseItem.css";

function ExpenseItem(props) {
  const expenceDate = props.date;
  //   console.log(expenceDate);
  const expenceTitle = props.title;
  const expenceAmount = props.amount;

  return (
    <div className="expense-item">
      <div>{expenceDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenceTitle}</h2>
        <div className="expense-item__price">${expenceAmount} </div>
      </div>
    </div>
  );
}
export default ExpenseItem;
