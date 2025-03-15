var event.select=new Object();
event.select=(str)=>{
  return document.querySelector(str);
}

if(sessionStorage.getItem("IDUSER")===null){
  window.location.href="login/";
}else{
  document.querySelector(".root").innerHTML=`<ul class="header-options">
  <li class="img-in-header">
    <img src="/home/paramDkong/images/petitesIcones/UJplus.png">
  </li>
  <li class="deconnexion-button">
    Déconnexion
    <ul class="deconnexion-options-menu" hidden>
      <li class="partial-deconnexion">Se déconnecter</li>
      <li class="complete-deconnexion">Se déconnecter sans rien laisser sur le navigateur</li>
    </ul>
  </li>
  </ul>`;
  event.select("deconnexion-options").addEventListener("click", ()=>{
    event.select("deconnexion-options-menu").hidden=!event.select("deconnexion-options-menu").hidden;
  });
  event.select("partial-deconnexion").addEventListener("click", ()=>{
    sessionStorage.removeItem("IDUSER");
    window.location.reload();
  });
  event.select("complete-deconnexion").addEventListener("click", ()=>{
    sessionStorage.removeItem("IDUSER");
    localStorage.removeItem("UJ+data");
    window.location.reload();
  });
}
