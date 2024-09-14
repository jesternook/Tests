const fs = require('fs');


function faturamento(){
    try {

        const rawData = fs.readFileSync('dados.json');
        const data = JSON.parse(rawData);
        let dados = data.dados;

        let dadosFiltrados = dados.filter(d => d.valor !== null && d.valor !== 0);

        let valores = dadosFiltrados.map(element => element.valor);

        let menorFaturamento = Math.min(...valores);
        let maiorFaturamento = Math.max(...valores);

        let mediaMensal = valores.reduce((prev, curr) => prev + curr, 0) / dadosFiltrados.length;

        let dias = 0;
        valores.forEach(valor => {
            if(valor > mediaMensal){
                dias++;
            }
        });
        console.log(`Menor faturamento: ${menorFaturamento}`);
        console.log(`Maior faturamento: ${maiorFaturamento}`);
        console.log(`Dias acima da média: ${dias}`);

    } catch (error) {
        console.error(error);
    }
} 

faturamento();
    