// const barcodeResults = document.getElementById('barcode-results');
// const codeCount = document.getElementById('count');
// const successSound = document.getElementById('successSound');
// const errorSound = document.getElementById('errorSound');
// let detectedBarcodes = [];
// let codeCounter = 0;
// let errorDisplayed = false;

// async function startBarcodeReader() {
//     try {
//         const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
//         const video = document.getElementById('video');
//         video.srcObject = stream;
//         await video.play();
//         setInterval(readBarcode, 1000); // Escaneia a cada 3 segundos
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
//                     if (detectedBarcodes.includes(barcode.rawValue)) {
//                         if (!errorDisplayed) {
//                             displayMessage('Código de barras já lido.', 'error');
//                             playErrorSound();
//                             errorDisplayed = true;
//                         }
//                     } else {
//                         if (errorDisplayed) {
//                             clearError();
//                         }
//                         detectedBarcodes.push(barcode.rawValue);
//                         const resultDiv = document.createElement('div');
//                         const lastFourDigits = barcode.rawValue.slice(-4);
//                         const formattedBarcode = barcode.rawValue.replace(lastFourDigits, `<span class="bold">${lastFourDigits}</span>`);
//                         resultDiv.innerHTML = "Lido com sucesso: " + formattedBarcode;
//                         resultDiv.classList.add('success');
//                         barcodeResults.appendChild(resultDiv);
//                         codeCount.textContent = detectedBarcodes.length;
//                         playSuccessSound();
//                         codeCounter++;
//                         if (codeCounter === 3) {
//                             barcodeResults.style.overflowY = 'scroll';
//                         }
//                     }
//                 }
//             });
//         }
//     } catch (error) {
//         console.error('Erro ao detectar código de barras:', error);
//         displayMessage('Erro ao detectar código de barras.', 'error');
//     }
// }

// function formatBarcode(rawBarcode) {
//     const lastFourDigits = rawBarcode.slice(-4);
//     const formattedBarcode = rawBarcode.replace(lastFourDigits, `<span class="bold">${lastFourDigits}</span>`);
//     return formattedBarcode;
// }

// function sendCodes() {
//     // Preparando os dados para envio
//     const data = {
//         codigos: detectedBarcodes
//     };

//     // Redirecionar para o indexform.html com os dados na URL
//     const queryString = new URLSearchParams(data).toString();
//     window.location.href = "indexform.html?" + queryString;
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

// function clearError() {
//     const errorDiv = document.querySelector('.error');
//     if (errorDiv) {
//         errorDiv.remove();
//         errorDisplayed = false;
//     }
// }

// function reloadPage() {
//     window.location.reload();
// }

// document.addEventListener('DOMContentLoaded', function() {
//     startBarcodeReader();
// });

// const codeInput = document.getElementById('codeInput');

// codeInput.addEventListener('keyup', function(event) {
//     if (event.key === 'Enter') {
//         const inputValue = this.value.trim();
//         if (inputValue.length > 0 && !detectedBarcodes.includes(inputValue)) {
//             detectedBarcodes.push(inputValue);
//             const resultDiv = document.createElement('div');
//             resultDiv.textContent = "Digitado manualmente: " + inputValue;
//             resultDiv.classList.add('success');
//             barcodeResults.appendChild(resultDiv);
//             codeCount.textContent = detectedBarcodes.length;
//             playSuccessSound();
//             codeCounter++;
//             if (codeCounter === 2) {
//                 barcodeResults.style.overflowY = 'scroll';
//             }
//         } else {
//             displayMessage('Valor inválido ou já inserido.', 'error');
//             playErrorSound();
//         }
//         this.value = '';
//     }
// });



const barcodeResults = document.getElementById('barcode-results');
const codeCount = document.getElementById('count');
const successSound = document.getElementById('successSound');
const errorSound = document.getElementById('errorSound');
let detectedBarcodes = [];
let codeCounter = 0;
let errorDisplayed = false;

async function startBarcodeReader() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
        const video = document.getElementById('video');
        video.srcObject = stream;
        await video.play();
        setInterval(readBarcode, 1000); // Escaneia a cada 3 segundos
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
                    if (detectedBarcodes.includes(barcode.rawValue)) {
                        if (!errorDisplayed) {
                            displayMessage('Código de barras já lido.', 'error');
                            playErrorSound();
                            errorDisplayed = true;
                        }
                    } else {
                        if (errorDisplayed) {
                            clearError();
                        }
                        detectedBarcodes.push(barcode.rawValue);
                        const resultDiv = document.createElement('div');
                        const lastFourDigits = barcode.rawValue.slice(-4);
                        const formattedBarcode = barcode.rawValue.replace(lastFourDigits, `<span class="bold">${lastFourDigits}</span>`);
                        resultDiv.innerHTML = "Lido com sucesso: " + formattedBarcode;
                        resultDiv.classList.add('success');
                        barcodeResults.appendChild(resultDiv);
                        codeCount.textContent = detectedBarcodes.length;
                        playSuccessSound();
                        codeCounter++;
                        if (codeCounter === 3) {
                            barcodeResults.style.overflowY = 'scroll';
                        }
                    }
                }
            });
        }
    } catch (error) {
        console.error('Erro ao detectar código de barras:', error);
        displayMessage('Erro ao detectar código de barras.', 'error');
    }
}

function formatBarcode(rawBarcode) {
    const lastFourDigits = rawBarcode.slice(-4);
    const formattedBarcode = rawBarcode.replace(lastFourDigits, `<span class="bold">${lastFourDigits}</span>`);
    return formattedBarcode;
}

function sendCodes() {
    // Mostrar o select com as opções de redirecionamento
    const redirectSelect = document.getElementById('redirectOptions');
    redirectSelect.style.display = 'block';
}

document.getElementById("redirectOptions").addEventListener("change", function() {
    var selectedOption = this.value;
    if (selectedOption !== "") {
        // Preparar os dados para envio, se necessário
        const data = {
            codigos: detectedBarcodes
        };
        
        // Redirecionar com base na opção selecionada
        window.location.href = selectedOption + "?" + new URLSearchParams(data).toString();
    }
});

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

function clearError() {
    const errorDiv = document.querySelector('.error');
    if (errorDiv) {
        errorDiv.remove();
        errorDisplayed = false;
    }
}

function reloadPage() {
    window.location.reload();
}

document.addEventListener('DOMContentLoaded', function() {
    startBarcodeReader();
});

const codeInput = document.getElementById('codeInput');

codeInput.addEventListener('input', function() {
    const inputValue = this.value.trim();
    if (inputValue.length > 0 && !detectedBarcodes.includes(inputValue)) {
        detectedBarcodes.push(inputValue);
        const resultDiv = document.createElement('div');
        resultDiv.textContent = "Digitado manualmente: " + inputValue;
        resultDiv.classList.add('success');
        barcodeResults.appendChild(resultDiv);
        codeCount.textContent = detectedBarcodes.length;
        playSuccessSound();
        codeCounter++;
        if (codeCounter === 2) {
            barcodeResults.style.overflowY = 'scroll';
        }
    } else {
        displayMessage('Valor inválido ou já inserido.', 'error');
        playErrorSound();
    }
    this.value = '';
});
