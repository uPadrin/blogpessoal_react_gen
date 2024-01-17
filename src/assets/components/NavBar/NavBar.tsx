import { Link } from "react-router-dom"

function NavBar() {



    return (
        <>
            <div className='w-full bg-gray-900 text-white flex justify-center py-4'>
                <div className="container flex justify-between text-lg">
                    <Link to="/home" className='text-2xl font-bold uppercase'>Blog Pessoal </Link> 


                    <div className='flex gap-4'>
                        <div className='hover:underline font-semibold'>Postagens</div>
                        <div className='hover:underline font-semibold'>Temas</div>
                        <div className='hover:underline font-semibold'>Cadastrar tema</div>
                        <div className='hover:underline font-semibold'>Perfil</div>
                        <div className='hover:underline font-semibold'>Sair</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar