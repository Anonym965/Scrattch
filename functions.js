function limpiar(){
    document.getElementById('Calcular').reset();
}
function sumar1(){
    var a = parseInt(document.getElementById('valor1').value), required;
    var b = parseInt(document.getElementById('valor2').value), required;
    var c = parseInt(document.getElementById('valor3').value), required;
    var d = parseInt(document.getElementById('valor4').value), required;
    var e = parseInt(document.getElementById('valor5').value), required;
    var f = parseInt(document.getElementById('valor6').value), required;
    var g = parseInt(document.getElementById('valor7').value), required;
    document.getElementById('preresultado').innerHTML = a + b + c + d + e + f + g + (", Ahora inserta estos dos digitos debajo"), required;
    
}
function sumar2(){
    var h = parseInt(document.getElementById('valor8').value);
    var i = parseInt(document.getElementById('valor9').value);
    document.getElementById('resultado').innerHTML = h + i;

}
    





