import Button from './components/Button'
import Header from './components/Header'
import Card from './components/Card'

const button = Button('Click me')
const header = Header()
const card = Card(
  'What does the fox say?',
  'Ring-ding-ding-ding-dingeringeding! Gering-ding-ding-ding-dingeringeding! Gering-ding-ding-ding-dingeringeding!'
)

document.body.append(button)
document.body.append(header)
document.body.append(card)
