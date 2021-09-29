//Solicitar al usuariomque ingrese el precio de costo al cual se le va a calcular el iva
while(true){
    var precioCosto = parseFloat(prompt("Ingrese el costo del producto"));
    if(!isNaN(precioCosto) && precioCosto != null && precioCosto != " "){
        // alert("es numero");
        break;

    }else{
        alert("no es número");
        continue;
    }
}
    precioCostoM = precioCosto.toFixed(2);
    alert("El precio del costo del producto a calcular es: "+precioCostoM);
    console.log("El precio de costo del producto a calcular es:"+precioCostoM);
    document.write("<h3> El precio de costo del producto a calcular es: " +precioCostoM+"</h3>");

    // Sumar el iva al producto
    function CalcularIva (precioCosto){
        return (precioCosto * 0.21)

    }
    let iva = CalcularIva(precioCosto);
    ivaM = iva.toFixed(2);

    alert("El IVA del producto ingresado es: "+ivaM);
    console.log("El IVA del producto ingresado es:"+ivaM);
    document.write("<h3> EL IVA DEL PRODUCTO INGRESADO es: "+ivaM+"</h3>");

    // Sumarle el iva al precio del producto con IVA
    function SumarIva(precioCosto){
        return (precioCosto + (precioCosto * 0.21));
        


    }
    let precioConIva = SumarIva(precioCosto);
    precioConIvaM = precioConIva.toFixed(2);

    alert("El precio del producto  con IVA incluido es: "+precioConIvaM);
    console.log("El precio del producto con IVA incluido es: "+precioConIvaM);
    document.write("<h3 El precio del producto con IVA incluido es: " +precioConIvaM+"</h3>");

    // Calcular precio sugerido de venta

    function CalculaPrecioVenta(precioConIva){
        return (precioConIva * 1.25);

    }
    let PrecioVenta = CalculaPrecioVenta(precioConIva);
    precioVentaM = PrecioVenta.toFixed(2);

    alert( "El precio Sugerido de venta del producto es:"+precioVentaM);
    console.log("El precio sugerido del producto es:" +precioVentaM);
    document.write("<h3> El precio sugerido de venta del producto es:" +precioVentaM+ "</h3>")





