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
    <h1>Geometry Dash niveaux <span class="niveaux-span"></span>`;
    event.select(".niveaux-span").innerHTML=levels.content[0].levels[getParameterByName("l")].levels.join(", ")+".";
    event.select(".root").innerHTML+=`<iframe src="https://turbowarp.org/`+levels.content[0].levels[getParameterByName("l")].id+`/embed" width="482" height="412" allowtransparency="true" frameborder="0" scrolling="no" allowfullscreen></iframe>`;
  }
}
