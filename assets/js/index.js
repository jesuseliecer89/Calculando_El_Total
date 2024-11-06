const incrementar = document.querySelector('#incrementar')
const decrementar = document.querySelector('#decrementar')
let cantidad = document.querySelector('.cantidad')
let total = document.querySelector('.valor-total')


let valorCantidad = 0
cantidad.innerHTML = valorCantidad

precio = 400000
precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio




incrementar.onclick = function(){



    cantidad.innerHTML = `${++valorCantidad}`

    total.innerHTML = `${valorCantidad * precio}`



   

}


decrementar.onclick = function() {
    if (valorCantidad > 0) {  
        valorCantidad--;  
        cantidad.innerHTML = valorCantidad;  
        total.innerHTML = valorCantidad * precio;  
    }
};




