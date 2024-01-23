import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";


function NavBar() {

    const navigate = useNavigate();

    const { handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout();
        alert('Usuario desconectado com sucesso')
        navigate("/login")
    }

    return (
        <>
            <div className='w-full bg-gray-900 text-white flex justify-center py-4'>
                <div className="container flex justify-between text-lg">
                    <Link to="/home" className='text-2xl font-bold uppercase'>Blog Pessoal </Link>


                    <div className='flex gap-4'>
                        <div className='font-semibold'>Postagens</div>
                        <Link to="/temas" className='font-semibold'>Temas</Link>
                        <Link to="/cadastroTema" className='font-semibold'>Cadastrar tema</Link>
                        <div className='font-semibold'>Perfil</div>
                        <Link to="" onClick={logout} className='font-semibold hover:color'>Sair</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar