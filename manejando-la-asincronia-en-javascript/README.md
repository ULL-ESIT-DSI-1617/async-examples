La sintaxis para una función que utilice async/await es la siguiente

```javascript
async function myFuncion () {  
  try {
    var result = await functionAsincrona()
  } catch (err) {
    ...
  }
}
```
La función irá precedida por la palabra reservada `async` y dentro de ella tendremos un bloque 
`try-catch`. 

Dentro del `try` llamararemos a la función asíncrona con la palabra reservada `await` delante, 
con esto hacemos que la función espere a que se ejecute y el resultado de la misma está disponible en este caso en la variable `result`.

Si ocurre algún error durante la ejecución, se ejecutará el bloque `catch` donde trataremos el error.




