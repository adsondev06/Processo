const urlParams = new URLSearchParams(window.location.search);
        const codigos = urlParams.get('codigos');

        // Preencher o textarea com os códigos lidos
        if (codigos) {
            const codigosSeparados = codigos.split(',').join('\n');
            document.getElementById('codigos').value = codigosSeparados;
        }
        document.getElementById('form').addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio padrão do formulário
        
            // Verifica se os campos nome e codigos estão preenchidos
            var nome = document.getElementById('nome').value;
            var codigos = document.getElementById('codigos').value;
        
            if (nome.trim() !== '' && codigos.trim() !== '') {
                // Faz a requisição para o servidor
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
            } else {
                // Se os campos não estiverem preenchidos, exibe uma mensagem de alerta
                alert('Por favor, preencha todos os campos.');
            }
        });
        
        // Adiciona um evento de clique ao botão "Voltar ao Início"
        document.getElementById('backToHome').addEventListener('click', function() {
            // Redireciona para o início
            window.location.href = "https://processo-ruby.vercel.app/";
        });
        
