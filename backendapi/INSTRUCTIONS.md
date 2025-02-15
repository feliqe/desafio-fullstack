# Backend - Spring boot

## Requisitos Previos

- **Node.js** (v16 o superior)
- **Java JDK** (v17)
- **Spring Boot** (3.4.2)
- **Maven** (si se usa Spring Boot)
- **Base de datos H2** (incluida en el proyecto, no requiere instalación externa)

## Dependencias del Proyecto

- Spring Boot Starter Web: Para crear una API RESTful.
- Spring Data JPA: Para la persistencia de datos.
- H2 Database: Base de datos en memoria.
- Spring Boot Starter Validation: Para validaciones de datos.
- Springdoc OpenAPI: Para la documentación de la API (Swagger UI).

## Estructura del Proyecto

```bash
backendapi/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/example/usuario/
│   │   │       ├── controllers/
│   │   │       ├── models/
│   │   │       ├── repositories/
│   │   └── resources/
│   │       ├── application.properties
│   │       └── openapi.yaml
│   └── test/
├── pom.xml
└── README.md
```

## Pasos para Ejecutar el Backend

### 1. Clona el repositorio

Si aún no tienes el repositorio del proyecto, clónalo ejecutando el siguiente comando:

```bash
git clone https://github.com/previred/desafio-fullstack
```

### 2. Navega a la carpeta del backend

```bash
cd backend
```

### 3. Instala las dependencias (si es un proyecto Node.js)

```bash
npm install
```

Si es un proyecto Spring Boot, compila el proyecto con Maven:

```bash
mvn clean install
```

### 4. Configura la base de datos (si es necesario):

- El proyecto utiliza H2 como base de datos en memoria, por lo que no se requiere configuración adicional.

### 5. Navega a la carpeta del backend

Si es un proyecto Node.js:

```bash
npm start
```

Si es un proyecto Spring Boot:

```bash
mvn spring-boot:run
```

### 6. Navega a la carpeta del backend

Abre tu navegador o usa una herramienta como Postman para acceder a:

```bash
http://localhost:8080/api/usuarios
```

### 7. Key de openApi

crea una hoja con el nombre de .env en la raiz del proyecto, con el siguiente contenido:

```bash
OPENAPI_KEY="<tu_clave_de_openai_aquí>"
```

### 8. Acceder a la consola de H2

Una vez que la aplicación esté en ejecución, abre tu navegador web y visita la siguiente URL:

```bash
http://localhost:8080/h2-console
```

Configurar la conexión en la consola de H2

En la página de inicio de la consola de H2, ingresa los siguientes detalles:

- **JDBC URL**: jdbc:h2:mem:apidb (o la URL que esta configurada en application.properties).
- **User Name**: sa (usuario por defecto).
- **Password**: 123456 (la contraseña que cue esta configurada en application.properties).
  Luego, haz clic en Connect.

## Felipe Cerda
