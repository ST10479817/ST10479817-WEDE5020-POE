//Hamburger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-menu a").forEach(link => 
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
 
//On Homepage
function scrollComments(direction) {
  const container = document.querySelector('.commentsGrid');
  const scrollAmount = 320; 
  container.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}


