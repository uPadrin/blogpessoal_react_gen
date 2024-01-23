function Home() {
    return (
        <>
            <div id="container"
                className="
                bg-gray-900 h
                flex 
                justify-center
                ">
                <div id="subcontainer"
                    className="container grid grid-cols-2 text-white"
                >
                    <div id="texto"
                        className="flex flex-col gap-4 items-center justify-center py-4"
                    >
                        <h2 className="text-5xl font-bold">Seja Bem-vindo! </h2>
                        <p className="text-xl">Expresse aqui os seus pensamentos e opiniões</p>


                        <div className="flex justify-around gap-4">
                            <div className="rounded text-white border-solid border-2 px-4 py-2 font-semibold">
                                Nova Postagem
                            </div>
                            <div className="rounded text-gray-900 bg-white border-solid border-2 px-4 py-2 font-semibold">
                                Ler Postagens
                            </div>
                        </div>
                    </div>

                    <div id="imagem" className="flex place-items-center justify-center">
                        <img className="w-2/3"
                            src="https://i.imgur.com/VpwApCU.png"
                            alt="Imagem da Página Home"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;