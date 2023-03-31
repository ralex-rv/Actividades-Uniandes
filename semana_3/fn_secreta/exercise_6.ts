/**
 * Actividades semana 3: ejercicio 6 del curso
 * Implementar un función secreta que encripte o desencripte un mensaje y que sea
 * posible devolver los resultados
 * Habilidades intermedias desarrollo SW - Agencia Distrital Atenea
 * @author Alejandro Ruiz Vallejo <ra.ruizv@uniandes.edu.co>
 */

// Se establece tipado de sub-funciones para secret()
type secretFunct = (integers: number[], digit: number) => void

/**
 * Estas sub-funciones contienen duplicación en su implementación
 * Es posible optimizar
 * @param arrayInts 
 * @param int 
 */

// Desencripta de acuerdo a regla establecida en ejecucion
const decrypt: secretFunct = (arrayInts, int) => {    
	for (let i = 0; i< arrayInts.length; i++) {
		arrayInts[i] -= int;
	}    
}

// Encripta de acuerdo a regla establecida en ejecucion
const encrypt: secretFunct = (arrayInts, int) => {    
	for (let i = 0; i< arrayInts.length; i++) {
		arrayInts[i] += int;
	}    
}

/**
 * Recibe el arreglo sobre el cual se aplicara la sub-funcion secreta; dos opciones
 * de resultado. Feed-back en sesion sicrónica por el formador: es posible abreviar
 * @param msj 
 * @param fn 
 * @param sc_key 
 * @returns 
 */ 
function secret(msj: number[], fn: secretFunct, sc_key: number): number[] {
	if (fn == encrypt) {
        encrypt(msj, sc_key)
    } else if (fn == decrypt) {
        decrypt(msj, sc_key)
    }
    return msj;
}

// PROGRAMA PRINCIPAL
function start_app(): void {
	var test_ints: number[];
	test_ints = [ 1,5,18,9,4,11,13,6 ];
	console.log(`El original es: ${test_ints}`)
    secret(test_ints, encrypt, 9);
	console.log(`Este es el encriptado: ${test_ints}`)
    secret(test_ints, decrypt, 11);
	console.log(`Este es el desencriptado: ${test_ints}`)    
}

//inicialización
start_app();