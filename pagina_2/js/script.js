const summaryDiv = document.getElementById("summary");
const sendToWhatsAppButton = document.getElementById("sendToWhatsAppButton");

// Carregar os códigos lidos armazenados em localStorage
const detectedBarcodes =
  JSON.parse(localStorage.getItem("detectedBarcodes")) || [];

// Exibir os códigos lidos
detectedBarcodes.forEach((code) => {
  const codeDiv = document.createElement("div");
  codeDiv.textContent = "Código: " + code;
  summaryDiv.appendChild(codeDiv);
});

function sendToWhatsApp() {
  // Construir a mensagem com os códigos
  let message = "";
  detectedBarcodes.forEach((code) => {
    message += "Código: " + code + "\n";
  });

  // URL do WhatsApp com a mensagem
  const whatsappURL =
    "https://api.whatsapp.com/send?text=" + encodeURIComponent(message);
  // Abrir a conversa no WhatsApp
  window.open(whatsappURL, "_blank");
}