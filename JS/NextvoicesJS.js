const profiles = [
    { 
        name: "Ola Nordmann", 
        category: "Ledelse og teamutvikling", 
        image: "../Bilder/Portrett/Portrett1.jpg", 
        description: "Erfaren leder og foredragsholder.", 
        link: "../HTML/ProfilDefault.html"
    },
    { 
        name: "Kari Hansen", 
        category: "Teknologi og innovasjon", 
        image: "../Bilder/Portrett/Portrett2.jpg", 
        description: "Ekspert på AI og digitalisering.", 
        link: "../HTML/ProfilDefault.html"
    },
    { 
        name: "Per Olsen", 
        category: "Markedsføringstrender", 
        image: "../Bilder/Portrett/Portrett3.jpg", 
        description: "Jobber med digitale kampanjer.", 
        link: "../HTML/ProfilDefault.html"
    },
    { 
        name: "Gert Trude", 
        category: "Bærekraft og sosialt ansvar", 
        image: "../Bilder/Portrett/Portrett4.jpg", 
        description: "Erfaren leder og foredragsholder.", 
        link: "../HTML/ProfilDefault.html"
    },
    { 
        name: "Helly Hansen", 
        category: "DJ", 
        image: "../Bilder/Portrett/Portrett5.jpg", 
        description: "Ekspert på AI og digitalisering.", 
        link: "../HTML/ProfilDefault.html"
    },
    { 
        name: "Kim Roger", 
        category: "Markedsføringstrender", 
        image: "../Bilder/Portrett/Portrett6.jpg", 
        description: "Jobber med digitale kampanjer.", 
        link: "../HTML/ProfilDefault.html"
    },
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

function createProfileCard(profile) {
    const card = document.createElement("a");
    card.classList.add("result-card");
    card.href = profile.link; // Gjør kortet klikkbart
    card.innerHTML = `
        <img src="${profile.image}" alt="${profile.name}">
        <h3>${profile.name}</h3>
        <p>${profile.description}</p>
        <span class="category-badge">${profile.category}</span>
    `;
    return card;
}


function searchProfiles() {
    const searchInput = document.getElementById("main-search").value.trim().toLowerCase();
    const selectedCategory = document.querySelector(".category.selected")?.textContent || null;
    const searchResultsContainer = document.getElementById("search-results");

    searchResultsContainer.innerHTML = ""; // Tøm søkeresultatene

    const resultMessageContainer = document.createElement("div");
    resultMessageContainer.classList.add("result-message");

    const filteredProfiles = profiles.filter(profile => {
        const matchesCategory = selectedCategory ? profile.category.toLowerCase() === selectedCategory.toLowerCase() : true;
        const matchesSearch = searchInput ? 
            (profile.name.toLowerCase().includes(searchInput) || profile.description.toLowerCase().includes(searchInput)) 
            : true;

        return matchesCategory && matchesSearch; // Må oppfylle begge kriterier
    });

    if (filteredProfiles.length === 0) {
        resultMessageContainer.innerHTML = "<h2>Ingen resultater funnet.</h2>";
    } else {
        resultMessageContainer.innerHTML = `<h2>Resultater (${filteredProfiles.length})</h2>`;
        filteredProfiles.forEach(profile => {
            const card = createProfileCard(profile);
            searchResultsContainer.appendChild(card);
        });
    }

    searchResultsContainer.insertBefore(resultMessageContainer, searchResultsContainer.firstChild);
}




// Kjør søk når Enter trykkes i inputfeltet
document.getElementById("main-search").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        searchProfiles();
    }
});

// Kjør søk når søkeknappen klikkes
document.querySelector(".search-container button").addEventListener("click", searchProfiles);

function selectCategory(button) {
    document.querySelectorAll(".category").forEach(btn => btn.classList.remove("selected"));
    button.classList.add("selected");
    searchProfiles(); // Sikrer at søket oppdateres når en kategori velges
}
