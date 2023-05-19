import { Persona } from './Persona.js';
function main() {
    /*
    const moto1: Vehiculo = new Motocicleta(
        'TVS',
        'Sport 125',
        'Rojo, negro',
        2,
        undefined,
        'CHK25F',
        115,
        125
    );
    
    const moto2: Vehiculo = new Motocicleta(
        '',
        '',
        '',
        2,
        undefined,
        
    )
    */
    const JairoRuiz = new Persona("Jairo Ruiz", "79494241", "3005685008", 53, 'A1', new Date('01-01-2023'), new Date('01-01-2028'));
    /*
    const licencia1: Licencia_conduccion = new Licencia_conduccion(
        'A1',
        new Date('01-01-2023'),
        new Date('01-01-2028'),
        JairoRuiz
    )
    */
    JairoRuiz.requerirPersona();
    console.log(JairoRuiz);
}
main();
