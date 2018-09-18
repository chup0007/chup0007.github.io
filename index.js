const card = document.getElementById('card')
const $card = document.getElementById('cardO')

card.addEventListener('click', function (event) {
  if (event.target.classList.contains('dropbtn')) {
    flip()
  }

  if (event.target.classList.contains('btn')) {
    remove()
  }
})

function flip () {
  card.classList.add('flip')
  $card.classList.add('down')
}

function remove () {
  card.classList.remove('flip')
  $card.classList.remove('down')
}


$card.addEventListener('click', function (event) {
  if (event.target.classList.contains('dropbtn')) {
    $flip()
  }

  if (event.target.classList.contains('btn')) {
    $remove()
  }
})

function $flip () {
  $card.classList.add('flip')
}

function $remove () {
  $card.classList.remove('flip')
}
