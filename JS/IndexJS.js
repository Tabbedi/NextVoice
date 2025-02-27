const carouselInner = document.getElementById("carouselInner");

const speakers = [
  { name: "Person 1", img: "Bilder/Portrett/Portrett1.jpg", desc: "Beskrivelse 1" },
  { name: "Person 2", img: "Bilder/Portrett/Portrett2.jpg", desc: "Beskrivelse 2" },
  { name: "Person 3", img: "Bilder/Portrett/Portrett3.jpg", desc: "Beskrivelse 3" },
  { name: "Person 4", img: "Bilder/Portrett/Portrett4.jpg", desc: "Beskrivelse 4" },
  { name: "Person 5", img: "Bilder/Portrett/Portrett5.jpg", desc: "Beskrivelse 5" },
  { name: "Person 6", img: "Bilder/Portrett/Portrett6.jpg", desc: "Beskrivelse 6" },
  { name: "Person 7", img: "Bilder/Portrett/Portrett7.jpg", desc: "Beskrivelse 7" },
  { name: "Person 8", img: "Bilder/Portrett/Portrett8.jpg", desc: "Beskrivelse 8" },
];

speakers.forEach((speaker) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <img src="${speaker.img}" alt="${speaker.name}">
    <h3>${speaker.name}</h3>
    <p>${speaker.desc}</p>
  `;
  carouselInner.appendChild(card);
});

let currentIndex = 0;

function nextSlide() {
  currentIndex++;
  if (currentIndex >= speakers.length - 3) { // -3 fordi vi viser 4 kort
    currentIndex = 0; // Gå tilbake til første kort
  }
  updateCarousel();
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = speakers.length - 4; // Gå til siste set av 4 kort
  }
  updateCarousel();
}

function updateCarousel() {
  const cardWidth = document.querySelector(".card").offsetWidth;
  carouselInner.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}




document.getElementById("searchForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from submitting normally
  const query = document.querySelector("input[name='query']").value; // Get the query input
  
  // Append the query to the URL
  const baseUrl = "HTML/Nextvoices.html";
  const newUrl = baseUrl + "?query=" + encodeURIComponent(query); // Append the query parameter
  window.location.href = newUrl; // Redirect to the URL with the query parameter
});