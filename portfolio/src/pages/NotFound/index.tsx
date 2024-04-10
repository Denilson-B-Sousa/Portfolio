
export function NotFound() {

    return(
        <main className="flex flex-col md:flex-row xl:flex-row justify-center items-center bg-background bg-no-repeat bg-cover w-[100vw] h-[100vh] m-auto overflow-hidden">
            <section className="order-2 md:order-1 xl:order-1">
                <div className="flex flex-col text-primary w-[600px]">
                    <h1 className="text-center text-2xl md:text-left xl:text-left md:text-3xl xl:text-4xl font-Poppins font-extrabold">Ops, esta página não <br/> foi encontrada</h1>
                    <p className="w-80 text-center font-light mt-2 m-auto md:text-left xl:text-left md:w-[auto] xl:w-[auto]">Parece que você se perdeu... Tente voltar para a página anterior ou acessar a home.</p>
                    <div className="inline-flex justify-center md:justify-start xl:justify-start gap-6 mt-6">
                        <a href="/" className="p-4  bg-darkBlue-600 hover:bg-darkBlue-600/60 text-primary rounded-md">Voltar</a>
                        <a href="/" className="p-4  bg-darkBlue-600 hover:bg-darkBlue-600/60 text-primary rounded-md">Ir para a Home</a>
                    </div>
                </div>
            </section>
            <section className="order-1 md:order-2 xl:order-2">
                <div >
                    <img src="../../src/assets/404.svg" width={600} alt="404 erro" />
                </div>
            </section>
        </main>
    )
}