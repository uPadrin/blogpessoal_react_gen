import { ReactNode, useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerts";


function NavBar() {

    const navigate = useNavigate();

    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout();
        ToastAlerta('Usuario desconectado com sucesso' , "sucesso")
        navigate("/login")
    }
    let navbarComponent: ReactNode

    if (usuario.token !== '') {
        navbarComponent = (
            <div className='w-full bg-gray-900 text-white flex justify-center py-4'>
                <div className="container flex justify-between text-lg">
                    <Link to="/home" className='text-2xl font-bold uppercase'>Blog Pessoal </Link>


                    <div className='flex gap-4'>
                        <Link to="/postagens" className='font-semibold'>Postagens</Link>
                        <Link to="/temas" className='font-semibold'>Temas</Link>
                        <Link to="/cadastroTema" className='font-semibold'>Cadastrar tema</Link>
                        <Link to="/perfil" className='font-semibold'>Perfil</Link>
                        <Link to="" onClick={logout} className='font-semibold'>Sair</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            {navbarComponent}
        </>
    )
}

export default NavBar