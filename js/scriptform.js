const urlParams = new URLSearchParams(window.location.search);
        const codigos = urlParams.get('codigos');

        // Preencher o textarea com os códigos lidos
        if (codigos) {
            const codigosSeparados = codigos.split(',').join('\n');
            document.getElementById('codigos').value = codigosSeparados;
        }
        //Meu código funciona certo acima  

        document.getElementById('form').addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio padrão do formulário
        
            // Obtém os valores dos campos nome e codigos
            const nome = document.getElementById('nome').value;
            const codigos = document.getElementById('codigos').value;
        
            // Verifica se ambos os campos estão preenchidos
            if (nome.trim() === '' || codigos.trim() === '') {
                // Se algum dos campos não estiver preenchido, exibe uma mensagem de alerta
                alert('Por favor, preencha todos os campos.');
            } else {
                // Se os campos estiverem preenchidos, envia os dados para o servidor
                fetch(this.action, {
                    method: this.method,
                    body: new FormData(this)
                })
                .then(response => {
                    if (response.ok) {
                        // Se a resposta estiver OK, redireciona para a página de sucesso
                        window.location.href = "index_sucesso.html";
                    } else {
                        // Se houver um erro, exibe uma mensagem de erro
                        alert('Erro ao enviar os dados.');
                    }
                })
                .catch(error => {
                    console.error('Erro ao enviar os dados:', error);
                    alert('Erro ao enviar os dados.');
                });
            }
        });
        