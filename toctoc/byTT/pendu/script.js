// @bugfix arrêt de la boucle infinie while //

var event=new Object();
var okClicked=false;
var annulerClicked=false;
event.select=(str)=>{
	return document.querySelector(str);
}
event.select(".ok").addEventListener("click", ()=>{
	okClicked=true;
})
event.select(".ok").addEventListener("mouseup", ()=>{
	okClicked=false;
})
event.select(".annuler").addEventListener("click", ()=>{
	annulerClicked=true;
})
event.select(".annuler").addEventListener("mouseup", ()=>{
	annulerClicked=false;
})

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

var delay=(milliseconds)=>{
	const date = Date.now();
	var currentDate;
	do{
		currentDate = Date.now();
	}while(currentDate - date < milliseconds);
}

// Choisir un mot secret au hasard
var motSecret = mots[Math.floor(Math.random() * mots.length)];
var essais=6;
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
	function(){
		cercle(250, 225, 20, true, 5, "#000");
	},
	function(){
		ctx.strokeStyle="#000";
		ctx.lineWidth=5;
		ctx.beginPath();
		ctx.moveTo(250, 225);
		ctx.lineTo(250, 275);
		ctx.stroke();
	},
	function(){
		ctx.strokeStyle="#000";
		ctx.lineWidth=5;
		ctx.beginPath();
		ctx.moveTo(250, 265);
		ctx.lineTo(225, 230);
		ctx.stroke();
	},
	function(){
		ctx.strokeStyle="#000";
		ctx.lineWidth=5;
		ctx.beginPath();
		ctx.moveTo(250, 265);
		ctx.lineTo(275, 230);
		ctx.stroke();
	},
	function(){
		ctx.strokeStyle="#000";
		ctx.lineWidth=5;
		ctx.beginPath();
		ctx.moveTo(250, 275);
		ctx.lineTo(230, 295);
		ctx.stroke();
	},
	function(){
		ctx.strokeStyle="#000";
		ctx.lineWidth=5;
		ctx.beginPath();
		ctx.moveTo(250, 275);
		ctx.lineTo(270, 295);
		ctx.stroke();
	}
]

event.montrer=(elem)=>{
	event.select(elem).hidden=false;
}
event.cacher=(elem)=>{
	event.select(elem).hidden="";
}
event.alert=(str, tt)=>{
	event.select(".absolute").hidden=false;
	event.select(".title").innerHTML=tt;
	event.select(".paragraph").innerHTML=str;
	event.cacher(".letter");
	event.cacher(".annuler");
	event.montrer(".ok");
	while(true){
		if(okClicked){
			event.select(".absolute").hidden="";
			return undefined;
		}
	}
}
event.confirm=(str, tt)=>{
	event.select(".absolute").hidden=false;
	event.select(".title").innerHTML=tt;
	event.select(".paragraph").innerHTML=str;
	event.cacher(".letter");
	event.montrer(".annuler");
	event.montrer(".ok");
	while(true){
		if(okClicked){
			event.select(".absolute").hidden="";
			return true;
		}
		
		if(annulerClicked){
			event.select(".absolute").hidden="";
			return false;
		}
	}
}
event.prompt=(str, tt)=>{
	event.select(".absolute").hidden=false;
	event.select(".title").innerHTML=tt;
	event.select(".paragraph").innerHTML=str;
	event.montrer(".letter");
	event.montrer(".annuler");
	event.montrer(".ok");
	while(true){
		if(okClicked){
			event.select(".absolute").hidden="";
			return event.select(".letter").value;
		}
		
		if(annulerClicked){
			event.select(".absolute").hidden="";
			return null;
		}
	}
}

// Créer le tableau de réponses
var tableauReponses = [];
for (var i = 0; i < motSecret.length; i++) {
	tableauReponses[i]="_";
}

var win=true;
var nombreLettresManquantes = motSecret.length;

/**/// La boucle du jeu
/**/ while (nombreLettresManquantes > 0) {
/**/ 	// Afficher la progression du joueur
/**/ 	event.alert(tableauReponses.join(" "), "Tableau :");
/**/ 	// Récupérer un essai du joueur
/**/ 	var reponse = event.prompt("Devine une lettre, ou clique sur Annuler pour quitter la partie.", "Une lettre plize 🙏 !!!");
/**/ 	if (reponse !== null) {
/**/ 		reponse=reponse.toLowerCase(); // Transcription en minuscule
/**/ 	}
/**/   	if (reponse === null) {
/**/		// Quitter la boucle du jeu
/**/		if (event.confirm("Quitter ?", "Action requise 🤔 :")) {
/**/			win=NaN;
/**/			break;
/**/		}
/**/	} else if (reponse.length !== 1) {
/**/		event.alert("Tu ne dois saisir qu'une seule lettre.", "Oups...");
/**/	} else {
/**/		// Mettre à jour l'état de la partie
/**/		if (!alphabet[reponse]) {
/**/			var s=true;
/**/			for (var j = 0; j < motSecret.length; j++) {
/**/				if (motSecret[j] === reponse) {
/**/					tableauReponses[j] = reponse;
/**/					nombreLettresManquantes--;
/**/					s=false;
/**/				}
/**/			}
/**/			if (s=true) {
/**/				essais--;
/**/				membres[5-essais-1]();
/**/			}
/**/			alphabet[reponse]=true;
/**/		} else {
/**/			event.alert("La lettre a déjà été mentionnée.", "Oups...");
/**/		}
/**/	}
/**/
/**/	if (!essais>0) {
/**/		win=false;
/**/		break;
/**/	}
/**/	// Fin de la boucle de jeu
/**/}
/**/
/**/if (win == true) {
/**/	// Afficher le mot secret et féliciter le joueur gagnant
/**/	event.alert(tableauReponses.join(" "), "Tableau :");
/**/	event.alert("Félicitations ! Le mot secret est bien " + motSecret+" !", "Bravo 🥳 ! On reccomence 🥺 ?");
/**/} else if (win == false){
/**/	// Lui afficher le message "Perdu"
/**/	event.alert(tableauReponses.join(" "), "Tableau :");
/**/	event.alert("Oups ! Tu as utilisé tous tes essais, le mot était " + motSecret+"...", "Oups... 😭 On reccomence 🥺 ?");
/**/}
/**/
/**/// Fin du fichier.
