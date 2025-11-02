//  Gallery Page LightBox


const lightbox = document.getElementById('categoryLightbox');
const lbImage = document.getElementById('lbImage');
const lbCaption = document.getElementById('lbCaption');
const lbClose = document.getElementById('lbClose');
const lbPrev = document.getElementById('lbPrev');
const lbNext = document.getElementById('lbNext');

// Group images by category
const categories = {
  plumbing: document.querySelectorAll('#plumbingSection img'),
  electrical: document.querySelectorAll('#electricalSection img'),
  maintenance: document.querySelectorAll('#maintenanceSection img')
};

let currentCategory = null;
let currentIndex = 0;

// Open lightbox
Object.keys(categories).forEach(cat => {
  categories[cat].forEach((img, idx) => {
    img.addEventListener('click', () => {
      lightbox.classList.remove('hidden');
      lbImage.src = img.src;
      lbCaption.textContent = img.alt;
      currentCategory = cat;
      currentIndex = idx;
    });
  });
});

// Close lightbox
lbClose.addEventListener('click', () => lightbox.classList.add('hidden'));
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) lightbox.classList.add('hidden');
});

// Navigate lightbox
function showImage(index) {
  const imgs = categories[currentCategory];
  lbImage.src = imgs[index].src;
  lbCaption.textContent = imgs[index].alt;
}

lbPrev.addEventListener('click', () => {
  const imgs = categories[currentCategory];
  currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
  showImage(currentIndex);
});

lbNext.addEventListener('click', () => {
  const imgs = categories[currentCategory];
  currentIndex = (currentIndex + 1) % imgs.length;
  showImage(currentIndex);
});