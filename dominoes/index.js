// Anastasia Chupina

const dominoes = document.createDocumentFragment()
const wrapDominoes = document.getElementById('dominoes')

// Create Dot function
function createDot () {
  const newDot = document.createElement('div')
  newDot.classList.add('dot')
  return newDot
}

// Create section function
function createSection (location) {
  const dotNumber = Math.floor(Math.random() * 7)
  const dotSection = document.createElement('div')

  if (dotNumber <= 4 || dotNumber === 6) {
    dotSection.classList.add('dotAll', location)
    for (let i = 0; i < dotNumber; i++) {
      dotSection.appendChild(createDot())
    }
  } else if (dotNumber === 5) {
    dotSection.classList.add('dotFive', location)
    for (let i = 0; i < dotNumber; i++) {
      dotSection.appendChild(createDot())
    }
  }
  return dotSection
}

// create Domino function
function createDomino () {
  const newDom = document.createElement('div')
  newDom.classList.add('doms')
  newDom.appendChild(createSection('top'))
  newDom.appendChild(createSection('bottom'))
  dominoes.appendChild(newDom)
}

for (let i = 1; i <= 100; i++) {
  createDomino()
  wrapDominoes.appendChild(dominoes)
}
