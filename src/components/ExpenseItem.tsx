import React from "react";
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
    return (
        <Card>
            <ExpenseDate 
                dt1= {date}
                tit= {title}/>
            <div className="flex justify-center items-center h-12 w-32 border-2 border-white bg-[#380054] rounded-xl mr-5">
                <p className="text-white ">${amount}</p>
            </div>
        </Card>
    );
}

export default ExpenseItem;