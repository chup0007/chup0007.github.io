const decks = {
  Animals: ['What food makes up nearly all of a Giant Panda’s diet?', 'What is the largest type of ‘big cat’ in the world?', 'Bees are found on every continent of earth except for one, which is it?', 'What is the tallest animal in the world?', 'How many legs does a spider have?'],
  Birds: ['What bird is the international symbol of happiness?', 'What kind of bird is often described as being a thief and is thought by some people to bring bad luck?', 'What still living bird has the worlds longest wingspan?', 'What is New Zealand national bird?', 'What type of mammals fly using echolocation?']
}

const answers = {
  AnimalsA: ['Bamboo', 'The tiger', 'Antarctica', 'The giraffe', '8'],
  BirdsA: ['Bluebird', 'Magpie', 'Albatross', 'Kiwi', 'Bats']
}

const $decks = document.getElementById('decks')
const $view = document.getElementById('view')
const $close = document.getElementById('close')
const $title = document.getElementById('title')
const $card = document.getElementById('card')
const $ans = document.getElementById('ans')
const $next = document.getElementById('next')
const $prev = document.getElementById('prev')

const view = {
  deck: null,
  card: 0,
  total: 0
}

// adding decks
const deckNames = Object.keys(decks)
const decksHTML = deckNames.map(deck => `<div class="deck">${deck}</div>`)
$decks.innerHTML = decksHTML.join(' ')

$decks.addEventListener('click', function (event) {
  if (event.target.classList.contains('deck')) {
    setView(event.target.innerText)
    showCard()
    showView()
  }
})

function showView () {
  $view.classList.add('show')
}

function hideView () {
  $view.classList.remove(`show`)
}

function setView (deck) {
  view.deck = deck
  view.card = 0
  view.total = decks[deck].length
  $title.innerText = `Viewing ${deck}`
}

function showCard () {
  $card.innerText = decks[view.deck][view.card]
}

// show the answer
function answer () {
  if (view.deck === 'Animals') {
    $card.innerText = decks[view.deck][view.card] + '\n' + '\n' + answers.AnimalsA[view.card]
  } else if (view.deck === 'Birds') {
    $card.innerText = decks[view.deck][view.card] + '\n' + '\n' + answers.BirdsA[view.card]
  }
}

$ans.addEventListener('click', answer)

$close.addEventListener('click', hideView)

// next card
function nextCard () {
  view.card = (view.card === view.total - 1 ? 0 : view.card + 1)
  showCard()
}

$next.addEventListener('click', nextCard)

// prev card
function prevCard () {
  view.card = (view.card ? view.card : view.total) - 1
  showCard()
}

$prev.addEventListener('click', prevCard)
