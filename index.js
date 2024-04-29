const http = require('http');

const server = http.createServer((request, response) => {

    // method, url => request
    // status, mimeType, response => response

    const status = '200';
    const mimeType = {'Content-type': 'text/html'};

    const contentResponse = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Alta</title>
    </head>
    <body>
        <h1>Hola con node server</h1>
    </body>
    </html>
    `;
    response.writeHead(status, mimeType);
    response.write(contentResponse);
    response.end();
});

server.listen(5100);

// let cantidad = prompt('Cuantos alumnos son?')
// let alumnosTotales = [];

// for (i = 0; i < cantidad; i++) {
//     alumnosTotales[i] = [prompt(`Nombre del alumno ${i+1}`),0];
// }