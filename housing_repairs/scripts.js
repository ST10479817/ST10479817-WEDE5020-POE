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


//On the Contact Page
const contactForm = document.getElementById("contactForm");
const feedback = document.getElementById("formFeedback");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Collect data
  const formData = {
    fullName: contactForm.fullName.value.trim(),
    email: contactForm.email.value.trim(),
    phone: contactForm.phone.value.trim(),
    location: contactForm.location.value.trim(),
    messageType: contactForm.messageType.value,
    message: contactForm.message.value.trim()
  };

  // Validation Error Handling
  if (formData.fullName.length < 3) {
    return showError("Full name must be at least 3 characters long.");
  }
  if (!validateEmail(formData.email)) {
    return showError("Please enter a valid email address.");
  }
  if (!/^[0-9]{10}$/.test(formData.phone)) {
    return showError("Phone number must be 10 digits.");
  }

  if (formData.message.length < 10) {
    return showError("Message must be at least 10 characters long.");
  }

  setTimeout(() => {
    feedback.style.color = "green";
    feedback.textContent = "✅ Your message has been received! We will get back to you shortly.";
    contactForm.reset();
  }, 500);

});

function showError(msg) {
  feedback.style.color = "red";
  feedback.textContent = msg;
}

function validateEmail(email) {
  return /^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email);
}

// Initialize the map
var map = L.map('branchesMap').setView([-28.0, 28.5], 6);

// Add OpenStreetMap layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Define branches
const branches = {
  jhb: {
    name: "Johannesburg (Head Office)",
    coords: [-26.0517, 28.0239],
    details: "45 Main Road, Sandton, Johannesburg<br>083 555 6743<br>Mon-Fri: 08:00-17:00"
  },
  pta: {
    name: "Pretoria (Branch Office)",
    coords: [-25.7473, 28.1767],
    details: "17 Church Street, Arcadia, Pretoria<br>054 555 3704<br>Mon-Fri: 08:00-17:00"
  },
  dbn: {
    name: "Durban (Branch Office)",
    coords: [-29.8356, 31.0158],
    details: "89 Florida Road, Morningside, Durban<br>085 555 5427<br>Mon-Fri: 08:00-17:00"
  }
};

// Add markers and popups
const markers = {};
for (const key in branches) {
  const branch = branches[key];
  const marker = L.marker(branch.coords)
    .addTo(map)
    .bindPopup(`<b>${branch.name}</b><br>${branch.details}`);
  markers[key] = marker;
}

// Fit map to all markers
const group = new L.featureGroup(Object.values(markers));
map.fitBounds(group.getBounds().pad(0.3));

// Function to zoom to a specific branch
function focusBranch(branchKey) {
  const branch = branches[branchKey];
  const marker = markers[branchKey];

  map.setView(branch.coords, 13, { animate: true }); // zoom in
  marker.openPopup();

  // Update info box
  document.getElementById('branchInfo').innerHTML = `
    <h3>${branch.name}</h3>
    <p>${branch.details}</p>
  `;
}



