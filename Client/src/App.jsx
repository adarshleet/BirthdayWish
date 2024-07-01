import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Wish from './pages/Wish/Wish'
import Song from './components/Song'
import Loading from './components/Loading'
import Result from './pages/Result/Result'



function App() {
    return (    
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/wish/:id' element={<Wish/>}/>
            <Route path='/result' element={<Result flag={true}/>}/>
            <Route path='/loading' element={<Loading text={'Loading...'}/>}/>
        </Routes>
    )
}

export default App
