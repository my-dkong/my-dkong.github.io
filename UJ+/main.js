var event=new Object();
event.select=(str)=>{
  return document.querySelector(str);
}

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
  </div>`;
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
