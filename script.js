let rows = document.getElementsByClassName('row');
let cc = "#000000";

function chC(id){

  document.getElementById(id+'').style.background = cc;
}

function chooseColor(color){
  cc = color;
}

for(let i=0;i<5;i++){
  for(let j=0;j<5;j++){
      rows[i].innerHTML+="<div id='"+(i*5+j)+"' class='block' onclick='chC(this.id)'>";
  }
}

function clear(){
  for(let i=0;i<25;i++){
    document.getElementById(i+"").style.background="white";
  }
}
