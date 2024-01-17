import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './assets/components/footer/Footer'
import NavBar from './assets/components/NavBar/NavBar'
import Home from './assets/pages/home/Home'
import Cadastro from './assets/pages/cadastro/Cadastro'


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home/>}/> 
            <Route path="/home" element={<Home />} />
            <Route path='/cadastro' element={<Cadastro/>}/>
            </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App