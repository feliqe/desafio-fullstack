package com.feliqe.springboot.backendapi.backendapi.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.feliqe.springboot.backendapi.backendapi.models.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long>{

}
