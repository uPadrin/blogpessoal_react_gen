import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { ToastAlerta } from '../../utils/ToastAlerts'

function Perfil() {
    let navigate = useNavigate()

    const { usuario } = useContext(AuthContext)

    useEffect(() => {
        if (usuario.token === "") {
            ToastAlerta('Você precisa estar logado', "erro")
            navigate("/login")
        }
    }, [usuario.token])

    return (
        <div className='flex items-center h-[80vh]'>
            <div className='container mx-auto mt-4 rounded-2xl overflow-hidden'>
                <img className='w-full h-72 object-cover border-b-8 border-white' src={"https://c.wallhere.com/photos/34/10/Minecraft_bookshelves-1885683.jpg!d"} alt="Capa do Perfil" />
                <img src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} className='rounded-full w-56 mx-auto mt-[-8rem] border-8 border-blue relative z-10' />
                <div className="relative mt-[-6rem] h-72 flex flex-col bg-gray-900 text-white text-2xl items-center justify-center">
                    <p>Nome: {usuario.nome} </p>
                    <p>Email: {usuario.usuario}</p>
                </div>
            </div>
        </div>
    )
}

export default Perfil