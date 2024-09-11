import { Outlet } from "react-router-dom"

export default function App(){
    return (
        <div className="App">
          <h1>Sobre</h1>
          <p>Descrição do site</p>
          <Outlet />
        </div>
      );
}