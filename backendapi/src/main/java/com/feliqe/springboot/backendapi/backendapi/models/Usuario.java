package com.feliqe.springboot.backendapi.backendapi.models;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Usuario {

    @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long id;

   private String nombres;
   private String apellidos;
   private Long rut;
   private String dv;
   private Date fechanacimiento;
   private String correoelectronico;
   private String contraseña;

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getNombres() {
        return nombres;
    }
    public void setNombres(String nombres) {
        this.nombres = nombres;
    }
    public String getApellidos() {
        return apellidos;
    }
    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }
    public Long getRut() {
        return rut;
    }
    public void setRut(Long rut) {
        this.rut = rut;
    }
    public String getDv() {
        return dv;
    }
    public void setDv(String dv) {
        this.dv = dv;
    }
    public Date getFechanacimiento() {
        return fechanacimiento;
    }
    public void setFechanacimiento(Date fechanacimiento) {
        this.fechanacimiento = fechanacimiento;
    }
    public String getCorreoelectronico() {
        return correoelectronico;
    }
    public void setCorreoelectronico(String correoelectronico) {
        this.correoelectronico = correoelectronico;
    }
    public String getContraseña() {
        return contraseña;
    }
    public void setContraseña(String contraseña) {
        this.contraseña = contraseña;
    }

}
