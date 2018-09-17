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
}

function remove () {
  card.classList.remove('flip')
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
