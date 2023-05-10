import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
    const [filterYear, setFilterYear] = useState("2020");
    const filterChangeHandler = (selectedYear) => {
        setFilterYear(selectedYear);
    };
    const filterExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filterYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selectedYear={filterYear}
                    onChangeFilter={filterChangeHandler}
                />
                <ExpensesChart expenses={filterExpenses} />
                <ExpensesList items={filterExpenses} />
            </Card>
        </div>
    );
}
export default Expenses;
