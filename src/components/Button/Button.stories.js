import Button from './Button'

export default {
  title: 'Button',
  component: Button,
}

export const base = () => Button('click me!')
export const longText = () =>
  Button('This is a long-text-button to show a long text on a button')
