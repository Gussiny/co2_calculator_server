# CO2 Calculator Server
 Server for the CO2 calculator

## Inicializar
Primero debemos inicar el proyecto utilizando el comando:
```console
npm install
```

De esta manera instalamos todas las dependencias necesarias para que pueda funcionar el proyecto.

## Probar de Manera Local
Si queremos probar de manera local debemos asegurarnos de tener comentada la linea dentro de `index.js`:
```js
module.exports.handler = serverless(app);
```
Y asegurarnos que tenemos descomentada la linea del `index.js`:
```js
app.listen(port, () => console.log(`Server listening at port: ${port}`))
```

## Hacer Deploy a lambda
Si ya tenemos listo nuestro server para hacer el deploy a Lambda:
- Primero nos aseguramos de tener **comentadas** y **descomentadas** dentro del `index.js` 
- Después simplemente corremos el comando:
```console
serverless deploy
```
