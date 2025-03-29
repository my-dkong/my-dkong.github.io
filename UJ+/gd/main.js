function getParameterByName(name){
  var url = new URL(window.location.href);
  var search_params = new URLSearchParams(url.search); 
  if(search_params.has(name)) {
    var name2 = search_params.get(name);
    return name2;
  }
}

var event=new Object();
event.select=(str)=>{
  return document.querySelector(str);
}

if(sessionStorage.getItem("IDUSER")===null){
  window.location.href="/UJ+/login/";
}else if(getParameterByName("l")>-1 && getParameterByName("l")<8){
  if(getParameterByName("l")<6){
    event.select(".root").innerHTML=`
    <button class="go-back">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff">
        <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/>
      </svg>
    <br>Retour en arrière</button>
    <div align="center" class="main">
      <h1>Geometry Dash niveaux <span class="niveaux-span"></span>
    </div>`;
    event.select(".niveaux-span").innerHTML=levels.content[0].levels[getParameterByName("l")].levels.join(", ")+".";
    event.select(".main").innerHTML+=`<iframe src="https://turbowarp.org/`+levels.content[0].levels[getParameterByName("l")].id+`/embed" width="482" height="412" allowtransparency="true" frameborder="0" scrolling="no" allowfullscreen></iframe>`;
  }else if(getParameterByName("l")==7){
    event.select(".root").innerHTML=`
    <button class="go-back">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff">
        <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/>
      </svg>
    <br>Retour en arrière</button>
    <div align="center" class="main">
      <h1>Geometry Dash niveaux <span class="niveaux-span"></span>
    </div>`;
    event.select(".main").innerHTML+=`<iframe src="https://turbowarp.org/`+levels.content[1].levels[0].id+`/embed" width="482" height="412" allowtransparency="true" frameborder="0" scrolling="no" allowfullscreen></iframe>`;
  }else if(getParameterByName("l")==8){
    event.select(".root").innerHTML=`
    <button class="go-back">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff">
        <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/>
      </svg>
    <br>Retour en arrière</button>
    <div align="center" class="main">
      <h1>Geometry Dash niveaux <span class="niveaux-span"></span>
    </div>`;
    event.select(".main").innerHTML+=`<iframe src="https://turbowarp.org/`+levels.content[2].levels[0].id+`/embed" width="482" height="412" allowtransparency="true" frameborder="0" scrolling="no" allowfullscreen></iframe>`;
  }
}

event.select(".go-back").addEventListener("click", ()=>{
  console.info("retour en arrière");
  history.back();
});
