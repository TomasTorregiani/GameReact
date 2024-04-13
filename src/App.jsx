
import './App.css'
import { Stats } from './components/stats'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './components'
import TownSquare from './components/townSquare'
import Store from './components/store'
import Cave from './components/cave'


function App() {
  

  return (
    <>
      <BrowserRouter>
        <Stats/>
        <Routes>
          <Route path='/' element={<Index/>}></Route>
          <Route path='/townSquare' element={<TownSquare/>}></Route>
          <Route path='/store' element={<Store/>}></Route>
          <Route path='/cave' element={<Cave/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
