// This is the for the logo hoping
document.addEventListener("DOMContentLoaded", () => {
  const logos = document.querySelectorAll(".logoImage img");

  function randomHop() {
    logos.forEach(logo => {
      // Making it so that random logos hop
      if (Math.random() < 0.5) {
        logo.classList.add("hop");

        setTimeout(() => {
          logo.classList.remove("hop");
        }, 500);
      }
    });

    // Repeating every 2 seconds
    const nextHop = Math.random() * 1500 + 1000;
    setTimeout(randomHop, nextHop);
  }

  randomHop();
});