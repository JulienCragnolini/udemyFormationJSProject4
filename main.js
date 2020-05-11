// Etape 1 - Sélectionner nos éléments
let input = document.querySelector('#prix');
let error = document.querySelector('small');
let form = document.querySelector('#formulaire');

// Etape 2 - Cacher l'erreur
error.style.display = 'none';

// Etape 3 - Générer un nombre aléatoire
let nbrAleatoire = Math.floor(Math.random() * Math.floor(1000));
let coups = 0;
let nbrChoisi;

// Etape 6 - Créer la fonction vérifier
function verifier(nbr) {
    let instruction = document.createElement('div');

    if (nbr < nbrAleatoire) {
        instruction.textContent = `#${coups} (${nbr}) C'est plus !`;
        instruction.className = 'instruction plus';
    } else if (nbr > nbrAleatoire) {
        instruction.textContent = `#${coups} (${nbr}) C'est moins !`;
        instruction.className = 'instruction moins';
    } else {
        instruction.textContent = `#${coups} (${nbr}) C'est gagné !`;
        instruction.className = 'instruction fini';
        input.disabled = true; //bloqué le formulaire
    }

    document.querySelector('#instructions').prepend(instruction);
}

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener('keyup', () => {
    if (isNaN(input.value)) {
        error.style.display = 'block';
    } else {
        error.style.display = 'none';
    }
})

// Etape 5 - Agir à l'envoi du formulaire
form.addEventListener('submit', (e) => {
    e.preventDefault(); // annule l'événement par défaut
    
    if (isNaN(input.value) || input.value == '') {
        input.style.borderColor = 'red';
    } else {
        coups++;
        input.style.borderColor = 'silver';
        nbrChoisi = input.value;
        input.value = ''; // Vider le champs
        verifier(nbrChoisi);
    }
})

