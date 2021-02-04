import Card from './Card'

export default {
  title: 'Card',
  component: Card,
}

export const base = () =>
  Card(
    'What does the fox say?',
    'Ring-ding-ding-ding-dingeringeding! Gering-ding-ding-ding-dingeringeding! Gering-ding-ding-ding-dingeringeding!'
  )
