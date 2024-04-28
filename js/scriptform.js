// Pegar os parâmetros enviados via POST
const urlParams = new URLSearchParams(window.location.search);
const nome = urlParams.get('nome');
const codigos = JSON.parse(urlParams.get('codigos'));

// Preencher o campo de nome
document.getElementById('nome').value = nome;

// Preencher o textarea com os códigos
document.getElementById('codigos').value = codigos.join('\n');