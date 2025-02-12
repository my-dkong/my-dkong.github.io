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
var canvas=document.querySelector("canvas");
var ctx=canvas.getContext("2d");

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

var cercle=(x, y, rayon, cerclePlein, epaisseur, couleur)=>{
	if (cerclePlein) {
		ctx.strokeStyle=couleur;
	} else {
		ctx.fillStyle=couleur;
	}
	ctx.lineWidth = epaisseur;
	ctx.beginPath();
	ctx.arc(x, y, rayon, 0, Math.PI * 2, false);
	if (cerclePlein) {
		ctx.fill();
	} else {
		ctx.stroke();
	}
}

var membres=[
	()=>{
		cercle(250, 225, 20, true, 5, "#000");
	},
	()=>{
		ctx.strokeStyle="#000";
		ctx.lineWidth=5;
		ctx.beginPath();
		ctx.moveTo(250, 225);
		ctx.lineTo(250, 275);
		ctx.stroke();
	},
	()=>{
		ctx.strokeStyle="#000";
		ctx.lineWidth=5;
		ctx.beginPath();
		ctx.moveTo(250, 245);
		ctx.lineTo(230, 230);
	},
	()=>{
		ctx.strokeStyle="#000";
		ctx.lineWidth=5;
		ctx.beginPath();
		ctx.moveTo(250, 245);
		ctx.lineTo(230, 260);
	},
	()=>{
		ctx.strokeStyle="#000";
		ctx.lineWidth=5;
		ctx.beginPath();
		ctx.moveTo(250, 255);
		ctx.lineTo(270, 260);
	},
	()=>{
		ctx.strokeStyle="#000";
		ctx.lineWidth=5;
		ctx.beginPath();
		ctx.moveTo(250, 255);
		ctx.lineTo(230, 260)
	}
]

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
