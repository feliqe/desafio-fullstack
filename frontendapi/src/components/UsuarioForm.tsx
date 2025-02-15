import React, { useState, useEffect } from "react";
import { useUsuarios } from "../context/UsuarioContext";
import { Usuario } from "../types/Usuario";

const UsuarioForm: React.FC = () => {
  const { addUsuario, editUsuario, usuarioToEdit, message } = useUsuarios();
  const [usuario, setUsuario] = useState<Usuario>({
    nombres: "",
    apellidos: "",
    rut: 0,
    dv: "",
    fechanacimiento: "",
    correoelectronico: "",
    contraseña: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Llenar el formulario si hay un usuario para editar
  useEffect(() => {
    if (usuarioToEdit) {
      setUsuario(usuarioToEdit);
    } else {
      // Restablecer el formulario si no hay campos
      setUsuario({
        nombres: "",
        apellidos: "",
        rut: 0,
        dv: "",
        fechanacimiento: "",
        correoelectronico: "",
        contraseña: "",
      });
    }
  }, [usuarioToEdit]); // Este efecto se ejecuta cada vez que usuarioToEdit

  // funcion de validar campos
  const validateFields = () => {
    const newErrors: { [key: string]: string } = {};

    if (!usuario.nombres.trim()) newErrors.nombres = "Nombres es obligatorio";
    else if (!/^[A-Za-z\s]+$/.test(usuario.nombres))
      newErrors.nombres = "Solo se permiten letras";

    if (!usuario.apellidos.trim())
      newErrors.apellidos = "Apellidos es obligatorio";
    else if (!/^[A-Za-z\s]+$/.test(usuario.apellidos))
      newErrors.apellidos = "Solo se permiten letras";

    if (!usuario.rut) newErrors.rut = "RUT es obligatorio";
    else if (usuario.rut.toString().length > 8)
      newErrors.rut = "RUT no puede tener más de 8 dígitos";

    if (!usuario.dv.trim()) newErrors.dv = "Dígito verificador es obligatorio";
    else if (!/^[0-9Kk]$/.test(usuario.dv))
      newErrors.dv = "Dígito verificador no válido";

    if (!usuario.fechanacimiento.trim())
      newErrors.fechanacimiento = "Fecha de nacimiento es obligatoria";

    if (!usuario.correoelectronico.trim())
      newErrors.correoelectronico = "Correo electrónico es obligatorio";
    else if (!/\S+@\S+\.\S+/.test(usuario.correoelectronico))
      newErrors.correoelectronico = "Correo electrónico no válido";

    if (!usuario.contraseña.trim())
      newErrors.contraseña = "Contraseña es obligatoria";
    else if (usuario.contraseña.length < 6 || usuario.contraseña.length > 12)
      newErrors.contraseña = "La contraseña debe tener entre 6 y 12 caracteres";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Retorna true si no hay errores
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateFields()) {
      if (usuario.id) {
        editUsuario(usuario.id, usuario);
      } else {
        addUsuario(usuario);
      }
      setUsuario({
        nombres: "",
        apellidos: "",
        rut: 0,
        dv: "",
        fechanacimiento: "",
        correoelectronico: "",
        contraseña: "",
      });
    }
  };

  return (
    <div className="container">
      {message && (
        <div
          className={`message ${
            message.includes("Error") ? "error" : "success"
          }`}
        >
          {message}
        </div>
      )}
      <h1>{usuario.id ? "Editar Usuario" : "Crear Usuario"}</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Nombres"
            value={usuario.nombres}
            onChange={(e) =>
              setUsuario({ ...usuario, nombres: e.target.value })
            }
          />
          {errors.nombres && (
            <span className="error-message">{errors.nombres}</span>
          )}
        </div>
        <div>
          <input
            type="text"
            placeholder="Apellidos"
            value={usuario.apellidos}
            onChange={(e) =>
              setUsuario({ ...usuario, apellidos: e.target.value })
            }
          />
          {errors.apellidos && (
            <span className="error-message">{errors.apellidos}</span>
          )}
        </div>
        <div>
          <input
            type="number"
            placeholder="RUT"
            value={usuario.rut || ""}
            onChange={(e) => setUsuario({ ...usuario, rut: +e.target.value })}
          />
          {errors.rut && <span className="error-message">{errors.rut}</span>}
        </div>
        <div>
          <input
            type="text"
            placeholder="DV"
            value={usuario.dv}
            onChange={(e) =>
              setUsuario({ ...usuario, dv: e.target.value.toUpperCase() })
            }
            maxLength={1}
          />
          {errors.dv && <span className="error-message">{errors.dv}</span>}
        </div>
        <div>
          <input
            type="date"
            placeholder="Fecha de Nacimiento"
            value={usuario.fechanacimiento}
            onChange={(e) =>
              setUsuario({ ...usuario, fechanacimiento: e.target.value })
            }
          />
          {errors.fechanacimiento && (
            <span className="error-message">{errors.fechanacimiento}</span>
          )}
        </div>
        <div>
          <input
            type="email"
            placeholder="Correo Electrónico"
            value={usuario.correoelectronico}
            onChange={(e) =>
              setUsuario({ ...usuario, correoelectronico: e.target.value })
            }
          />
          {errors.correoelectronico && (
            <span className="error-message">{errors.correoelectronico}</span>
          )}
        </div>
        <div>
          <input
            type="password"
            placeholder="Contraseña"
            value={usuario.contraseña}
            onChange={(e) =>
              setUsuario({ ...usuario, contraseña: e.target.value })
            }
            maxLength={12}
          />
          {errors.contraseña && (
            <span className="error-message">{errors.contraseña}</span>
          )}
        </div>
        <button type="submit">{usuario.id ? "Actualizar" : "Crear"}</button>
      </form>
    </div>
  );
};

export default UsuarioForm;
