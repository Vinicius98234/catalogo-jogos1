import { Outlet } from "react-router-dom"

export default function App(){
    return (
        <div className="App">
          <a href="http://localhost:3000">Catálogo</a>
          <br></br>
          <a href="http://localhost:3000/Sobre">Sobre</a>
          <br></br>
          <a href="http://localhost:3000/*">Error</a>
          <Outlet />
        </div>
      );
}

