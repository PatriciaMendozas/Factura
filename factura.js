
function Empresa(_empresa, _direccionemp,_rucemp)
{
  this.empresa = _empresa;
  this.direccion =_direccionemp;
  this.ruc = _rucemp;
}
function cliente(_razonsocial,_ruc,_direccion)
{
  this.razonsocial =_razonsocial;
  this.ruc = _ruc;
  this.direccion= _direccion;
}
function productos(_nombre, _cantidad,_preciounit)
{
  this.noombre = _nombre;
  this.cantidad = _cantidad;
  this.preciounit = _preciounit;

 }
 function factura ()
 {
  this.tipopago= 0;
  this.total = 0;
  this.igv =0;
  this.totalf=0;
  this.cliente = null;
  this.productos = [];
  this.empresa = new Empresa();
 } 
productos.prototype.unitariototal = function()
{
return this.cantidad * this.preciounit;
};
factura.prototype.totalfinal= function()
{
  for (var i = 0; i < this.productos.length; i++) {
    this.total += this.productos[i].unitariototal()
  }
  this.igv = (this.total * 0.18).toFixed(2);
  this.totalf=parseInt(this.total) + parseFloat(this.igv);
};
var factura1 = new factura();
//------- Vistas
function datoscliente()
{
  var _razonsocial = document.getElementById("social").value;
  var _direccion = document.getElementById("direccion").value;
  var _ruc = document.getElementById("ruc").value;
  
  factura1.cliente = new cliente(_razonsocial, _ruc, _direccion);
  clientedatos.innerHTML += '<li class="list-group-item">' +'<strong>Razon Social:</strong>'+ _razonsocial + '</li><li class="list-group-item">' +'<strong>Direccion:</strong>'+ _direccion + '</li><li class="list-group-item">' +'<strong>ruc:</strong>'+ _ruc + '</li>';
 console.log(factura1.cliente);

}
 function datosproductos()
 {
  var _producto = document.getElementById("produ").value;
  var _cantidad = document.getElementById("cantidad").value;
  var _precio = document.getElementById("venta").value;
  factura1.productos.push(new productos(_producto,_cantidad,_precio));
  tabla_datos.innerHTML += '<tr><td>' + _producto + '</td><td>'+ _cantidad + '</td><td>'+_precio + '</td></tr>';
  tabla_datos2.innerHTML += '<tr><td>' + _producto + '</td><td>'+ _cantidad + '</td><td>'+_precio + '</td></tr>';
  document.getElementById("cantidad").value=" ";
  document.getElementById("venta").value="";
  console.log(factura1.productos);
 }
 function calcular()
 {
    factura1.totalfinal();
    document.getElementById("subt").value=factura1.total;
    document.getElementById("igv").value=factura1.igv;
    document.getElementById("total").value=factura1.totalf;
    //consola.log(factura.this.total);
    console.log(factura1.total);
 }
 function cerrartodo()
 {
  $('#myModal').modal('hide');
  $('#myModa2').modal('hide');
  
 }
//-----