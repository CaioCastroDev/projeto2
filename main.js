const form = document.getElementById ('form-atividade');
let linhas = '';
let medias = '';
const aprovado = '<img src="./images/aprovado.png" alt="Emoji alegre"';
const reprovado = '<img src="./images/reprovado.png" alt="Emoji triste"';

let somador = 0;

form.addEventListener ('submit', function (e){
    e.preventDefault();

    const inputNomeAtividade = document.getElementById ('nome-atividade');
    const inputNotaAtividade = document.getElementById ('nota-atividade');

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= 7 ? aprovado : reprovado}</td>`;
    linha += '</tr>';

    linhas += linha;

    const corpoTabela = document.querySelector ('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
});



