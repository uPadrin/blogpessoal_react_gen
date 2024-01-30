import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem'

interface CardPostagensProps {
    postagem: Postagem
}

function CardPostagem({ postagem }: CardPostagensProps) {
    return (
        <div className='border-slate-900  
            flex flex-col rounded-2xl overflow-hidden justify-between'>

            <div>
                <div className="flex w-full text-slate-100 bg-gray-900 py-2 px-4 items-center gap-4 rounded">
                    <img src={postagem.usuario?.foto} className='h-12 rounded-full' alt={postagem.usuario?.nome} />
                    <h3 className='text-lg font-bold text-center uppercase'>{postagem.usuario?.nome}</h3>
                </div>
                <div className='p-4 bg-slate-200 '>
                    <h4 className='text-lg font-semibold uppercase'>{postagem.titulo}</h4>
                    <p>{postagem.texto}</p>
                    <p>Tema: {postagem.tema?.descricao}</p>
                    <p>Data: {new Intl.DateTimeFormat(undefined, {
                        dateStyle: 'full',
                        timeStyle: 'medium',
                    }).format(new Date(postagem.data))}</p>
                </div>
            </div>
            <div className="flex">
                <Link to={`/editarpostagem/${postagem.id}`}
                    className='w-full text-white bg-sky-500 hover:bg-sky-900 flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletarpostagem/${postagem.id}`}
                    className='text-white bg-red-600 hover:bg-red-900 w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardPostagem