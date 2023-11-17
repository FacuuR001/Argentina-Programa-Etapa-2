const callback = () => {
    console.log("Suma Completada!");
}

function suma (a,b,callback){
    let c = a +b;
    console.log("la suma de " + a + " + " +  b + " " + "= " + c);
    callback();
}

suma(4, 1, callback)

/*
El tercer parámetro recibido en la función suma es un callback, que es una función que se pasa como argumento.
En este caso, la función callback se ejecuta después de realizar la suma.


No es estrictamente obligatorio desarrollar funciones de este tipo, pero son comunes en situaciones
asíncronas o en operaciones que pueden tomar tiempo.
*/