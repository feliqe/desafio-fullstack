import React, { createContext, useContext, useState, useEffect } from "react";
import { Usuario } from "../types/Usuario";
import {
  getUsuarios,
  createUsuario,
  updateUsuario,
  deleteUsuario,
} from "../services/usuarioService";

interface UsuarioContextType {
  usuarios: Usuario[];
  addUsuario: (usuario: Usuario) => void;
  editUsuario: (id: number, usuario: Usuario) => void;
  removeUsuario: (id: number) => void;
  setUsuarioToEdit: (usuario: Usuario) => void;
  usuarioToEdit: Usuario | null;
  message: string | null;
  setMessage: (message: string | null) => void;
}

const UsuarioContext = createContext<UsuarioContextType | undefined>(undefined);

export const UsuarioProvider: React.FC = ({ children }) => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [usuarioToEdit, setUsuarioToEdit] = useState<Usuario | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsuarios = async () => {
      const data = await getUsuarios();
      setUsuarios(data);
    };
    fetchUsuarios();
  }, []);

  const addUsuario = async (usuario: Usuario) => {
    try {
      const newUsuario = await createUsuario(usuario);
      setUsuarios([...usuarios, newUsuario]);
      setMessage("Usuario creado exitosamente");
    } catch (error) {
      setMessage("Error al crear el usuario");
    }
  };

  const editUsuario = async (id: number, usuario: Usuario) => {
    try {
      const updatedUsuario = await updateUsuario(id, usuario);
      setUsuarios(usuarios.map((u) => (u.id === id ? updatedUsuario : u)));
      setMessage("Usuario actualizado exitosamente");
    } catch (error) {
      setMessage("Error al actualizar el usuario");
    }
  };

  // src/context/UsuarioContext.tsx
  const removeUsuario = async (id: number) => {
    try {
      await deleteUsuario(id);
      setUsuarios(usuarios.filter((u) => u.id !== id));
      setMessage("Usuario eliminado exitosamente");

      // borra la informacion si el usaurio que se edita es eliminado
      if (usuarioToEdit && usuarioToEdit.id === id) {
        setUsuarioToEdit(null);
      }
    } catch (error) {
      setMessage("Error al eliminar el usuario");
    }
  };

  return (
    <UsuarioContext.Provider
      value={{
        usuarios,
        addUsuario,
        editUsuario,
        removeUsuario,
        setUsuarioToEdit,
        usuarioToEdit,
        message,
        setMessage,
      }}
    >
      {children}
    </UsuarioContext.Provider>
  );
};

export const useUsuarios = () => {
  const context = useContext(UsuarioContext);
  if (!context)
    throw new Error("useUsuarios debe usarse dentro de un UsuarioProvider");
  return context;
};
