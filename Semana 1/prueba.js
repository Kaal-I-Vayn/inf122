
let suma=7+2;
console.log(suma);
let resta= 5 - 2;
console.log(resta);
let multiplicacion = 3 * 5;
console.log(multiplicacion);
let division = 4 / 2;
console.log(division);
let modulo = 10 % 4;
console.log(modulo);
let sumaMultiplicacionModulo = 10 + 5 * 2 % 1;
console.log(sumaMultiplicacionModulo);
let restaMultiDivSuma = 7 - 2 * 5 / 2 + 1; 
console.log(restaMultiDivSuma);
let mayorQue = 10 > 5;
console.log(mayorQue);
let mayorIgualQue = 13 >= 14;
console.log(mayorIgualQue);
let menorQue = 10 < 20;
console.log(menorQue);
let menorIgualQue = 25 <= 5;
console.log(menorIgualQue);
let igualQue = 'Hola' === 'hola' ;
console.log(igualQue);
let diferenteQue = 'Hola' != 'hola';
console.log(diferenteQue);
let and = true && true;
console.log(and);
let or = false || true;
console.log(or);
let not = !false;
console.log(not);

//array
const persona1 =
{
  nombre:"Carlos",
  edad:25,
  ocupacion:"Desarrollador"
};
//objetos
const colores1 =["rojo","verde","azul"];

console.log(persona1.nombre)
console.log(persona1.edad)
console.log(persona1.ocupacion)

console.log("Mi nombre es "+persona1.nombre+" y tengo "+persona1.edad+" años");

persona1["apellido"]="Perez";
persona1["ci"]=1531515;
console.log(persona1);
persona1.nombre="Pedrito";
console.log(persona1);
persona1.edad=70;
console.log(persona1);
persona1.edad=40;
persona1.ocupacion="Administrador"
console.log(persona1);

console.log(colores);
console.log(colores.length);
console.log(colores[0]);
console.log(colores[1]);
console.log(colores[2]);
console.log(colores[3]);

for(let i=0;i<colores.length;i++)
  {
    console.log("Elemento "+colores[i]+" indice: "+i);
  }

  console.log(colores);
  colores.push("rosita")
  colores.push("verde")
  colores.push("cafesito")
  console.log(colores);
  colores.reverse();
  console.log(colores);
  colores.sort();
  console.log(colores);
  console.log(colores);
  colores.reverse();
  console.log(colores);
  colores.sort();
  console.log(colores);
  colores.push("Violeta");
  colores.push("Amarillo");
  console.log(colores);
  colores.push(true);
colores.push(false);
colores.push(2.5);
colores.push(9.55);
console.log	(colores);
colores.sort();
console.log	(colores);
  
console.log	(colores);
var elemento=colores.pop();
console.log	(elemento);
console.log	(colores);

var encontrado = colores.find(function (elemento){
    return elemento === "rojo";
});
var elemento = colores.findIndex(function (elemento)
{
    return elemento === 1;
});


colores.findIndex(function(elemento)
  {
		elemento===true  
	});

console.log(encontrado);
console.log(elemento);

function saludar(nombre)
{
  return "hola, "+nombre+"!";
}
const mensaje = saludar("Calvin");

console.log(mensaje)