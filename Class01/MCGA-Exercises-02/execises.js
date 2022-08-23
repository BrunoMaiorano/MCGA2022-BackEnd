/* Ejercicio - Estructura de datos: */

/* 1.- Primer paso - Crear las variables correspondientes.

Crear variables de 10 personas con su profesión, edad, y estudios completos, siendo estos de 4 opciones posibles, Secundario incompleto, Secundario completo. Universitario incompleto. Universitario incompleto.*/

let Franco = {
  profecion: "Mozo",
  edad: 40,
  estudios: "Secundario incompleto"
};
let Luciano = {
  profecion: "Abogado",
  edad: 34,
  estudios: "secundario completo"
};
let Tomas = {
  profecion: "Cocinero",
  edad: 28,
  estudios: "Universitario incompleto"
};
let Fernando = {
  profecion: "Contador",
  edad: 32,
  estudios: "Universitario completo"
};
let Rocio = {
  profecion: "Gerenta",
  edad: 53,
  estudios: "Secundario incompleto"
};
let Lucia = {
  profecion: "Vendedora",
  edad: 47,
  estudios: "Secundario completo"
};
let Hector = {
  profecion: "Repositor",
  edad: 29,
  estudios: "Secundario completo"
};
let Diego = {
  profecion: "Deposito",
  edad: 31,
  estudios: "Secundario incompleto"
};
let Noelia = {
  profecion: "Administracion",
  edad: 42,
  estudios: "Universitario incompleto"
};
let Rafael = {
  profecion: "Duenio",
  edad: 54,
  estudios: "Universitario completo"
};

let grillaEmpleados = [
  Franco,
  Luciano,
  Tomas,
  Fernando,
  Rocio,
  Lucia,
  Hector,
  Diego,
  Noelia,
  Rafael,
];

/* Crear variables de 5 empresa con cantidad de empleados, rubro al que se dedica la empresa (DEBE COINCIDIR CON LAS PROFESIONES DE LAS PERSONAS) y una colección de empleados.  */

let BarLido = {
  nombre: "BarLido",
  cantidadEmpleados: 5,
  rubro: "Culinario",
  empleados: [
    grillaEmpleados[0],
    grillaEmpleados[1],
    grillaEmpleados[2],
    grillaEmpleados[3],
    grillaEmpleados[4],
  ],
};

let HogarObrero = {
  nombre: "HogarObrero",
  cantidadEmpleados: 5,
  rubro: "Ferreteria",
  empleados: [
    grillaEmpleados[5],
    grillaEmpleados[6],
    grillaEmpleados[7],
    grillaEmpleados[8],
    grillaEmpleados[9],
  ],
};

/* console.log(HogarObrero)
 */

/* 2.- Crear una función que permite agregar sus variables a una colección para reunirlas.
 *Investigar métodos push y unshift* */

let aVariables = [];
aVariables.push(BarLido, HogarObrero);

addVariables = (...variable) => {
  return variable;
};

/* console.log(aVariables[0].rubro); */

/* 3.-Filtrar esta colección por algún tipo de rubro a elección. */

filterVariables = (miArray, param) => {
  let mssg = "";
  for (let x = 0; x < miArray.length; x++) {
    if (miArray[x].rubro == param) {
      return (mssg =
        "La empresa " +
        miArray[x].nombre +
        " pertenece al rubro " +
        miArray[x].rubro);
    }
    return (mssg = "No se encontro empresa perteneciente al rubro " + param);
  }
};

/* console.log(filterVariables(aVariables, 'Culinario')) */

/* 
4.-Conseguir la cantidad de empleados con secundario completo que tenga cada empresa. */

filtroEmpleados = (unArray) => {
  let cont = 0;
  let mssg = [];
  for (let x = 0; x < unArray.length; x++) {
    for (let i = 0; i < unArray[x].empleados.length; i++) {
      if (unArray[x].empleados[i].estudios == "secundario completo") {
        cont = cont + 1;
      }
    }
    mssg.push(
        "La empresa " +
          unArray[x].nombre +
          " tiene " +
          cont +
          " empleados con el secundario completo"
      );
  }
  return mssg;
};

console.log(filtroEmpleados(aVariables));
