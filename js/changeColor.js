changeColor(localStorage.getItem('color'));

function changeColor(color){
  document.body.style.background = color;
  let colorNumber = parseInt(color.slice(1),16);
  colorNumber = colorNumber>=(16777215-1973790)? colorNumber-1973790 : colorNumber+1973790;
  let blockColor = colorNumber.toString(16);
  let blocks = document.querySelectorAll('.panel_block');
  for(let block of blocks){
    block.style.background='#'+blockColor;
  }
  let icons = document.querySelectorAll('.panel_block .fas');
  for(let icon of icons){
    icon.style.color='#'+blockColor;
  }
  document.querySelector('.setings').style.background = '#'+blockColor;
  document.querySelector('#setings_open').style.background = '#'+blockColor;
  localStorage.setItem('color',color);
}
