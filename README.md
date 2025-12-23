<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Laboratorio BackEnd

Este es el backend del proyecto de Laboratorio, hecho con NestJS y MongoDB como base de datos. Maneja posts, comentarios y autenticación con JWT para el frontend.

-Tecnologías

---
NestJS V10.4.9
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
