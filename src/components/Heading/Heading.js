import './style.scss'

class Heading {
  render() {
    const headingElement = document.createElement('h1')
    headingElement.className = 'xl px-1 py-2 text-green-500'
    headingElement.innerHTML = 'This is Heading Tag'
    const body = document.querySelector('body')
    body.appendChild(headingElement)
  }
}

export default Heading