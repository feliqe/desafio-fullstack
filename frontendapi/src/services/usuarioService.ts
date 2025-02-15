// Llamadas a la api
import { Usuario } from "../types/Usuario";

const API_URL = "http://localhost:8080/api/usuarios";

export const getUsuarios = async (): Promise<Usuario[]> => {
  const response = await fetch(API_URL);
  return response.json();
};

export const createUsuario = async (usuario: Usuario): Promise<Usuario> => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(usuario),
  });
  return response.json();
};

export const updateUsuario = async (
  id: number,
  usuario: Usuario
): Promise<Usuario> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(usuario),
  });
  return response.json();
};

export const deleteUsuario = async (id: number): Promise<void> => {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};
