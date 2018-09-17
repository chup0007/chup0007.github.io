// Anastasia Chupina

// creating the game object
const game = {
  chosenLevel: undefined,
  easy: ['ញ', 'រ', 'ើ', 'ច', 'រ', 'ញ', 'ើ', 'ច'],
  med: ['រ', 'ឋ', 'ើ', 'ឆ', 'រ', 'ឋ', 'ើ', 'ឆ', 'ដ', 'ដ', 'ញ', 'ញ'],
  hard: ['រ', 'ឋ', 'ើ', 'ឆ', 'ោ', 'ច', 'អ', 'រ', 'ឋ', 'ើ', 'ឆ', 'ោ', 'ច', 'អ', 'ញ', 'ញ'],
  elReferences: [], /* cards loaded at the current level */
  elPair: [], /* array of two cards being compared */
  symbolPair: [], /* array of the symbols of cards being comapred */
  flipped: 0 /* the number of matched card at the current level */
}
// creating the white overlay over the controls
function back () {
  const back = document.createElement('div')
  back.classList.add('back')
  document.body.appendChild(back)
}

// restarting the game on "Play again"
function refresh () {
  window.location.reload()
}

// shuffling cards
const shuffle = function (array) {
  const length = array.length
  for (let i = 0; i < length; i++) {
    const temp = array[i]
    const pos = Math.floor(Math.random() * length)
    const other = array[pos]
    array[i] = other
    array[pos] = temp
  }
  return array
}

// flipping the carrd
function flip (ev) {
  let clickedCard = ev.currentTarget
  let symbol = clickedCard.firstElementChild.innerText

  if (game.symbolPair.length < 2) { // to make sure that there are no more than 2 cards are flipped
    clickedCard.classList.add('flip')

    if (!game.elPair.includes(clickedCard)) {
      game.elPair.push(clickedCard)
      game.symbolPair.push(symbol)

      if (game.elPair.length === 2) { // when two cards are flipped
        if (game.symbolPair[0] === game.symbolPair[1]) { // if cards match
          game.elPair[0].removeEventListener('click', flip)
          game.elPair[1].removeEventListener('click', flip)
          game.flipped += 2

          if (game.flipped === game.elReferences.length) { // if the puzzle is solved
            for (let i = 0; i < game.elReferences.length; i++) { // all the cards fall down/dissapear
              game.elReferences[i].classList.add('vis')
            }
            const end = document.createElement('div') // generate"You won!" banner"
            document.body.appendChild(end)
            end.classList.add('end')
            end.innerText = 'YOU WON!'
            const refr = document.createElement('div')
            document.body.appendChild(refr)
            refr.classList.add('refr')
            refr.innerText = 'Play Again'
            refr.addEventListener('click', refresh)
          }
        } else { // if cards don't match
          let timer1 = setTimeout(function () {
                    // remove cSS class that flips the card - time delay
            game.elPair[0].classList.remove('flip')
            game.elPair[1].classList.remove('flip')
            clearTimeout(timer1)
          }, 1000)
        }
// emptying the arrays of elements and symbols with delay
        let timer2 = setTimeout(function () {
          game.elPair = []
          game.symbolPair = []
          clearTimeout(timer2)
        }, 1000)
      }
    }
  }
}

function createElements (arr) { // creating cards dynamically
  game.flipped = 0
  shuffle(arr)
  const cards = document.createElement('div')
  cards.classList.add('cards')
  document.body.appendChild(cards)

  for (let i = 0; i < arr.length; i++) { // creating the set of cards based on the chosen level
    let card = document.createElement('div') // card holder
    card.classList.add('card')
    let backS = document.createElement('div') // back side
    backS.classList.add('backS')
    backS.innerText = arr[i]
    let frontS = document.createElement('div') // front side
    frontS.classList.add('frontS')
    game.elReferences.push(card)

    card.appendChild(backS)
    card.appendChild(frontS)
    cards.appendChild(card)

    card.addEventListener('click', flip)
  }
}

function chooseLevel (ev) { // creating the levels
  if (ev.target.dataset.level === 'e') {
    createElements(game.easy)
  } else if (ev.target.dataset.level === 'm') {
    createElements(game.med)
  } else {
    createElements(game.hard)
  }
  back()
}

const $easy = document.getElementById('one') // easy level
$easy.addEventListener('click', chooseLevel)

const $med = document.getElementById('two') // med level
$med.addEventListener('click', chooseLevel)

const $hard = document.getElementById('three') // hard level
$hard.addEventListener('click', chooseLevel)
