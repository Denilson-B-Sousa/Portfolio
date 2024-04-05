import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  
    return (
        <div>
            <Outlet />   {/*Espaço para inserir um determinado conteúdo */}
        </div>
    )
}


