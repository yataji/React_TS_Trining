import React from "react";
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
        // <div className="flex flex-col mb-5 mx-1 shadow-xl h-60 bg-red-700">
                <div className=" h-24 flex mb-5 font-bold text-lg shadow-xl flex-row rounded-2xl w-full justify-between items-center bg-[#434243]">
                    {/* <div className=" flex flex-row  ml-5 justify-start items-center bg-white"> */}
                        <ExpenseDate 
                            dt1= {date}
                            tit= {title}/>
                    {/* </div> */}
                    <div className="flex justify-center items-center h-12 w-32 border-2 border-white bg-[#380054] rounded-xl mr-5">
                        <p className="text-white ">${amount}</p>
                    </div>
                </div>
        // </div>
    );
}

export default ExpenseItem; 