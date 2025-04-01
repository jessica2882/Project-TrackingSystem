import React from 'react'

const Home = ({expenses}) => {
  const countIncome = expenses.filter(e => e.type == "Income").length;  
  console.log(countIncome);
  
  const countOutcome = expenses.filter(e => e.type == "Outcome").length;
  
  return (
    <div className='page-size flex-col'>
      <h1 className='text-3xl font-medium text-gray-750 text-sky-800'>Welcome to Income and Outcome Tracker App</h1>
      <div className='w-210 flex h-100 justify-between mt-10 shadow-blue-500/50'>
        <div className='bg-sky-500 w-100 h-100 flex justify-center items-center rounded-md'>
          <h1 className='text-3xl font-bold text-white'>Income = {countIncome}</h1>
        </div>
        <div className='bg-sky-500 w-100 h-100 rounded-md flex justify-center items-center '>
          <h1 className='text-3xl font-bold text-white'>Outcome = {countOutcome}</h1>
        </div>
      </div>
    </div>
  )
}

export default Home
