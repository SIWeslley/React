import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import "./Expenses.css";
import ExpenseFilter from "../ExpensesFilter/ExpensesFilter";
import "../ExpensesFilter/ExpensesFilter.css";
import { useState } from "react/cjs/react.development";

const Expenses = (props) => {
const [filteredYear, setFilteredYear] = useState('2020')

const filterChangeHandler = selectedYear =>{
  setFilteredYear(selectedYear)
  console.log(selectedYear)
}

  return (
    <div>
      <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        <ExpenseItem
          title={props.items[0].title}
          amout={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amout={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amout={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amout={props.items[3].amount}
          date={props.items[3].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
