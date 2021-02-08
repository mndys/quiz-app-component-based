import createElement from '../../lib/createElement'
import './CreateForm.css'
import Button from '../Button'

export default function CreateForm() {
  const form = createElement(
    'form',
    {
      className: 'CreateForm',
      innerHTML: `
    <label>Question: 
    <input type="text" placeholder="Write your question here"  />
    </label>
    <label>Answer: 
    <input type="text" placeholder="Write your answer here"  />
    </label>
    `,
    },
    Button('Create Card!')
  )
  return form
}
