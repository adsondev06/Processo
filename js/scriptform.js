const urlParams = new URLSearchParams(window.location.search);
        const codigos = urlParams.get('codigos');

        // Preencher o textarea com os códigos lidos
        if (codigos) {
            const codigosSeparados = codigos.split(',').join('\n');
            document.getElementById('codigos').value = codigosSeparados;
        }
        //Meu código funciona certo acima  

        