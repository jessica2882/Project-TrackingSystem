import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './page/Home'
import AddContent from './page/AddContent'
import ShowContent from './page/ShowContent'
import Search from './page/Search'
import SignUp from './page/SignUp'
import { ToastContainer } from 'react-toastify'
import { useEffect, useState } from 'react'
import Sigin from'./page/Sigin'
function App() {
  const [expenses, setExpenses] = useState(() =>{
    const storedTransactions = JSON.parse(localStorage.getItem("transactions"));
    return (storedTransactions) ? storedTransactions: [];
  });

  useEffect(() =>{
    localStorage.setItem("transactions", JSON.stringify(expenses));
  }, [expenses]);
  return (
    <div>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home expenses={expenses}/>} />
        <Route path='/add-cotent' element={<AddContent expenses={expenses} setExpenses={setExpenses}/>} />
        <Route path='/show-cotent' element={<ShowContent expenses={expenses} setExpenses={setExpenses} />} />
        <Route path='/sigup' element={<SignUp />} />
        <Route path='/sigin' element={<Sigin/>} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </div>
  )
}

export default App









