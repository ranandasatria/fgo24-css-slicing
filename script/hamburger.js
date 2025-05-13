const hamburger = document.getElementById('hamburger')
const menuTop = document.getElementById('menuTop')

hamburger.addEventListener('click', function(){
  if (menuTop.classList.contains('active')){
    menuTop.classList.remove('active')
  }else {
    menuTop.classList.add('active')
  }
})