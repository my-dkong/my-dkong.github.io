var event=new Object();
event.select=(str)=>{
  return document.querySelector(str);
}
const webhook='https://discord.com/api/webhooks/1366735538710773810/rCcg84c4Y-dGRbLD0Ar8-kplM8RKUtQnFyDOTR4PoFWL4mZaeGgxz8tDBxNQApJpFFfw';

if(sessionStorage.getItem("IDUSER")===null){
  window.location.href="login/";
}else{
  document.querySelector(".root").innerHTML=`<div class="header-menu"><a class="link-uj link-in-header" href="//my-dkong.github.io/UJ" target="_blank">UJ</a><div class="link-in-header sous-menu-jeux">Jeux</div><div class="links-sous-menu link-in-header" style=""><a href="choose-level-of-gd" class="jeu-sous-menu">Geometry Dash</a><a href="gd/?l=6" class="jeu-sous-menu">Geometry Dash Subzero</a><a href="gd/?l=7" class="jeu-sous-menu">Geometry Dash Meltdown</a></div><a class="link-in-header" href="//discord.gg/MS2qEXEQB6" target="_blank">Discord</a><div class="menu link-in-header">Menu</div><div class="box-account"></div></div>
  <h1>Geometry Dash</h1>
  <div class="flexbox">
    <a href="choose-level-of-gd">
      <img src="gd-normal.png"><br>
      Geometry Dash
    </a>
    <a href="gd/?l=6">
      <img src="gd-subzero.png"><br>
      Geometry Dash Subzero
    </a>
    <a href="gd/?l=7">
      <img src="gd-meltdown.png"><br>
      Geometry Dash Meltdown
    </a>
  </div>
  <a class="show-hide-return" href="javascript:void(0)">Faire un retour</a>
  <div class="box-return" hidden>
  <textarea class="text-to-discord">### Type de retour :

### Description :

### Comportement attendu :

### Étapes pour reproduire :

### Navigateur/OS/Appareil :
</textarea><br>
<p>Ce contenu sera publié sur le Discord communautaire<p><br><a class="button-text-to-discord" href="javascript:void(0)">Envoyer</a></div>`;
  document.querySelector(".button-text-to-discord").addEventListener("click", ()=>{
    const webhookURL=webhook;
    var message={
	    "embeds": [
        {
          "title": "Message provenant du site d'UJ+",
          "description": document.querySelector(".text-to-discord").value,
          "color": 4473924,
		    	thumbnail: {
            "url": "https://my-dkong.github.io/home/paramDkong/images/petitesIcones/UJplus.png"
          },
		    	footer: {
            text: "Envoyé par "+JSON.parse(localStorage.getItem("UJ+data"))[sessionStorage.getItem("IDUSER")].name,
            icon_url: "https://my-dkong.github.io/UJ+/make-profile/img/"+(Number(JSON.parse(localStorage.getItem("UJ+data"))[sessionStorage.getItem("IDUSER")].iconface)+1)+".webp"
          },
			
        }
      ]
    }
    fetch(webhookURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(message)
    })
    .then(response => {alert("Message envoyé !");document.querySelector(".text-to-discord").value=''})
    .catch(error => {alert("Erreur :"+error)});
  });
	document.querySelector(".show-hide-return").addEventListener("click", ()=>{
		document.querySelector(".box-return").hidden=!document.querySelector(".box-return").hidden; // @note fait basculer la visibilité du champ de saisie //
	});
  document.querySelector(".box-account").innerHTML=`<img src="/UJ+/make-profile/img/`+(Number(JSON.parse(localStorage.getItem("UJ+data"))[sessionStorage.getItem("IDUSER")].iconface)+1)+`.webp">
    <p class="username">`+JSON.parse(localStorage.getItem("UJ+data"))[sessionStorage.getItem("IDUSER")].name+`</p>
    <ol class="header-options">
  <li class="img-in-header">
    <img src="/home/paramDkong/images/petitesIcones/UJplus.png">
  </li>
  <li class="deconnexion-button">
    Déconnexion
    <ol class="deconnexion-options-menu" hidden>
      <li class="partial-deconnexion">Se déconnecter</li>
      <li class="complete-deconnexion">Se déconnecter sans rien laisser sur le navigateur</li>
    </ol>
  </li>
  </ol>`;
  document.querySelector(".deconnexion-button").addEventListener("click", ()=>{
    document.querySelector(".deconnexion-options-menu").hidden=!document.querySelector(".deconnexion-options-menu").hidden;
  });
  document.querySelector(".partial-deconnexion").addEventListener("click", ()=>{
    sessionStorage.removeItem("IDUSER");
    window.location.reload();
  });
  document.querySelector(".complete-deconnexion").addEventListener("click", ()=>{
    sessionStorage.removeItem("IDUSER");
    localStorage.removeItem("UJ+data");
    window.location.reload();
  });
	
  event.select(".menu").addEventListener("click", (e)=>{
  	e.preventDefault();
		if(event.select(".link-in-header").style.height==="0px"){
  	  for(var i=0;i<3;i++){
  	    document.querySelectorAll(".link-in-header")[i].style.height="";
  	    document.querySelectorAll(".link-in-header")[i].style.width="";
  	    document.querySelectorAll(".link-in-header")[i].style.opacity="";
  	    document.querySelectorAll(".link-in-header")[i].style.margin="";
  	    document.querySelectorAll(".link-in-header")[i].style.padding="";
  	  }
  	}else{
  	  for(var i=0;i<3;i++){
    	  document.querySelectorAll(".link-in-header")[i].style.height="0";
    	  document.querySelectorAll(".link-in-header")[i].style.width="0";
      	document.querySelectorAll(".link-in-header")[i].style.opacity="0";
      	document.querySelectorAll(".link-in-header")[i].style.margin="0";
      	document.querySelectorAll(".link-in-header")[i].style.padding="0";
    	}
  	}
	});
	if(event.select("html").scrollWidth<=491){
		for(var i=0;i<3;i++){
      document.querySelectorAll(".link-in-header")[i].style.height="0";
      document.querySelectorAll(".link-in-header")[i].style.width="0";
      document.querySelectorAll(".link-in-header")[i].style.opacity="0";
      document.querySelectorAll(".link-in-header")[i].style.margin="0";
      document.querySelectorAll(".link-in-header")[i].style.padding="0";
    }
		event.select(".sous-menu-jeux").addEventListener("click", (e)=>{
    e.preventDefault();
    if(event.select(".links-sous-menu").style.height==="0px"){
    	event.select(".links-sous-menu").style.height="";
    	event.select(".links-sous-menu").style.width="";
    	event.select(".links-sous-menu").style.opacity="";
    	event.select(".links-sous-menu").style.margin="";
    	event.select(".links-sous-menu").style.padding="";
    }else{
      event.select(".links-sous-menu").style.height="0";
      event.select(".links-sous-menu").style.width="0";
      event.select(".links-sous-menu").style.opacity="0";
      event.select(".links-sous-menu").style.margin="0";
      event.select(".links-sous-menu").style.padding="0";
    }
});
	}
}
