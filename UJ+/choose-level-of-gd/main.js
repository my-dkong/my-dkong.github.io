var event=new Object();
event.select=(str)=>{
  return document.querySelector(str);
}

/* @note vérifier si l'utilisateur est bien connecté et si oui afficher les différents niveaux */
if(sessionStorage.getItem("IDUSER")!==null){
  event.select(".root").innerHTML=`<h1>Choisissez votre niveau Geometry Dash</h1>
  <div class="levels"></div>`;
  for(var i=0;i<levels.content.levels.length;i++){
    event.select(".levels").innerHTML+='<div class="gd-box-level"><img class="gd-img'+i+'" src="gd-icons/icon'+i+'.png" alt="Icône Geometry Dash n°'+(i+1)+'"><br>GD '+(levels.content.levels[getParameterByName("l")].levels.join(", ")+".")+'</div>';
  }
  event.select(".gd-img0").addEventListener("click", ()=>{
    window.location.href="/UJ+/gd?l=0";
  });
  event.select(".gd-img1").addEventListener("click", ()=>{
    window.location.href="/UJ+/gd?l=1";
  });
  event.select(".gd-img2").addEventListener("click", ()=>{
    window.location.href="/UJ+/gd?l=2";
  });
  event.select(".gd-img3").addEventListener("click", ()=>{
    window.location.href="/UJ+/gd?l=3";
  });
  event.select(".gd-img4").addEventListener("click", ()=>{
    window.location.href="/UJ+/gd?l=4";
  });
  event.select(".gd-img5").addEventListener("click", ()=>{
    window.location.href="/UJ+/gd?l=5";
  });
}
