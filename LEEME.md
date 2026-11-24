# clase13 — SPA CAAOH (tu versión, Gary Cristóbal)

Este proyecto es tu versión del trabajo de clase13: la página del SPA CAAOH con el formulario de contacto conectado a una base de datos MySQL usando Node.js + Express + EJS.

Datos de tu versión (distintos a los del profesor):
- Base de datos: `gcristobal`
- Tabla: `info`
- Ruta del formulario: `/validar`
- El formulario SÍ muestra un mensaje en pantalla al enviar (corrige el bug de la clase, donde faltaba `res.send()`).

## 1. Requisitos
- Tener instalado [Node.js](https://nodejs.org/) (cualquier versión reciente).
- Tener XAMPP instalado y Apache + MySQL encendidos (los mismos que usaste en clase).

## 2. Descomprime el proyecto
Descomprime este zip en una carpeta de tu Escritorio, por ejemplo:
`C:\Users\TU_USUARIO\Desktop\clase13-gcristobal`

Ábrela en VS Code (`File > Open Folder...`).

## 3. Crea la base de datos
1. Abre phpMyAdmin (con Apache y MySQL encendidos en XAMPP).
2. Click en "Nueva" (panel izquierdo) y crea una base de datos llamada exactamente `gcristobal` (cotejamiento `utf8mb4_general_ci`, igual que hizo el profesor).
3. Entra a la base de datos `gcristobal`, ve a la pestaña "SQL" y pega el contenido del archivo `info.sql` (que está en esta carpeta) y dale "Continuar". Esto crea la tabla `info` con las columnas correctas (id, dni, nombres, correo, celular, fecha).

## 4. Instala las dependencias
En VS Code, abre una terminal (`Terminal > New Terminal`) y escribe:

```
npm install
```

Espera a que termine (puede tardar uno o dos minutos).

## 5. Enciende el servidor
En la misma terminal:

```
node index.js
```

Deberías ver en la terminal:
```
Conectado a la base de datos MySQL (gcristobal)
Servidor escuchando en el puerto 3000
```

Si te sale un error de conexión a MySQL, revisa que Apache y MySQL estén encendidos en el panel de XAMPP.

## 6. Pruébalo en el navegador
Abre tu navegador en: http://localhost:3000

Baja hasta la sección "ESCRÍBENOS EN" y llena el formulario con tus propios datos de prueba, por ejemplo:
- DNI: (el tuyo o uno de prueba)
- Nombres: Gary Cristóbal
- Correo: gary.cristobal@tecsup.edu.pe
- Celular: 942559334

Dale clic a "ENVIAR". Debe aparecer un mensaje verde arriba del formulario confirmando que se guardó, y el dato debe aparecer en phpMyAdmin dentro de `gcristobal` > `info`.

## 7. Si quieres subirlo a un hosting real (gratis, sin tarjeta)
Cuando ya tengas esto funcionando en tu máquina, dime y seguimos con el siguiente paso: subirlo a GitHub, crear una base de datos gratuita en db4free.net, y desplegar el servidor en Render.com (plan gratis, sin tarjeta de crédito). Para eso vamos a usar el archivo `.env.example` que ya está en esta carpeta como guía de qué variables de entorno configurar (DB_HOST, DB_NAME, DB_USER, DB_PASSWORD, DB_PORT).

## Archivos importantes
- `index.js` — el servidor Express (ya con la ruta `/validar`, la base `gcristobal`, la tabla `info`, y el `res.send()` corregido).
- `views/index.ejs` — la página con el formulario.
- `info.sql` — script para crear la tabla `info` en phpMyAdmin.
- `.env.example` — ejemplo de variables de entorno (para cuando subas esto a un hosting real).
- `public/` — tus CSS, imágenes y JS tal como estaban en el proyecto original.
