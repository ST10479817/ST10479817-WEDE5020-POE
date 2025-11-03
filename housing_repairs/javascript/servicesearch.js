// Service Search Tab 
const searchInput = document.getElementById("serviceSearch");

searchInput.addEventListener("keyup", function() {
  const filter = searchInput.value.toLowerCase();
  const cards = document.querySelectorAll("#plumbingCard, #electricalCard, #maintenanceCard");

  cards.forEach(card => {
    let serviceBoxes = card.querySelectorAll(".serviceBoxes");
    let matchFound = false;

    serviceBoxes.forEach(box => {
      const text = box.innerText.toLowerCase();
      if (text.includes(filter)) {
        box.style.display = "";
        matchFound = true;
      } else {
        box.style.display = "none";
      }
    });

    // If no service matches in this card, hide the whole card
    if (!matchFound) {
      card.style.display = "none";
    } else {
      card.style.display = "";
    }
  });
});

