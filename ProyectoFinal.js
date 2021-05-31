function limpiarFormulario() {
document.getElementById("miForm").reset();
}

var suma = function(n1,n2){
var X  = parseFloat(document.getElementById("X").value);
var Y  = parseFloat(document.getElementById("Y").value);
f = X+Y;
	alert("Sustitucion: f(x)= "+X+" + "+Y);
	return "Resultado: f(x)= "+f;
}
var resta = function(n1,n2){
var X  = parseFloat(document.getElementById("X").value);
var Y  = parseFloat(document.getElementById("Y").value);
f = X-Y;
	alert("Sustitucion: f(x)="+X+"-"+Y);
	return "Resultado: f(x)="+f;
}
var mult = function(n1,n2){
var X  = parseFloat(document.getElementById("X").value);
var Y  = parseFloat(document.getElementById("Y").value);
f = X*Y;
	alert("Sustitucion: f(x)="+X+"x"+Y);
	return "Resultado: f(x)="+f;
}
var div = function(n1,n2){
var X  = parseFloat(document.getElementById("X").value);
var Y  = parseFloat(document.getElementById("Y").value);
f = X/Y;
	alert("Sustitucion: f(x)="+X+"/"+Y);
	return "Resultado: f(x)="+f;
}

function LimpiarFormulario() {
	document.getElementById("Miform").reset();
}

var Time = function(n1,n2){
	var V = parseFloat(document.getElementById("V").value);
	var D = parseFloat(document.getElementById("D").value);
	var T = D/V;
	return "Usted llegará a su destino en "+T+" Hora(s) aproximadamente";
}