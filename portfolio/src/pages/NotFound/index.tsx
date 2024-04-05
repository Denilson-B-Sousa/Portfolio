
export function NotFound() {
    return(
        <main className="flex items-center">
            <section>
                <div className="flex flex-col">
                    <h1>Ops, esta página não foi encontrada</h1>
                    <p>Parece que você se perdeu... Tente voltar para a página anterior ou acessar a home.</p>
                    <div>
                        <button>Voltar</button>
                        <button>Ir para a Home</button>
                    </div>
                </div>
            </section>
            <section>
                <img src="../../src/assets/404.svg" alt="" />
            </section>
        </main>
    )
}