
let cicloWhile = (limit) => {
    let contador = 0;

    console.log(`Inicio del ciclo`);
    while (contador <= limit) {
        console.log(`Ejecucion ${contador}`);
        contador++;
    }
    console.log(`Fin del ciclo`);

}

cicloWhile(5);

let cicloDoWhile = (limit) => {
    let contador = 0;
    console.log(`Inicio del ciclo`);
    do {
        console.log(`Ejecucion ${contador}`);
        contador++;
    } while (contador <= limit);
    console.log(`Fin del ciclo`);

}

cicloDoWhile(3);