if(sessionStorage.getItem("IDUSER")===null={
  window.location.href="login/";
}else{
  document.querySelector(".root").innerHTML="Super t'es connecté !";
}
