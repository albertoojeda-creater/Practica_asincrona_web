# Practica_asincrona_web

📚 Asignatura

Desarrollo Web Profesional

🧩 Unidad

Unidad II – Sitios Web Dinámicos

🎯 Objetivo

Implementar el intercambio asíncrono de información entre cliente y servidor, utilizando herramientas como Fetch API, JSON, async/await y manipulación del DOM, permitiendo actualizar información en la página sin necesidad de recargar el sitio.

🧠 Descripción del proyecto

Este proyecto consiste en una aplicación web que permite consultar una lista de productos desde un servidor utilizando peticiones asíncronas.

Cuando el usuario presiona el botón "Cargar productos", el navegador realiza una petición al servidor mediante Fetch API. El servidor responde con información en formato JSON, la cual es procesada en el cliente utilizando JavaScript y mostrada dinámicamente en la página mediante la manipulación del DOM.

De esta forma, los datos se cargan sin necesidad de recargar toda la página, mejorando la experiencia del usuario.

🛠 Tecnologías utilizadas

Node.js – entorno de ejecución para JavaScript

Express – framework para crear el servidor

HTML5 – estructura de la interfaz

CSS3 – estilos y diseño responsive

JavaScript – lógica de la aplicación

Fetch API – comunicación asíncrona con el servidor

JSON – formato de intercambio de datos

📂 Estructura del proyecto
practica-asincrona-web
│
├── public
│   ├── index.html
│   ├── styles.css
│   └── app.js
│
├── server.js
└── package.json

Descripción de archivos
Archivo	Descripción
server.js	Servidor Express que proporciona la API de productos
index.html	Interfaz principal de la aplicación
styles.css	Estilos del sitio web
app.js	Lógica de la aplicación y peticiones asíncronas
package.json	Dependencias del proyecto

⚙️ Instalación y ejecución
1️⃣ Clonar el repositorio
[git clone https://github.com/usuario/practica-asincrona-web.git](https://github.com/albertoojeda-creater/Practica_asincrona_web.git)
2️⃣ Entrar al proyecto
cd practica-asincrona-web
3️⃣ Instalar dependencias
npm install
4️⃣ Ejecutar el servidor
node server.js
5️⃣ Abrir en el navegador
http://localhost:3000
🔄 Funcionamiento

El usuario abre la aplicación web.

Se presiona el botón Cargar productos.

JavaScript realiza una petición al servidor usando Fetch API.

El servidor Express responde con un arreglo de productos en formato JSON.

Los datos se reciben en el cliente mediante async/await.

JavaScript crea dinámicamente las tarjetas de productos.

El DOM se actualiza para mostrar la información sin recargar la página.

🚀 Mejoras implementadas

Se agregaron algunas funcionalidades adicionales para mejorar la experiencia del usuario:

🔎 Buscador de productos

🗂 Filtro por categoría

🎨 Interfaz moderna y responsive

📱 Diseño adaptable a dispositivos móviles

📸 Evidencia de funcionamiento

El proyecto permite visualizar productos dinámicamente en la interfaz sin recargar la página.

Las tarjetas muestran:

Nombre del producto

Precio

Categoría

📖 Conceptos aplicados

Durante el desarrollo de este proyecto se aplicaron conceptos fundamentales del desarrollo web moderno:

Peticiones asíncronas

Uso de Fetch API

Manejo de async / await

Intercambio de datos con JSON

Manipulación del DOM

Creación de API con Express

Diseño responsive

📄 Autor

Alberto Ojeda

Proyecto académico desarrollado para la asignatura Desarrollo Web Profesional.
