import './Card.css'

export default function Card(question, answer) {
  const el = document.createElement('section')
  el.className = 'Card'
  el.innerHTML = `
  <h2 class="Card__question">
    ${question}
    </h2>
    <button>show answer</button>
    <p class="Card__answer hidden">${answer}</p>
  `
  return el
}
