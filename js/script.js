//Calcular rendimiento diario del Dinero Invertido en Billetera Virtual
function calcularRendimientoDiario (saldo,tasaDiaria){
    return saldo*tasaDiaria;
}
//Inversión inicial
let dineroInvertido = prompt("Ingrese la cantidad de dinero a invertir:");
    dineroInvertido = parseFloat(dineroInvertido);
//Tasa de interés anual
let tasaInteresAnual = prompt("Ingrese la tasa de interés anual en porcentaje:");
    tasaInteresAnual = parseFloat(tasaInteresAnual)/100;
//Calcular la tasa diaria
const tasaDiaria = tasaInteresAnual/365;
//Cantidad de días
let cantidadDias = prompt("Ingrese la cantidad de días:");
    cantidadDias = parseInt(cantidadDias);
//Saldo Inversión inicial
let saldo = dineroInvertido;
//Simular rendimiento diario y mostrar en consola cada 7 días
for (let i=1; i<=cantidadDias; i++){
    let rendimientoDiario = calcularRendimientoDiario(saldo, tasaDiaria);
   // Rendimiento cada semana (7 días) en consola 
    if (i % 7===0){
      let semana = i/7;
      console.log("Rendimiento en la semana "+semana+": $"+rendimientoDiario.toFixed(2));;
    }
    saldo += rendimientoDiario;
    }
    //Saldo y Ganancia
    let saldoFinal = saldo.toFixed(2);
    console.log("Dinero total después de " + cantidadDias + " días: $" + saldoFinal);
    let ganancia = (saldo - dineroInvertido).toFixed(2);
    console.log("Ganancia: $" + ganancia);
    alert("Dinero total después de " + cantidadDias + " días: $" + saldoFinal + "\nGanancia: $" + ganancia);