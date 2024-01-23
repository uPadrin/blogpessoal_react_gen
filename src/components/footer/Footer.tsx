import { FacebookLogo, InstagramLogo, LinkedinLogo, GithubLogo } from '@phosphor-icons/react'

function Footer() {



    return (
        <>
            <div className="flex justify-center bg-gray-900 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>Blog pessoal Generation | Copyright: </p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
                        <GithubLogo size={48} weight='bold'/>
                        <LinkedinLogo size={48} weight='bold' />
                        <InstagramLogo size={48} weight='bold' />
                        <FacebookLogo size={48} weight='bold' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer