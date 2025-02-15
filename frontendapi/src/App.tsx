import React from "react";
import { UsuarioProvider } from "./context/UsuarioContext";
import UsuarioList from "./components/UsuarioList";
import UsuarioForm from "./components/UsuarioForm";

function App() {
  return (
    <UsuarioProvider>
      <div>
        <h1>Mantenedor de Usuarios</h1>
        <UsuarioForm />
        <UsuarioList />
      </div>
    </UsuarioProvider>
  );
}

export default App;
