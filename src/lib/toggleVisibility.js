export default function toggleVisibility() {
  const el = {}

  function hide() {
    el.hidden = true
  }

  function show() {
    el.hidden = false
  }

  return { hide, show }
}
