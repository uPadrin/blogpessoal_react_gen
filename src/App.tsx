import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { AuthProvider } from './contexts/AuthContext'
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import Cadastro from './pages/cadastro/Cadastro'
import ListaTemas from './components/temas/listaTemas/ListaTemas'
import FormularioTema from './components/temas/formularioTema/FormularioTema'
import DeletarTema from './components/temas/deletarTemas/DeletarTemas'
import NavBar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import ListaPostagens from './components/postagens/listaPostagens/ListaPostagens'
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem'
import FormularioPostagem from './components/postagens/formularioPostagem/FormularioPostagem'
import Perfil from './pages/perfil/Perfil'


import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
function App() {
  return (
    <>
      <AuthProvider>
        <ToastContainer />
          <BrowserRouter>
            <NavBar />
            <div className="min-h-[80vh]">
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path='/cadastro' element={<Cadastro />} />
                <Route path='/login' element={<Login />} />
                <Route path="/temas" element={<ListaTemas />} />
                <Route path="/cadastroTema" element={<FormularioTema />} />
                <Route path="/editarTema/:id" element={<FormularioTema />} />
                <Route path="/deletarTema/:id" element={<DeletarTema />} />
                <Route path='/postagens' element={<ListaPostagens />} />
                <Route path="/cadastroPostagem" element={<FormularioPostagem />} />
                <Route path="/editarPostagem/:id" element={<FormularioPostagem />} />
                <Route path='/deletarPostagem/:id' element={<DeletarPostagem />} />
                <Route path='/perfil' element={<Perfil />} />
              </Routes>
            </div>
            <Footer />
          </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App