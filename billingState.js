//valor total = soma de todos os valores
//percentual de cada estado = valor do estado / valor total * 100

let faturamentoEstados = {
    sp: 67.83643,
    rj: 36.67866,
    mg: 29.22988,
    es: 27.16548,
    outros: 19.84953
}

function percentualEstado(){
	let soma = Object.values(faturamentoEstados).reduce((prev, curr) => prev + curr, 0);
    
    for (let estado in faturamentoEstados){
        let percentual = faturamentoEstados[estado] / soma * 100;
        console.log(`Percentual de ${estado.toUpperCase()}: ${percentual.toFixed(2)}%`);
    }
}

percentualEstado();