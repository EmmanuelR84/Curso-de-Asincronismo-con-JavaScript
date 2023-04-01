function sum(num1,num2) {
    return num1 + num2;
}

// funcion que llama a otra funcion(callback). No es necesario llamarla callback.
function calc(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(2, 2, sum));


setTimeout(() => {
    console.log('Hola JavaScript');
}, 2000);


function gretting(name) {
    console.log(`Hola ${name}`);
}

setTimeout(gretting, 2000, 'Emmanuel'); // Recibe la funcion, el tiempo y el argumento.