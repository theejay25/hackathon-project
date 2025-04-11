import { hymns } from "./hymns.js";

const form = document.getElementById("search-form");
const input = document.getElementById("input");
const hymnContainer = document.getElementById("hymn-area");
const hymnName = document.getElementById("hymn-name");
const hymnListContainer = document.getElementById("hymn-list-container");
const overlay = document.getElementById("hymn-overlay");
const closeBtn = document.getElementById("close-btn");

// Show the overlay with selected hymn
function displayHymn(hymn) {
  hymnContainer.innerHTML = "";
  hymnName.textContent = `Hymn ${hymn.number}: ${hymn.title}`;

  hymn.lyrics.forEach((stanza) => {
    const stanzaDiv = document.createElement("div");
    stanzaDiv.className = "verse";

    stanza.forEach((line) => {
      const p = document.createElement("p");
      p.textContent = line;
      stanzaDiv.appendChild(p);
    });

    hymnContainer.appendChild(stanzaDiv);
  });

  overlay.style.display = "flex";
}

// Generate list of titles
function populateHymnList() {
  hymnListContainer.innerHTML = "";
  hymns.forEach((hymn) => {
    const div = document.createElement("div");
    div.className = "hymn-title-item";
    div.textContent = `${hymn.number}. ${hymn.title}`;
    div.addEventListener("click", () => displayHymn(hymn));
    hymnListContainer.appendChild(div);
  });
}

// Handle search
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = input.value.trim().toLowerCase();
  const hymn = hymns.find((h) => h.title.toLowerCase() === query);

  if (hymn) {
    displayHymn(hymn);
  } else {
    alert(`Hymn "${query}" not found`);
  }
  input.value = "";
});

// Close overlay
closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
});

// Init
populateHymnList();
