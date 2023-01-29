import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const tet = [
    {
      title: 'ford',
      amount: 17,
      date: new Date(),
    },
    {
      title: 'golf',
      amount: 25,
      date: new Date(),
    }
  ]
  
  return (
    <div className="w-screem h-screen pt-5 bg-[#383638]">
      <h2 className=" font-bold text-3xl mb-5">Let's get started!</h2>
      <div className='bg-[#383638] flex justify-center'>
        <div className='flex flex-col justify-center items-center mx-5 px-3 shadow-xl py-5 sm:w-11/12 w-2/3  rounded-xl bg-[#1e1d1e]'>
          <ExpenseItem
            title={tet[1].title}
            amount={tet[1].amount}
            date={tet[1].date}
            />
            <ExpenseItem
            title={tet[0].title}
            amount={tet[0].amount}
            date={tet[0].date}
            />
          <ExpenseItem
            title={tet[1].title}
            amount={tet[1].amount}
            date={tet[1].date}
            />
          <ExpenseItem
            title={tet[1].title}
            amount={tet[1].amount}
            date={tet[1].date}
            />
        </div>
      </div>
    </div>
  );
}

export default App;
