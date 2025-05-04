if(document.querySelector("html").dataset.darkreaderScheme){
	document.body.innerHTML="<div class=\"boite-dr\"></div>"+document.body.innerHTML
  var boite=document.querySelector(".boite-dr");
	boite.style.position="absolute";
	boite.style.width="100%";
	boite.style.height="100%";
	boite.style.background="#f00";
	boite.style.color="#fff";
	document.body.append(boite);
	var titre=document.createElement("h1");
	var msg=document.createElement("p");
	titre.innerHTML="Dark Reader détecté"
	msg.innerHTML="Le site n'est pas bien stylisé à cause de Dark Reader.\nVeuillez le désactiver et recharger la page (Cmd/Ctrl + R) pour continuer sur le site /!\\";
	boite.appendChild(titre);
	boite.appendChild(msg);
}
