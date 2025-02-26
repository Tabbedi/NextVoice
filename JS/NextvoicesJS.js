const profiles = [
    { name: "Ola Nordmann", category: "Ledelse og teamutvikling", image: "../Bilder/Portrett/Portrett1.jpg", description: "Erfaren leder og foredragsholder." },
    { name: "Kari Hansen", category: "Teknologi og innovasjon", image: "../Bilder/Portrett/Portrett2.jpg", description: "Ekspert på AI og digitalisering." },
    { name: "Per Olsen", category: "Markedsføringstrender", image: "../Bilder/Portrett/Portrett3.jpg", description: "Jobber med digitale kampanjer." },
    { name: "Egil Roald", category: "Ledelse og teamutvikling", image: "../Bilder/Portrett/Portrett4.jpg", description: "Erfaren leder og foredragsholder." },
    { name: "Ponti Python", category: "Teknologi og innovasjon", image: "../Bilder/Portrett/Portrett5.jpg", description: "Ekspert på AI og digitalisering." },
    { name: "Hada Egeberg", category: "Markedsføringstrender", image: "../Bilder/Portrett/Portrett6.jpg", description: "Jobber med digitale kampanjer." },
];

// Last inn alle profiler ved start
document.addEventListener("DOMContentLoaded", loadAllProfiles);

function loadAllProfiles() {
    const allProfilesContainer = document.getElementById("all-profiles");
    allProfilesContainer.innerHTML = "";
    profiles.forEach(profile => {
        const card = createProfileCard(profile);
        allProfilesContainer.appendChild(card);
    });
}

// Opprett kort for en profil
function createProfileCard(profile) {
    const card = document.createElement("div");
    card.classList.add("result-card");
    card.innerHTML = `
        <img src="${profile.image}" alt="${profile.name}">
        <h3>${profile.name}</h3>
        <p>${profile.description}</p>
        <span class="category-badge">${profile.category}</span>
    `;
    return card;
}

// Håndter søk via input eller knapp
function searchProfiles() {
    const searchInput = document.getElementById("main-search").value.toLowerCase();
    const selectedCategory = document.querySelector(".category.selected")?.textContent || null;
    const searchResultsContainer = document.getElementById("search-results");

    searchResultsContainer.innerHTML = "";

    const filteredProfiles = profiles.filter(profile => {
        const matchesSearch = profile.name.toLowerCase().includes(searchInput) || profile.description.toLowerCase().includes(searchInput);
        const matchesCategory = selectedCategory ? profile.category === selectedCategory : true;
        return matchesSearch && matchesCategory;
    });

    if (filteredProfiles.length > 0) {
        filteredProfiles.forEach(profile => {
            searchResultsContainer.appendChild(createProfileCard(profile));
        });
    } else {
        searchResultsContainer.innerHTML = "<p>Ingen resultater funnet.</p>";
    }
}

// Kjør søk når Enter trykkes i inputfeltet
document.getElementById("main-search").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        searchProfiles();
    }
});

// Kjør søk når søkeknappen klikkes
document.querySelector(".search-container button").addEventListener("click", searchProfiles);

// Velg kategori og oppdater søk
function selectCategory(button) {
    document.querySelectorAll(".category").forEach(btn => btn.classList.remove("selected"));
    button.classList.add("selected");
    searchProfiles();
}


function searchProfiles() {
    const searchInput = document.getElementById("main-search").value.trim().toLowerCase();
    const searchResultsContainer = document.getElementById("search-results");
    searchResultsContainer.innerHTML = ""; // Tøm søkeresultatene

    const resultMessageContainer = document.createElement("div");
    resultMessageContainer.classList.add("result-message");

    if (searchInput === "") {
        // Hvis søkefeltet er tomt, vises en melding for å oppfordre til å skrive noe
        resultMessageContainer.innerHTML = "<h2>Vennligst skriv inn et søkeord.</h2>";
        searchResultsContainer.appendChild(resultMessageContainer);
        return;
    }

    const filteredProfiles = profiles.filter(profile =>
        profile.name.toLowerCase().includes(searchInput) ||
        profile.category.toLowerCase().includes(searchInput) ||
        profile.description.toLowerCase().includes(searchInput)
    );

    if (filteredProfiles.length === 0) {
        // Ingen resultater
        resultMessageContainer.innerHTML = "<h2>Ingen resultater funnet.</h2>";
    } else {
        // Resultater funnet
        resultMessageContainer.innerHTML = `<h2>Resultater (${filteredProfiles.length})</h2>`;
        // Legg til de filtrerte resultatene som kort
        filteredProfiles.forEach(profile => {
            const card = createProfileCard(profile);
            searchResultsContainer.appendChild(card);
        });
    }

    // Legg resultatmeldingen til searchResultsContainer før profilene
    searchResultsContainer.insertBefore(resultMessageContainer, searchResultsContainer.firstChild);
}
