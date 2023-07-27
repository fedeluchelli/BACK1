/*

//  CALLBACK
const boton = documen.getElementById("boton1");
boton.addEventListener("click", () => {});

const datos = [];

datos.forEach(() => {});

const calcularImpuestos = (calcularIVA(), calcularIIBB(), calcularImpuestosLocales()) =>{

}
*/

//  PROMESAS
/*
const empleados = [
  { nombreCompleto: "Pedro Perez", sueldos: undefined },
  { nombreCompleto: "María Laspina", sueldos: 5000 },
  { nombreCompleto: "Laura Perez", sueldos: 5000 },
  { nombreCompleto: "Franco Gonzales", sueldos: 5000 },
  { nombreCompleto: "Cristian Molilla", sueldos: 5000 },
];

const consultarEmpleados = (confirmacion) => {
  return new Promise((resolve, reject) => {
    if (confirmacion) {
      resolve(empleados);
    }
    reject("Acceso denegado");
  });
};

// console.log(consultarEmpleados(false));

consultarEmpleados(true)
  .then((empl) => console.log(empl))
  .catch((error) => console.log(`Error en consultar empleados ${error}`));
*/
/*
fetch("https://criptoya.com/api/dolar")
  .then((promise) => promise.json())
  //.then((dolar) => console.log(dolar));
  .then((dolar) => {
    const { solidario, blue, mep, ccl } = dolar;
    console.log(solidario, blue, mep, ccl);
  });
*/
/*
const obtenerValoresDolar = async () => {
  const promise = await fetch("https://criptoya.com/api/dolar");
  const dolar = await promise.json();
  console.log(dolar);
};
obtenerValoresDolar();
*/

const obtenerValoresDolar = async () => {
  try {
    const promise = await fetch("https://criptoya.com/api/dolar");
    const dolar = await promise.json();
    console.log(dolar);
  } catch (error) {
    console.log(`Error en consultar dolar`, error);
  }
};
obtenerValoresDolar();
