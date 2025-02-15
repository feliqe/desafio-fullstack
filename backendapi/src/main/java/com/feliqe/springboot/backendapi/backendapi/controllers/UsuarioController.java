package com.feliqe.springboot.backendapi.backendapi.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.feliqe.springboot.backendapi.backendapi.models.Usuario;
import com.feliqe.springboot.backendapi.backendapi.repositories.UsuarioRepository;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "http://localhost:5173") // Origen del frontend (React)
public class UsuarioController {

     @Autowired
    private UsuarioRepository usuarioRepository;

    // mostrar
    @GetMapping
    public List<Usuario> getAllUsers(){
        return usuarioRepository.findAll();

    }

    // crear
    @PostMapping
    public Usuario createUsuario(@RequestBody Usuario user){
        return usuarioRepository.save(user);
    }

    // mostra por id
    @GetMapping("/{id}")
    public Usuario getUsuarioById(@PathVariable Long id){
        return usuarioRepository.findById(id).orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
    }

    // actualizar
     @PutMapping("/{id}")
     public Usuario updateUsuario(@PathVariable Long id, @RequestBody Usuario usuarioDetails) {
         Usuario usuario = usuarioRepository.findById(id)
                 .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
         usuario.setNombres(usuarioDetails.getNombres());
         usuario.setApellidos(usuarioDetails.getApellidos());
         usuario.setRut(usuarioDetails.getRut());
         usuario.setDv(usuarioDetails.getDv());
         usuario.setFechanacimiento(usuarioDetails.getFechanacimiento());
         usuario.setCorreoelectronico(usuarioDetails.getCorreoelectronico());
         usuario.setContraseña(usuarioDetails.getContraseña());
         return usuarioRepository.save(usuario);
     }

    //  eliminar
   @DeleteMapping("/{id}")
   public void deleteUsuario(@PathVariable Long id) {
       usuarioRepository.deleteById(id);
   }
}
