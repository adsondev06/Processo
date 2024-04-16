        // const video = document.getElementById('video');
        // const barcodeResults = document.getElementById('barcode-results');
        // const finishButton = document.getElementById('finishButton');
        // const successSound = document.getElementById('successSound');
        // const errorSound = document.getElementById('errorSound');

        // let detectedBarcodes = [];

        // async function startBarcodeReader() {
        //     try {
        //         const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
        //         video.srcObject = stream;
        //         await video.play();
        //         readBarcode();
        //     } catch (error) {
        //         console.error('Erro ao iniciar a leitura do código de barras:', error);
        //         displayMessage('Erro ao iniciar a leitura do código de barras.', 'error');
        //     }
        // }

        // async function readBarcode() {
        //     try {
        //         const barcodeDetector = new BarcodeDetector();
        //         const barcodes = await barcodeDetector.detect(video);

        //         if (barcodes.length > 0) {
        //             barcodes.forEach(barcode => {
        //                 if (barcode.rawValue.length === 10) {
        //                     const isDuplicate = detectedBarcodes.includes(barcode.rawValue);
        //                     if (isDuplicate) {
        //                         displayMessage('Código de barras já lido.', 'error');
        //                         playErrorSound();
        //                     } else {
        //                         detectedBarcodes.push(barcode.rawValue);
        //                         const resultDiv = document.createElement('div');
        //                         resultDiv.textContent = "Lido com sucesso: " + barcode.rawValue;
        //                         resultDiv.classList.add('success');
        //                         barcodeResults.appendChild(resultDiv);
        //                         finishButton.style.display = 'block';
        //                         playSuccessSound();
        //                     }
        //                 }
        //             });
        //         }
        //     } catch (error) {
        //         console.error('Erro ao detectar código de barras:', error);
        //         displayMessage('Erro ao detectar código de barras.', 'error');
        //     } finally {
        //         setTimeout(readBarcode, 2000);
        //     }
        // }

        // function finishCollection() {
        //     localStorage.setItem('detectedBarcodes', JSON.stringify(detectedBarcodes));
        //     window.location.href = 'resumo.html';
        // }

        // function playSuccessSound() {
        //     successSound.play();
        // }

        // function playErrorSound() {
        //     errorSound.play();
        // }

        // function displayMessage(message, type) {
        //     const messageDiv = document.createElement('div');
        //     messageDiv.textContent = message;
        //     messageDiv.classList.add(type);
        //     barcodeResults.appendChild(messageDiv);
        //     barcodeResults.scrollTop = barcodeResults.scrollHeight;
        // }

        // startBarcodeReader();

        const video = document.getElementById('video');
        const barcodeResults = document.getElementById('barcode-results');
        const finishButton = document.getElementById('finishButton');
        const successSound = document.getElementById('successSound');
        const errorSound = document.getElementById('errorSound');
        
        let detectedBarcodes = [];
        
        async function startBarcodeReader() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
                video.srcObject = stream;
                await video.play();
                readBarcode();
            } catch (error) {
                console.error('Erro ao iniciar a leitura do código de barras:', error);
                displayMessage('Erro ao iniciar a leitura do código de barras.', 'error');
            }
        }
        
        async function readBarcode() {
            try {
                const barcodeDetector = new BarcodeDetector();
                const barcodes = await barcodeDetector.detect(video);
        
                if (barcodes.length > 0) {
                    barcodes.forEach(barcode => {
                        if (barcode.rawValue.length === 10) {
                            const isDuplicate = detectedBarcodes.includes(barcode.rawValue);
                            if (isDuplicate) {
                                displayMessage('Código de barras já lido.', 'error');
                                playErrorSound();
                            } else {
                                detectedBarcodes.push(barcode.rawValue);
                                const resultDiv = document.createElement('div');
                                const lastFourDigits = barcode.rawValue.slice(-4);
                                resultDiv.innerHTML = "Lido com sucesso: " + barcode.rawValue.replace(lastFourDigits, `<span class="error">${lastFourDigits}</span>`);
                                resultDiv.classList.add('success');
                                barcodeResults.appendChild(resultDiv);
                                finishButton.style.display = 'block';
                                playSuccessSound();
                            }
                        }
                    });
                }
            } catch (error) {
                console.error('Erro ao detectar código de barras:', error);
                displayMessage('Erro ao detectar código de barras.', 'error');
            } finally {
                setTimeout(readBarcode, 2000);
            }
        }
        
        function finishCollection() {
            localStorage.setItem('detectedBarcodes', JSON.stringify(detectedBarcodes));
            window.location.href = 'resumo.html';
        }
        
        function playSuccessSound() {
            successSound.play();
        }
        
        function playErrorSound() {
            errorSound.play();
        }
        
        function displayMessage(message, type) {
            const messageDiv = document.createElement('div');
            messageDiv.textContent = message;
            messageDiv.classList.add(type);
            barcodeResults.appendChild(messageDiv);
            barcodeResults.scrollTop = barcodeResults.scrollHeight;
        }
        
        startBarcodeReader();
        