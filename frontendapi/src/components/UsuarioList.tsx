import React, { useEffect } from "react";
import { useUsuarios } from "../context/UsuarioContext";

const UsuarioList: React.FC = () => {
  const { usuarios, removeUsuario, setUsuarioToEdit, message, setMessage } =
    useUsuarios();

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(null), 3000); // Ocultar mensaje después de 3 segundos
      return () => clearTimeout(timer);
    }
  }, [message, setMessage]);

  const handleEdit = (usuario: Usuario) => {
    setUsuarioToEdit(usuario); // Llenar el formulario con la información del usuario seleccionado
  };

  return (
    <div className="container">
      <h1>Lista de Usuarios</h1>
      <table className="usuario-table">
        <thead>
          <tr>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>RUT</th>
            <th>DV</th>
            <th>Fecha de Nacimiento</th>
            <th>Correo Electrónico</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.nombres}</td>
              <td>{usuario.apellidos}</td>
              <td>{usuario.rut}</td>
              <td>{usuario.dv}</td>
              <td>{new Date(usuario.fechanacimiento).toLocaleDateString()}</td>
              <td>{usuario.correoelectronico}</td>
              <td>
                <button onClick={() => handleEdit(usuario)}>Editar</button>
                <button onClick={() => removeUsuario(usuario.id!)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsuarioList;
