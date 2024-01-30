import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import Tema from "../../../models/Tema";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";
import { ToastAlerta } from "../../../utils/ToastAlerts";

function FormularioTema() {

    const navigate = useNavigate();

    const [tema, setTema] = useState<Tema>({} as Tema)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/temas/${id}`, setTema, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes("403")) {
                ToastAlerta("O token Expirou!" , 'erro')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token == "") {
            ToastAlerta("Você precisa estar logado!" , 'erro')
            navigate("/login")
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setTema({
            ...tema,
            [e.target.name]: e.target.value,
        });
    }

    function retornar() {
        navigate("/temas")
    }

    async function gerarNovoTema(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/temas`, tema, setTema, {
                    headers: { Authorization: token }
                })
                ToastAlerta("Tema foi atualizado com sucesso!" , 'sucesso')
            } catch (error: any) {
                if (error.toString().includes("403")) {
                    ToastAlerta("O Token Expirou!" , 'erro')
                    handleLogout();
                } else {
                    ToastAlerta("erro ao atualizar tema", 'erro')
                }
            }
        } else {
            try {
                await cadastrar(`/temas`, tema, setTema, {
                    headers: { Authorization: token }
                })
                ToastAlerta("Tema foi cadastrado com sucesso!" , 'sucesso')
            } catch (error: any) {
                if (error.toString().includes("403")) {
                    ToastAlerta("O Token Expirou!", 'erro')
                    handleLogout();
                } else {
                    ToastAlerta("Erro ao cadastrar tema", 'erro')
                }
            }
        }
        setIsLoading(false)
        retornar()
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                {id === undefined ? "Cadastrar tema" : "Editar Tema"}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoTema}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Descrição do tema</label>
                    <input
                        type="text"
                        placeholder="Descrição"
                        name='descricao'
                        className="border-2 border-slate-700 rounded p-2"
                        value={tema.descricao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button
                    className="rounded text-slate-100 bg-sky-500 hover:bg-sky-900 w-1/2 py-2 mx-auto flex justify-center"
                    type="submit"
                >
                    {isLoading ?
                        < RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <span>{id === undefined ? "Cadastrar" : "Editar"}</span>
                    }
                </button>
            </form>
        </div>
    );
}

export default FormularioTema;