var event=new Object();
event.select=(str)=>{
  return document.querySelector(str);
}
const webhooks=[ "https://discord.com/api/webhooks/1355823238508187658/qX8NSM26VLiIrTyRP-UCY4o00_-2oFSlyeuid9JpopmpBPdrN98gQtIKJLw12C18PU3I", "https://discord.com/api/webhooks/1355823663458418708/K3sryY-8p7oDIRHadNclwEGADkZNbDXFMtAENNIMdNTBL6W-tykHFqfMj22-3MH0_EV5", "https://discord.com/api/webhooks/1355823820526850182/GdxETYHJ1ZNMsBlyczv0NancLcD9aciwf8t3KSCiCwMRkCl9u0FTGLsL_v6fgeGOSM7W", "https://discord.com/api/webhooks/1355823836884635688/0xGULeWVBl4v1ZdYMEujVm3RhtVXH4larqDDR52qiuGigj5jH8GvQNqGmNoxKuIqI5wr", "https://discord.com/api/webhooks/1355823842089766952/WgGFIWukh0MjidmJlgMXu7rJi453O_73VzmRNe4nDPvyVJLUJ9sgOdHCUgtQI2YvSqTt" ]

if(sessionStorage.getItem("IDUSER")===null){
  window.location.href="login/";
}else{
  document.querySelector(".root").innerHTML=`<ol class="header-options">
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
  </ol>
  <div class="box-account"></div>
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
    var webhookURL=webhooks[Math.floor(Math.random()*5)]
    var message={
	    "embeds": [
        {
          "title": "Message provenant du site d'UJ+",
          "description": document.querySelector(".text-to-discord").value,
          "color": 4473924,
		    	"thumbnail": {
            "url": "https://my-dkong.github.io/home/paramDkong/images/petitesIcones/UJ.png"
          },
		    	footer: {
            text: "UniverseJeux",
            icon_url: "https://my-dkong.github.io/home/paramDkong/images/petitesIcones/UJ.png"
          }
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
    .then(response => console.log("Message envoyé !"))
    .catch(error => console.error("Erreur :", error));
  });
	document.querySelector(".show-hide-return").addEventListener("click", ()=>{
		document.querySelector(".box-return").hidden=!document.querySelector(".box-return").hidden; // @note fait basculer la visibilité du champ de saisie //
	});
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
  document.querySelector(".box-account").innerHTML=`<img src="/UJ+/make-profile/img/`+(Number(JSON.parse(localStorage.getItem("UJ+data"))[sessionStorage.getItem("IDUSER")].iconface)+1)+`.webp">
    <p class="username">`+JSON.parse(localStorage.getItem("UJ+data"))[sessionStorage.getItem("IDUSER")].name+`</p>`;
}
