const digite = require('prompt-sync')();
const axios = require('axios');

console.log('Sistema de consulta de cidades pelo CEP: ');

let cep = digite('Digite o CEP da cidade que deseja consultar: ');

async function buscarCEP(cep) {

    try {
        const consulta = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        
        if (consulta.data.erro) {
            console.log('CEP não encontrado.');
            return;
        }
        
        console.log('Consulta realizada!');
        console.log('Dados da cidade:');
        console.log(`Logradouro: ${consulta.data.logradouro}`);
        console.log(`Bairro: ${consulta.data.bairro}`);
        console.log(`Cidade: ${consulta.data.localidade}`);
        console.log(`Estado: ${consulta.data.uf}`);
        console.log(`CEP: ${consulta.data.cep}`);
        return;

    } catch (error) {
        console.error('Erro ao buscar CEP:', error);
        return;
    }
}
   
buscarCEP(cep);

