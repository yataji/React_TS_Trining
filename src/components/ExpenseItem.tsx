import React, { useState } from "react";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
// import ExpenseDate from './ExpenseDate';

interface Props {
    title: string;
    amount: number;
    date: Date;
  }
  
 

// function ExpenseItem ({ title, amount}: ExpenseItemProps) {
const ExpenseItem: React.FC<Props> = ({title, amount, date}) => {
    let [ll, setTitle] = useState(title);
    const clickHandler = () => {
        ll = title;
    setTitle("updated!!!")
        console.log(ll);
        console.log(title);
    }
    return (
        <Card>
            <ExpenseDate 
                dt1= {date}
                tit= {ll}/>
            <div className="flex justify-center items-center h-12 w-32 border-2 border-white bg-[#380054] rounded-xl mr-5">
                <p className="text-white ">${amount}</p>
            </div>
            <button className="border-2 rounded-lg bg-blue-700 text-black mr-5" onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;