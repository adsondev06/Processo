const urlParams = new URLSearchParams(window.location.search);
        const codigos = urlParams.get('codigos');

        // Preencher o textarea com os códigos lidos
        document.getElementById('codigos').value = codigos;