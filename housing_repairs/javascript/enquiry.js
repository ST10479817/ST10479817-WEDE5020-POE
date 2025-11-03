
// Enquiry page  
const params = new URLSearchParams(window.location.search);
const service = params.get('service');
if (service) {
  document.getElementById('enquiryType').value = service;
}

// Error handeling
document.getElementById('enquiryForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const name = document.getElementById('fullName').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const type = document.getElementById('enquiryType').value;
  const message = document.getElementById('message').value.trim();
  const response = document.getElementById('responseMessage');

  if (!name || !email || !phone || !type || !message) {
    response.innerHTML = "<p style='color:red;'>⚠️ Please fill in all required fields correctly.</p>";
    return;
  }

  response.innerHTML = `<p style='color:green;'>✅ Thank you, ${name}! Your <strong>${type}</strong> enquiry has been received. We’ll contact you shortly regarding ${type === "plumbing" ? "pricing and availability" : "your request"}.</p>`;
  document.getElementById('enquiryForm').reset();
});



