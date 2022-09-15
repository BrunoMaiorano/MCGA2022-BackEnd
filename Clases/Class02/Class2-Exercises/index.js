const companys = require('./data/company.json')
const  employees = require('./data/employees.json')
const express = require('express')
const app = express()
const port = 3040

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:3040/`)
  })

  /* 1- Crear una ruta "/login" donde lo que se va a mostrar va a ser un string (por el momento) que solo diga "Login" */

  app.get('/login', (req, res) => {
    res.send('Login')
  })

/*   2.-A partir del primer ejercicio dado en clase 01 deberán guardar su colección en un archivo .json. 

Para hacer esto primero debemos guardar nuestras listas, tanto de empleados como de empresas en archivos .json separados, como vimos en clase con los productos  */  /* Listo */


/* 3.-Crear dos nuevas rutas, en donde en cada una deben realizar lo siguiente:

En la ruta "/empleados" deben importar el archivo json, donde guardan su colección de empleados y responder dicha request con la lista correspondiente.
 */

app.get('/empleados', (req, res) => {
  res.send(employees)
})

/* En la ruta "/empresas" deben importar el archivo json, donde guardan su colección de empresas y responder dicha request con la lista correspondiente. */

app.get('/empresas', (req, res) => {
  res.send(companys)
})


/* 4.- Filtrar nuestra ruta a través de un parametro:

En una nueva ruta "/empleado/:id" debemos responder a dicha request con el objeto correspondiente a la id enviada por parametro */

app.get('/empleado/:id', (req, res) => {
  res.json(
    employees.filter( employee => req.params.id == employee.id)
  )
})


/* En una nueva ruta "/empresa/:id" debemos responder a dicha request con el objeto correspondiente a la id enviada por parametro */

app.get('/empresa/:id', (req, res) => {
  res.json(
    companys.filter( company => req.params.id == company.id)
  )
})



/* 5.- Crear una función donde como parametro va a recibir un array y un rubro, va a identificar aquellos objetos con el mismo rubro, y devolverlos en una nueva colección.

Una vez logrado esto ahora debemos a través del metodo .every() retornar un booleano cuando se cumpla la condición solicitada es decir, cuando nuestro nuevo array contenga objetos que cumplan con el primer punto (tengan el mismo rubro) */

filterVariables = (miArray, param) => {

  let mssg = "";
  for (let x = 0; x < miArray.length; x++) {
    if (miArray[x].rubro == param) {
      return (mssg =
        "La empresa " +
        miArray[x].name +
        " pertenece al rubro " +
        miArray[x].rubro);
    }
    return (mssg = "No se encontro empresa perteneciente al rubro " + param);
  } 
};


filterVariablesV2 = (miArray, param) => {
  return miArray.every(elem => elem.rubro == param) 
}

console.log(filterVariablesV2(companys, "Culinario")) /* Va a retornar falso por que los rubros de ambas empresas son distintos */


/* Teoria de Array.prototype.every(): Determina si todos los elementos en el array satisfacen una condición. 

Precaución: ¡Llamar este método en un array vacío devuelve true para cualquier condición!

ejemplo: 
*/

const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

/* console.log(array1.every(isBelowThreshold)); */
// expected output: true


