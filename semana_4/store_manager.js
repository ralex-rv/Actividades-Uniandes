"use strict";
const x = ['Alejandro', 'Jairo', 'Cecilia'];
const totalChars = x.reduce((a, b) => {
    return a + b.length;
}, 0);
console.log(totalChars);
/*
let products = fetch('https://gist.githubusercontent.com/josejbocanegra/be0461060d1c2d899740b8247089ba22/raw/916d2141e32e04031bda79c8886e8e4df0ae7f24/productos.json')
    .then((response) => response.json());
    //.then()

let orders = fetch(https://gist.githubusercontent.com/josejbocanegra/7b6febf87e9d986048a648487b35e693/raw/576531a2d0e601838fc3de997e021816a4b730f8/detallePedido.json)
    .then((response) => response.json());
*/
/*
let people = fetch('https://swapi.dev/api/people/1')
                .then((response) => response.json());
                
let planets = fetch('https://swapi.dev/api/planets/1')
                .then((response) => response.json());
*/
/*
people.then((r) => console.log(r));
planets.then((r) => console.log(r));
*/
//products.then((r) => console.log(r[0])
//orders.then((r) => console.log(r[0]));
