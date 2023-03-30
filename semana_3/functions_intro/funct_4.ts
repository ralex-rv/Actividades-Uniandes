function arrayNumber (...stringUsr: string[]): String[] {
    stringUsr.split(",");
	return arrayText.map((item) => String(item));	
}

function calculateMinor(...integers: string[]): string {	
	let minor: string =  integers[0];
	for (let index = 0; index < integers.length; index++) {
		if (integers[index] < minor) {
			minor = integers[index]
		}
	}
	return minor;
}

function calculateMajor(...integers: string[]): string {
	let major: string =  integers[0];
	for (let index = 0; index < integers.length; index++) {
		if (integers[index] > major) {
			major = integers[index]
		}
	}
	return major;
}

let average = (integers: number[]): number => {
	let sum: number = 0; 	
	for (let index = 0; index < integers.length; index++) {
		sum += integers[index];
	}
	return sum / integers.length;
}

function start_app(): void {
	let test_str: string = String(prompt('Ingrese un conjunto de enteros separados por coma: '));
	let test_integers: string[] = arrayNumber(test_str);   
	console.log(`El menor de los elementos es ${calculateMinor(test_integers)}`);
	console.log(`El mayor de los elementos es ${calculateMajor(test_integers)}`);
	console.log(`La media de los elementos es ${average(test_integers)}`);
}

start_app();