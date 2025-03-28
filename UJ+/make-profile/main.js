var event=new Object(), step=0, iconface=null, name=null;
event.select=(str)=>{
  return document.querySelector(str);
}

const imgf=()=>{
  if(iconface!==null){
    nextstep(++step)
  }else{
    if(event.select(".root").innerHTML.indexOf("Cliquez sur une des images")===-1){
      event.select(".root").innerHTML+='<h1 style="color: red;">Cliquez sur une des images</h1>';
      event.select(".next-step").addEventListener("click", imgf);
      event.select(".icon0").addEventListener("click", maj1);
      event.select(".icon1").addEventListener("click", maj2);
      event.select(".icon2").addEventListener("click", maj3);
      event.select(".icon3").addEventListener("click", maj4);
      event.select(".icon4").addEventListener("click", maj5);
      event.select(".icon5").addEventListener("click", maj6);
    }
  }
}

const maj1=()=>{
  iconface="0";
  nextstep(++step);
}
const maj2=()=>{
  iconface=String(1);
  nextstep(++step);
}
const maj3=()=>{
  iconface=String(2);
  nextstep(++step);
}
const maj4=()=>{
  iconface=String(3);
  nextstep(++step);
}
const maj5=()=>{
  iconface=String(4);
  nextstep(++step);
}
const maj6=()=>{
  iconface=String(5);
  nextstep(++step);
}

const nextstep=(st)=>{
  if(st===1){
    event.select(".root").innerHTML=`<h1>Étape 1 : Votre icône de profil</h1>
      <p class="subtitle">Choisissez votre icône de profil</p>
      <div class="img-pp"></div>`;
    for(var i=0;i<6;i++){
      event.select(".img-pp").innerHTML+='<img class="icon-pp icon'+i+'" src="img/'+(i+1)+'.webp">';
    }
    event.select(".icon0").addEventListener("click", maj1);
    event.select(".icon1").addEventListener("click", maj2);
    event.select(".icon2").addEventListener("click", maj3);
    event.select(".icon3").addEventListener("click", maj4);
    event.select(".icon4").addEventListener("click", maj5);
    event.select(".icon5").addEventListener("click", maj6);
    //event.select(".next-step").addEventListener("click", ()=>{
    //  name=event.select(".input-name").value;
    //  nextstep(++step);
    //});
  }else if(st===2){
    event.select(".root").innerHTML=`<h1>Étape 2 : Votre nom</h1>
    <p class="subtitle">Entrez le nom par lequel vous voulez que l'on vous appelle</p>
    <input type="text" class="input-name">
    <button class="next-step">Continuer</button>`;
    event.select(".next-step").addEventListener("click", ()=>{
      name=event.select(".input-name").value;
      nextstep(++step);
    }); 
  }else if(st===3){
    name=event.select(".input-name").value;
    const dataLS=JSON.parse(localStorage.getItem("UJ+data"));
    dataLS[sessionStorage.getItem("IDUSER")]=new Object();
    dataLS[sessionStorage.getItem("IDUSER")].iconface=iconface;
    dataLS[sessionStorage.getItem("IDUSER")].name=name;
    localStorage.setItem("UJ+data", JSON.stringify(dataLS));
    event.select(".root").innerHTML=`<h1>Tout est prêt !</h1>
    <button class="link-ujplus">Aller sur UJ+</button>`;
    event.select(".link-ujplus").addEventListener("click", ()=>{window.location.href="../"}); 
  }
}

if(sessionStorage.getItem("IDUSER")!==null){
  if(localStorage.getItem("UJ+data")!==null){
    if(JSON.parse(localStorage.getItem("UJ+data"))[sessionStorage.getItem("IDUSER")]===undefined){
      nextstep(++step);
      event.select(".next-step").addEventListener("click", imgf);
    }else{
      window.location.href="../";
    }
  }else{
    localStorage.setItem("UJ+data", JSON.stringify({}));
    window.location.reload();
  }
}else{
  window.location.href="../login/";
}

setInterval(()=>{
  event.select(".icon0").addEventListener("click", maj1);
  event.select(".icon1").addEventListener("click", maj2);
  event.select(".icon2").addEventListener("click", maj3);
  event.select(".icon3").addEventListener("click", maj4);
  event.select(".icon4").addEventListener("click", maj5);
  event.select(".icon5").addEventListener("click", maj6);
}, 10)
