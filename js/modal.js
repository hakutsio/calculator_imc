//  const modalWrapper = document.querySelector('.modal-wrapper')
//  const modalMessage = document.querySelector('.modal .title span')
//  const modalBtnClose = document.querySelector('.modal button.close')

export const modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),

  open() {
    modal.wrapper.classList.add('open')
  },
  close() {
    modal.wrapper.classList.remove('open')
  },
}

modal.buttonClose.onclick = () => {
  modal.close()
}

window.addEventListener('keydown', handleKeydown)

function handleKeydown(evet) {
  if(event.key === "Escape") { 
    modal.close()
  }
}