import { Accidente } from './Accidente.js';
import { Bicicleta } from './Bicicleta.js';
import { Carro } from './Carro.js';
import { Licencia_conduccion } from './Licencia_conduccion.js';
import { Motocicleta } from './Motocicleta.js';
import { Motorizado } from './Motorizado.js';
import { Persona } from './Persona.js';
import { Vehiculo } from './Vehiculo.js';

function main(){
    const licencia1: Licencia_conduccion = new Licencia_conduccion(
        'A1',
        new Date('01-01-2023'),
        new Date('01-01-2028')        
    )

    const JairoRuiz: Persona = new Persona(
        "Jairo Ruiz",
        "79494241",
        "3005685008",
        53,
        licencia1       
    );
        
    const moto1: Vehiculo = new Motocicleta(
        'TVS',
        'Sport 125',
        'Rojo, negro',
        2,
        JairoRuiz,
        'CHK25F',
        115,
        125
    );

    const moto2: Vehiculo = new Motocicleta(
        'Hero',
        'Thriller',
        'Azul',
        2,
        JairoRuiz,
        'UVT24H',
        135,
        150
    )

    JairoRuiz.comprarVehiculo(moto1);    
    JairoRuiz.requerirPersona();
    console.log(JairoRuiz);
}

main();
