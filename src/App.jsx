import React from 'react'
import { Routes, Route ,BrowserRouter} from 'react-router-dom'
import Test from './components/Test';
import Froms from "./components/Froms";
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/form' element={<Froms/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App