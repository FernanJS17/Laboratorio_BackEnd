<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Laboratorio BackEnd

Este es el backend del proyecto de Laboratorio, hecho con NestJS y MongoDB como base de datos. Maneja posts y comentarios.

-Tecnologías

---
NestJS V10.4.9
---
---
MongoDB V7.0.28
---
TypeScript

Mongoose para modelar los datos

-Instalación

Clona el repositorio:

git clone https://github.com/FernanJS17/Laboratorio_BackEnd.git


Entra en la carpeta del proyecto:

cd Laboratorio_BackEnd

Instala las dependencias:

npm install

Crea un archivo .env con la configuración mínima:

PORT=3000
MONGO_URI=mongodb://localhost:27017/laboratorio


Levanta el servidor en modo desarrollo:

npm run start:dev

El backend estará corriendo en:

http://localhost:3000

-- Endpoints principales

Posts

GET /posts → lista posts con paginación

POST /posts → crea un nuevo post

POST /posts/bulk → carga masiva de posts

GET /posts/:id → obtener un post

PUT /posts/:id → actualizar post

DELETE /posts/:id → eliminar post

Comments

GET /comments?postId= → obtener comentarios de un post

POST /comments → crear comentario

DELETE /comments/:id → eliminar comentario

-Uso

Primero asegúrate de tener MongoDB corriendo localmente.

Levanta el backend (npm run start:dev).

Luego levanta el frontend: Laboratorio FrontEnd.

Haz login desde el frontend para usar la app.

Puedes crear posts, editarlos, eliminarlos, y también comentarlos.

La carga masiva permite generar varios posts de prueba automáticamente.

-Notas

Recomendado usar Postman para probar los endpoints.

-GitHub: FernanJS17
