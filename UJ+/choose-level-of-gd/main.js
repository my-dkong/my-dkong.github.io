var event=new Object();
event.select=(str)=>{
  return document.querySelector(str);
}

/* @note vérifier si l'utilisateur est bien connecté et si oui afficher les différents niveaux */
if(sessionStorage.getItem("IDUSER")!==null){
  event.select(".root").innerHTML=`<h1>Choisissez votre niveau Geometry Dash</h1>
  <div class="levels"></div>`;
  for(var i=0;i<levels.content.levels.length;i++){
    event.select(".levels").innerHTML+='<div class="gd-box-level"><img class="gd-img'+i+'" src="img-gd/icon'+i+'.png" alt="Icône Geometry Dash n°'+(i+1)+'"></div>';
    event.select(".gd-img"+i).addEventListener("click", ()=>{
      window.location.href="/UJ+/gd?l="+(i+1)+"/";
    });
  }
}
