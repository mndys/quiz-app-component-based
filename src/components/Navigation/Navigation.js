import './Navigation.css'
import createElement from '../../lib/createElement'
import homeSVG from '@fortawesome/fontawesome-free/svgs/solid/home.svg'
import bookmarkSVG from '@fortawesome/fontawesome-free/svgs/solid/bookmark.svg'
import createSVG from '@fortawesome/fontawesome-free/svgs/solid/plus-circle.svg'
import settingsSVG from '@fortawesome/fontawesome-free/svgs/solid/sliders-h.svg'

const buttonsConfig = [
  { svgPath: homeSVG, text: 'Home' },
  { svgPath: bookmarkSVG, text: 'Home' },
  { svgPath: createSVG, text: 'Home' },
  { svgPath: settingsSVG, text: 'Home' },
]

export default function Navigation(onNavigate) {
  buttonsConfig.map(({ svgPath, text }) => {
    const button = createElement('img', { src: svgPath, alt: text })
    button.addEventListener('click', () => onNavigate(text))
    return button
  })
  const el = createElement('nav', { className: 'Navigation, ...buttons)' })
  return el
}
