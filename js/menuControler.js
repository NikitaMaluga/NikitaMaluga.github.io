let isOpen = false;

function setingsOpen(){
  document.querySelector('.setings').style.marginLeft = "0";
  document.querySelector('#setings_open').style.marginLeft = "220px";
  document.querySelector('#setings_open i').style.transform = "rotate(-540deg)";
}

function setingsClose(){
  document.querySelector('.setings').style.marginLeft = "-220px";
  document.querySelector('#setings_open').style.marginLeft = "0";
  document.querySelector('#setings_open i').style.transform = "rotate(0deg)";
}

document.querySelector('#setings_open').onclick = function(e){
  if(isOpen){
    setingsClose();
  }
  else{
    setingsOpen();
  }
  isOpen=!isOpen;
}
