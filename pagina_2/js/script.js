// const summaryDiv = document.getElementById("summary");
// const sendToWhatsAppButton = document.getElementById("sendToWhatsAppButton");

// // Carregar os códigos lidos armazenados em localStorage
// const detectedBarcodes = JSON.parse(localStorage.getItem("detectedBarcodes")) || [];

// // Exibir os códigos lidos numerados
// detectedBarcodes.forEach((code, index) => {
//   const codeDiv = document.createElement("div");
//   codeDiv.textContent = (index + 1) + ":  " + code;
//   summaryDiv.appendChild(codeDiv);
// });

// function sendToWhatsApp() {
//   // Construir a mensagem com os códigos numerados
//   let message = "";
//   detectedBarcodes.forEach((code, index) => {
//     message += (index + 1) + ": Código: " + code + "\n";
//   });

//   // URL do WhatsApp com a mensagem
//   const whatsappURL = "https://api.whatsapp.com/send?text=" + encodeURIComponent(message);
//   // Abrir a conversa no WhatsApp
//   window.open(whatsappURL, "_blank");
// }

const summaryDiv = document.getElementById("summary");
const sendToWhatsAppButton = document.getElementById("sendToWhatsAppButton");
const messageInput = document.getElementById("messageInput");

// Carregar os códigos lidos armazenados em localStorage
const detectedBarcodes = JSON.parse(localStorage.getItem("detectedBarcodes")) || [];

// Exibir a mensagem do input
const message = messageInput.value;
const messageDiv = document.createElement("div");
messageDiv.textContent = message;
summaryDiv.appendChild(messageDiv);

// Adicionar duas quebras de linha entre a mensagem e os códigos
summaryDiv.appendChild(document.createElement("br"));
summaryDiv.appendChild(document.createElement("br"));

// Exibir os códigos lidos numerados
detectedBarcodes.forEach((code, index) => {
  const codeDiv = document.createElement("div");
  codeDiv.textContent = (index + 1) + ":  " + code;
  summaryDiv.appendChild(codeDiv);
});

function sendToWhatsApp() {
  // Construir a mensagem com os códigos numerados
  let finalMessage = message + "\n\n";
  detectedBarcodes.forEach((code, index) => {
    finalMessage += (index + 1) + ": Código: " + code + "\n";
  });

  // URL do WhatsApp com a mensagem
  const whatsappURL = "https://api.whatsapp.com/send?text=" + encodeURIComponent(finalMessage);
  // Abrir a conversa no WhatsApp
  window.open(whatsappURL, "_blank");
}
