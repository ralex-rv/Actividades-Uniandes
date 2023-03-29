

var x_test: number, y_test: number, result: number;
let outputMsg: string;

let hypotenuse = (cathetus_x: number, cathetus_y: number) => {
	return (Math.sqrt(Math.pow(cathetus_x, 2)+Math.pow(cathetus_y,2)))
}

function start_app(): void {
	x_test = prompt("Ingrese cateto 1: ");
	y_test = prompt("Ingrese cateto 2: ");
	result = hypotenuse(x_test, y_test);
	alert(`La hipotenusa del trinagulo rectangulo es ${String(result)});
}