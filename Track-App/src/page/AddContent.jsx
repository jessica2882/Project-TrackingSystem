import React from 'react'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

const AddContent = ({expenses, setExpenses}) => {
  const [title, setTitle] = useState()
  const [type, setType] = useState("Income")
  const [contegory, setContegory] = useState()
  const [amount, setAmount] = useState()
  const [date, setDate] = useState()
  const [remark, setRemark] = useState()

  const incomeCategories = ['Monthly Income','Self Business', 'Other'];
  const outcomeCategories= ['Daily Basis','Health Care','Entertainment','Saving','Tripes','Other'];
  const categoryOptions = (type == 'Income') ? incomeCategories : outcomeCategories;

   // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Validation
    // if (!title || !amount || isNaN(amount) || !date || !remark) {
    //   toast.error("Please fill out all fields correctly!", {
    //     position: "bottom-right",
    //     autoClose: 1000,
    //   });
    //   return;
    // }
  

    const newTransaction = { title, type, contegory, amount, date, remark}
    setExpenses([...expenses, newTransaction]);
    toast.success('Transaction added successfully.', {
      position: "bottom-right",
      autoClose: 1000,
    });

    // Clear form fields
    // setTitle("");
    // setContegory("");
    // setAmount("");
    // setDate("");
    // setRemark("");
  };
  useEffect(() =>{
    setContegory(type == "Income" ? "Monthly Income" : "Daily Basis")
  }, [type]);
  return (
    <div className='w-100 h-auto page-size'>
      <div className='w-2xl h-auto control'>
        <h1 className='text-center font-serif text-blue-900'>បញ្ចូលការចំណាយ ឬ ចំណូលរបស់អ្នក</h1>
        <form onSubmit={handleSubmit} >
          <label htmlFor="" className='font-bold text-blue-900'>Title :</label>
          <input 
            type="text"  
            placeholder='Enter your title' 
            className='border-none'
            value={title}
            onChange={ (event) => setTitle(event.target.value)}
          />
          <div className='w-[100] flex justify-between'>
            <div className='mt-5 control-select'>
              <label htmlFor="" className='font-bold text-blue-900'>Type :</label>
              <select 
                name="" id="" 
                className='mt-2'
                value={type}
                onChange={(event) => setType(event.target.value)}
              >
                <option value="Income">Income</option>
                <option value="Outcome">Outcome</option>
              </select>
            </div>
            <div className='mt-5 control-select'>
              <label htmlFor="" className='font-bold text-blue-900'>Contegory :</label>
              <select
                name="" id="" className='mt-2'
                value={contegory}
                onChange={(event) => setContegory(event.target.value)}
              >
                {
                  categoryOptions.map((e, index)=>{
                    return(
                      <option key={index} value={e}>
                        {e}
                      </option>
                    )
                  })
                }
              </select>
            </div>
          </div>
          <div className='mt-5'>
            <label htmlFor="" className='font-bold text-blue-900'>Amount :</label>
            <input 
              type="number"
              value={amount}
              onChange={(event) => setAmount(event.target.value)} 
            />
          </div>
          <div className='mt-5'>
            <label htmlFor="" className='font-bold text-blue-900'>Date :</label>
            <input
              type="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
          </div>
          <div className='w-[100] mt-5'>
            <label htmlFor="" className='font-bold text-blue-900'>Remark :</label>
            <textarea
              value={remark}
              onChange={(event) => setRemark(event.target.value)}
            >   
            </textarea>
          </div>
          <button type='submit' className='w-30 h-10 bg-blue-600 mt-10 text-gray-100 rounded-sm cursor-pointer hover:bg-blue-900'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default AddContent
