// Créer un tableau de mots
var mots = [
	"javascript",
	"singe",
	"extraordinaire",
	"pancake",
	"patate",
	"robot",
	"jeu",
	"intergouvernementalisationnelement"
]

// Choisir un mot secret au hasard
var motSecret = mots[Math.floor(Math.random() * mots.length)];
var essais=11;

var alphabet = {
	a: false,
	b: false,
	c: false,
	d: false,
	e: false,
	f: false,
	g: false,
	h: false,
	i: false,
	j: false,
	k: false,
	l: false,
	m: false,
	n: false,
	o: false,
	p: false,
	q: false,
	r: false,
	s: false,
	t: false,
	u: false,
	v: false,
	w: false,
	x: false,
	y: false,
	z: false
}

// Créer le tableau de réponses
var tableauReponses = [];
for (var i = 0; i < motSecret.length; i++) {
	tableauReponses[i]="_";
}

var win=true;

var nombreLettresManquantes = motSecret.length;

// La boucle du jeu
while (nombreLettresManquantes > 0) {
	// Afficher la progression du joueur
	alert(tableauReponses.join(" "));
	// Récupérer un essai du joueur
	var reponse = prompt("Devine une lettre, ou clique sur Annuler pour quitter la partie.");
	if (reponse !== null) {
		reponse=reponse.toLowerCase(); // Transcription en minuscule
	}
	if (reponse === null) {
		// Quitter la boucle du jeu
		if (confirm("Quitter ?")) {
			win=NaN;
			break;
		}
	} else if (reponse.length !== 1) {
		alert("Tu ne dois saisir qu'une seule lettre.");
	} else {
		// Mettre à jour l'état de la partie
		if (!alphabet[reponse]) {
			for (var j = 0; j < motSecret.length; j++) {
				if (motSecret[j] === reponse) {
					tableauReponses[j] = reponse;
					nombreLettresManquantes--;
				}
			}
			alphabet[reponse]=true;
			essais--;
		} else {
			alert("La lettre a déjà été mentionnée.")
		}
	}

	if (!essais>0) {
		win=false;
		break;
	}
	// Fin de la boucle de jeu
}

if (win == true) {
	// Afficher le mot secret et féliciter le joueur gagnant
	alert(tableauReponses.join(" "));
	alert("Félicitations ! Le mot secret est bien " + motSecret+" !");
} else if (win == false){
	// Lui afficher le message "Perdu"
	alert(tableauReponses.join(" "));
	alert("Oups ! Tu as utilisé tous tes essais, le mot était " + motSecret+"...");
}
