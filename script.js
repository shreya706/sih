// Remedy Finder
function findRemedy() {
  let symptom = document.getElementById("symptom").value.toLowerCase();
  let result = "";

  if (symptom.includes("stress")) {
    result = "Try Ashwagandha 🌱 - known for stress relief.";
  } else if (symptom.includes("cold")) {
    result = "Tulsi 🌿 helps boost immunity for colds.";
  } else {
    result = "No remedy found. Try Ashwagandha or Tulsi.";
  }

  document.getElementById("remedyResult").innerText = result;
}

// QR Code Generator
function generateQR(data) {
  document.getElementById("qrcode").innerHTML = "";
  new QRCode(document.getElementById("qrcode"), data);
}
