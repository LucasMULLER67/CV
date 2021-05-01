const navigation = document.querySelector('.navigation');
  document.querySelector('.toggle').onclick = function()
  {
    this.classList.toggle('active');
    navigation.classList.toggle('active');
  }

  let imgBx = document.querySelectorAll('.imgBx');
  imgBx.forEach(popup => popup.addEventListener('click', () =>{
    popup.classList.toggle('active')
  }));
