

type secretFunct = (integers: number[], digit: number) => void

const decrypt: secretFunct = (arrayInts, int) => {    
	for (let i = 0; i< arrayInts.length; i++) {
		arrayInts[i] -= int;
	}    
}

const encrypt: secretFunct = (arrayInts, int) => {    
	for (let i = 0; i< arrayInts.length; i++) {
		arrayInts[i] += int;
	}    
}

function secret(msj: number[], fn: secretFunct, sc_key: number): number[] {
	if (fn == encrypt) {
        encrypt(msj, sc_key)
    } else if (fn == decrypt) {
        decrypt(msj, sc_key)
    }
    return msj;
}

function start_app(): void {
	var test_ints: number[];
	test_ints = [ 1,5,18,9,4,11,13,6 ];
    secret(test_ints, encrypt, 9);
    secret(test_ints, decrypt, 11);
    console.log(test_ints);
}

start_app();