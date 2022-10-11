//botones-numeros
const botonNumeros = document.getElementsByName('data-number');
//botones operadores
const botonOpera = document.getElementsByName('data-opera');
//boton de igual
const botonIgual = document.getElementsByName('data-igual')[0];
//boton de borrar
const botonDelete = document.getElementsByName('data-delete')[0];
//pantalla
var result = document.getElementById('result');





//Eventos
botonNumeros.forEach(function(boton){
  boton.addEventListener('click', function(){
         agregarNumero(boton.innerText);
        //alert(boton.innerText);
    
  })
  
});


botonOpera.forEach(function(boton){
    boton.addEventListener('click', function(){
          seleccionarOperacion(boton.innerText);
          //alert(boton.innerText);
    })

});


botonIgual.addEventListener('click', function(){
    calcular();
    actualizarDisplay();
});


botonDelete.addEventListener('click', function(){
    clear();
    actualizarDisplay();
});

function seleccionarOperacion(op){
    if(opeActual === '') return;
    if(opeAnterior!=='') {
        calcular()
    }
    operacion = op.toString();
    opeAnterior = opeActual;
    opeActual = '';
}




//Operaciones

function calcular(){
   var calculo;  
   const anterior = parseFloat(opeAnterior);
   const actual = parseFloat(opeActual);
   if(isNaN(anterior) || isNaN(actual)) return;
   switch(operacion){
     case '+':
           calculo = anterior  + actual;
           break;
     case '-':
           calculo = anterior - actual;
           break;
     case '×':
           calculo = anterior * actual;
           break;
     case '/': 
           calculo  = anterior / actual;
           break;    
     default   :
           return;   

   }
   opeActual = calculo;
   operacion = undefined;
   opeAnterior = '';
}





//Logica de la calculadora

var opeActual = '';
var opeAnterior = '';
var operacion = undefined;
zero = 0;


function agregarNumero(num){
    opeActual = opeActual.toString() + num.toString();
    actualizarDisplay();

}

function clear(){
    opeActual = '';
    opeAnterior = '';
    operacion = undefined;
}


function actualizarDisplay(){
    result.value = opeActual;
}

clear();






