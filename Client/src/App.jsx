import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Wish from './pages/Wish/Wish'

function App() {
    return (    
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/wish' element={<Wish/>}/>
        </Routes>
    )
}

export default App
