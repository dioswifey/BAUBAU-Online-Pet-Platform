function showInfo(type) {
  const infoBox = document.getElementById("info-box");
  const infoText = document.getElementById("info-text");

  let text = "";
  switch (type) {
    case "care":
      text = "Our customer care team is available 24/7 to assist you with any questions or issues.";
      break;
    case "shipping":
      text = "Shipping usually takes 3-5 business days. Tracking details are emailed once your order ships.";
      break;
    case "exchange":
      text = "Need to return or exchange? You can do so within 14 days of delivery — no hassle.";
      break;
    case "promo":
      text = "Stay tuned! We regularly offer promotions and discounts for our loyal customers.";
      break;
  }

  infoText.textContent = text;
  infoBox.classList.remove("hidden");
}

function startChat() {
  alert("Connecting you to a live support agent... (Demo only)");
}
