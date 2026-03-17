let carros_estacionados = 0;
const limitemaximo = 7;
console.log("--- iniciando verificação de vagas ---");
for (let vaga = 1; vaga <= 10; vaga ++){
    if (vaga === 4 || vaga === 3 || vaga===7){
        console.log(`vaga ${vaga}: [interditada]-pulando...`);
    continue;}
    carros_estacionados ++;
    console.log(`vaga ${vaga}: [livre]->carro_estacionado!(total: ${carros_estacionados}`);
    if(carros_estacionados === limitemaximo){console.log("--- limite atingido! fechar portão ---");
        break;}
    }
    console.log("relatorio final: operação de estrada encerrada");