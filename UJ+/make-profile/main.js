var event=new Object(), step=0, iconface=null, name=null;
event.select=(str)=>{
  return document.querySelector(str);
}
const nextstep=(st)=>{
  if(st===1){
    event.select(".root").innerHTML=`<h1>Étape 1 : Votre icône de profil</h1>
      <p class="subtitle">Choisissez votre icône de profil</p>
      <div class="img-pp"></div>
      <button class="next-step">Continuer</button>`;
    for(var i=0;i<6;i++){
      event.select(".img-pp").innerHTML+='<button class="button-icon'+i+'><img class="icon-pp icon'+i+'" src="img/icon'+i+'.png"></button>';
      event.select(".button-icon"+i).addEventListener("click", ()=>{
        iconface=String(i);
      });
    }
  }else if(st===2){
    event.select(".root").innerHTML=`<h1>Étape 2 : Votre nom</h1>
    <p class="subtitle">Entrez le nom par lequel vous voulez que l'on vous appelle</p>
    <input type="text" class="input-name">
    <button class="next-step">Continuer</button>`;
  }else if(st===3){
    name=event.select(".input-name").value;
    const dataLS=new Object();
    dataLS[sessionStorage.getItem("IDUSER")]=new Object();
    dataLS[sessionStorage.getItem("IDUSER")].iconface=iconface;
    dataLS[sessionStorage.getItem("IDUSER")].name=name;
    localStorage.setItem("UJ+data", data);
    event.select(".root").innerHTML=`<h1>Tout est prêt !</h1>
    <button class="link-uj+">Aller sur UJ+</button>`;
  }
}

if(sessionStorage.getItem("IDUSER")!==null){
  if(localStorage.getItem("USERCONTENT")[sessionStorage.getItem("IDUSER")]!==null){
    nextstep(++step);
    event.select(".next-step").addEventListener("click", ()=>{nextstep(++step)});
  }else{
    window.location.href="../";
  }
}else{
  window.location.href="../login/";
}
