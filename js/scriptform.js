const urlParams = new URLSearchParams(window.location.search);
        const codigos = urlParams.get('codigos');

        // Preencher o textarea com os códigos lidos
        if (codigos) {
            const codigosSeparados = codigos.split(',').join('\n');
            document.getElementById('codigos').value = codigosSeparados;
        }
        //Meu código funciona certo acima  

        document.addEventListener('DOMContentLoaded', function() {
            startBarcodeReader();
            
            // Armazenar o nome do usuário
            var nomeInput = document.getElementById('seunome');
            var nome = '';
            nomeInput.addEventListener('change', function() {
                nome = nomeInput.value.trim();
            });
            
            const form = document.getElementById('form');
            form.addEventListener('submit', function(event) {
                event.preventDefault();
                
                // Obter a ação selecionada e os códigos digitados
                var acao = document.getElementById('acao').value;
                var codigos = document.getElementById('codigos').value.split('\n');
                
                // Adicionar o nome do usuário ao lado de todos os códigos
                codigos.forEach(function(codigo) {
                    if (codigo.trim() !== '') {
                        // Criar uma linha com o nome do usuário e o código
                        var linha = nome + '\t' + codigo.trim();
                        
                        // Adicionar a linha ao textarea "codigos"
                        document.getElementById('codigos').value += '\n' + linha;
                    }
                });
                
                // Enviar o formulário
                this.submit();
            });
        });
        


