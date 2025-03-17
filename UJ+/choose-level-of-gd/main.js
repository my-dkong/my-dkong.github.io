var event=new Object();
event.select=(str)=>{
  return document.querySelector(str);
}

/* @note vérifier si l'utilisateur est bien connecté et si oui afficher les différents niveaux */
if(sessionStorage.getItem("IDUSER")!==null){
  event.select(".root").innerHTML=`<h1>Choisissez votre niveau Geometry Dash</h1>
  <div class="levels"></div>`;
  for(/// faire for() avec le document inséré dans index.html ///
}
