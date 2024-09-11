import { Outlet } from "react-router-dom"

export default function App(){
    return (
        <div>
        <img src='../public/Error404.png'/> ;
        <Outlet />
        </div>
    )
}