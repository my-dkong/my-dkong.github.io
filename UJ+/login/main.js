const textToNumber=(texte)=>{
    let nombre = 0;
    for (let i = 0; i < texte.length; i++) {
        nombre += texte.charCodeAt(i) * Math.pow(256, texte.length - 1 - i);
    }
    return nombre;
}

const numberToText=(nombre, longueur)=>{
    const codesAscii = [];
    let reste = nombre;

    for (let i = longueur - 1; i >= 0; i--) {
        const puissance = Math.pow(256, i);
        const code = Math.floor(reste / puissance);
        codesAscii.push(code);
        reste = reste - code * puissance;
    }

    return codesAscii.map(code => String.fromCharCode(code)).join("");
}

var event=new Object();
event.select=(elem)=>{
    return document.querySelector(elem);
}

var rootElem=document.querySelector(".root");
if(sessionStorage.getItem("IDUSER")===null){
  rootElem.innerHTML=`<h1>Connexion</h1>
  <p class="subtitle">Connexion à votre compte UniverseJeux Premium</p>
  <div class="identifiants">
      <label for="username-input" class="username-pre">Identifiant&nbsp;:&nbsp;</label><input type="text" id="username-input" class="username-input" placeholder="truite68"><br>
      <label for="password-input" class="password-pre">Mot de passe&nbsp;:&nbsp;</label><input type="password" id="password-input" class="password-input"><br>
      <button class="validate-signin">Connexion</button>
      <p class="qq-sans-compte">Pas de compte UJ+ ? <a href="./signup/">Créer un compte</a></p>
  </div>`;
}else{
  window.location.href="../"
}

event.select(".validate-signin").addEventListener("click", ()=>{
    if(ENCODED_ACCOUNTS.content.indexOf(String(BigInt(textToNumber(event.select(".password-input").value))-BigInt(textToNumber(event.select(".username-input").value))))>-1){
        console.log("Connecté !");
        sessionStorage.setItem("IDUSER", String(BigInt(textToNumber(event.select(".password-input").value))-BigInt(textToNumber(event.select(".username-input").value))));
        if(JSON.parse(localStorage.getItem("UJ+data"))[sessionStorage.getItem("IDUSER")]===undefined){
            window.location.href="/UJ+/make-profile/";
        }else{
            window.location.href="/UJ+";
        }
    }else{
        console.log("MDP pas bon");
    }
});
