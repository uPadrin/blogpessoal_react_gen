import { FacebookLogo, InstagramLogo, LinkedinLogo, GithubLogo } from '@phosphor-icons/react'
import { ReactNode, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

function Footer() {

    const { usuario, handleLogout } = useContext(AuthContext)

    let footerComponent: ReactNode

    let data = new Date().getFullYear()

    if (usuario.token !== '') {
        footerComponent = (
            <>
                <div className="flex justify-center bg-gray-900 text-white">
                    <div className="container flex flex-col items-center py-4 ">
                        <p className='text-xl font-semibold'>Blog pessoal Generation | Copyright: {data} </p>
                        <p className='text-lg'>Acesse nossas redes sociais</p>
                        <div className='flex gap-2'>
                            <GithubLogo size={48} weight='bold' />
                            <LinkedinLogo size={48} weight='bold' />
                            <InstagramLogo size={48} weight='bold' />
                            <FacebookLogo size={48} weight='bold' />
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer