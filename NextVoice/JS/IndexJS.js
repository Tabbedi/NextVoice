const speakers = [
    { name: "Ola Nordmann", img: "Bilder/Portrett/Portrett1.jpg", desc: "Ekspert på innovasjon" },
    { name: "Kari Nordmann", img: "Bilder/Portrett/Portrett2.jpg", desc: "Leder og motivator" },
    { name: "Per Hansen", img: "Bilder/Portrett/Portrett3.jpg", desc: "Teknologientusiast" },
    { name: "Anne Olsen", img: "Bilder/Portrett/Portrett4.jpg", desc: "Forfatter og foredragsholder" },
    { name: "Jens Pettersen", img: "Bilder/Portrett/Portrett5.jpg", desc: "Markedsføringsekspert" },
    { name: "Elise Johansen", img: "Bilder/Portrett/Portrett6.jpg", desc: "HR og teamutvikling" },
    { name: "Marius Berg", img: "Bilder/Portrett/Portrett7.jpg", desc: "Økonom og analytiker" },
    { name: "Ingrid Solberg", img: "Bilder/Portrett/Portrett8.jpg", desc: "Bærekraft og miljø" },
    { name: "Thomas Dahl", img: "Bilder/Portrett/Portrett9.jpg", desc: "Strategi og ledelse" },
    { name: "Hanne Kristiansen", img: "Bilder/Portrett/Portrett10.jpg", desc: "Kultur og kommunikasjon" },
    { name: "Erik Nilsen", img: "Bilder/Portrett/Portrett11.jpg", desc: "IT-sikkerhet" },
    { name: "Erik Nilsen", img: "Bilder/Portrett/Portrett11.jpg", desc: "IT-sikkerhet" },
    
];

let index = 0;
const itemsPerPage = 4;
const totalSlides = Math.ceil(speakers.length / itemsPerPage);
const carouselInner = document.getElementById("carouselInner");

function renderCarousel() {
    carouselInner.innerHTML = "";
    carouselInner.style.transform = `translateX(-${index * 100}%)`;
    for (const speaker of speakers) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${speaker.img}" alt="${speaker.name}">
            <h3>${speaker.name}</h3>
            <p>${speaker.desc}</p>
        `;
        carouselInner.appendChild(card);
    }
}

function nextSlide() {
    index = (index + 1) % totalSlides;
    renderCarousel();
}

function prevSlide() {
    index = (index - 1 + totalSlides) % totalSlides;
    renderCarousel();
}

renderCarousel();