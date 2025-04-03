import { hymns } from './hymns.js';

let form = document.querySelector('form');
let input = document.getElementById('input');

displayHymn(hymns[0]);

// console.log(hymns);

form.addEventListener('submit', (e) => {
    e.preventDefault()

    console.log('linked')


})

function displayHymn(hymn) {
    let hymnContainer = document.getElementById('hymn-area');
    let hymnTitle = document.getElementById('hymn-title');
    let hymnName = document.getElementById('hymn-name');

    // Clear previous content
    hymnContainer.innerHTML = '';
    hymnContainer.innerHTML = `
        <p class="hymn-title" id="hymn-title">${hymn.title}</p>
    `;

    // Create hymn content
    hymn.lyrics.forEach(stanza => {
        let stanzaDiv = document.createElement('div'); // Create a div for each stanza
        stanzaDiv.className = 'verse';

        stanza.forEach(line => {
            let p = document.createElement('p'); // Create a paragraph for each line
            p.textContent = line;
            stanzaDiv.appendChild(p);
        });

        hymnContainer.appendChild(stanzaDiv); // Append each stanza div to the main container
    });

    hymnName.textContent = `Hymn ${hymn.number}`;
}
