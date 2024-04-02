
export function Footer() {
    return(
        <footer className="flex flex-col justify-center gap-1 text-center text-light-800 dark:text-primary mb-2">
            <h4 className="font-semibold mobile:text-md laptop:text-xl">Desenvolvido por: Denilson B. Sousa</h4>
            <span>Inspiração de template: <a href="#" className="p-1 text-purple-500 focus-visible:ring-2 focus-visible:ring-green-900 outline-none rounded-sm">Rocketseat Template </a></span>
        </footer>
    )
}