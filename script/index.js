import { hymns } from './hymns.js'; //import hymns from hymn.js


//select elememnts from DOM
let form = document.querySelector('form');
let input = document.getElementById('input');
let hymnContainer = document.getElementById('hymn-area');
let hymnTitle = document.getElementById('hymn-title');
let hymnName = document.getElementById('hymn-name');

//display hymn on PAGE LOAD
displayHymn(hymns[0]); // Display the first hymn by default


//SUBMIT EVENT search for hymn in hymn.js 
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let hymnNumber = parseInt(input.value.trim()); // Convert input to number

    // Find the hymn
    let hymn = hymns.find(h => h.number === hymnNumber);

    //checks if hymn exists in hymns.js
    if (hymn) {
        displayHymn(hymn);
    } else {
        hymnContainer.innerHTML = `<p class="error">Hymn ${hymnNumber} not found.</p>`;
        hymnName.textContent = "";
    }

    form.reset(); // clear input field

});


// function to display hymns from search or page load
function displayHymn(hymn) {
    hymnContainer.innerHTML = `
        <p class="hymn-title">${hymn.title}</p>
    `;

    hymn.lyrics.forEach(stanza => {
        let stanzaDiv = document.createElement('div');
        stanzaDiv.className = 'verse';

        stanza.forEach(line => {
            let p = document.createElement('p');
            p.textContent = line;
            stanzaDiv.appendChild(p);
        });

        hymnContainer.appendChild(stanzaDiv);
    });

    hymnName.textContent = `Hymn ${hymn.number}`;
}
