
const btn = document.querySelector('.este')
const oculto = document.querySelector('.oculto')


  btn.addEventListener('click', sacarInfo)



function sacarInfo() {
  const ya = document.querySelector('.oculto-show')

  if(ya ){
    oculto.classList.remove('oculto-show')
    oculto.classList.add('oculto')
  } else{
    const mydiv = document.createElement('div')
    const parrafo = document.createElement('p')
    parrafo.textContent = 'Lorem ipsum, dolomaxime sapiente ut laborum cupiditate quo assuora modi illo delectus!'
    mydiv.appendChild(parrafo)

    oculto.classList.add('oculto-show')
    oculto.classList.remove('oculto')



    oculto.appendChild(mydiv)
  }




}