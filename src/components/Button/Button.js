import './style.css'

class Button {
  buttonCssClass = 'btn-1'
  
  render() {
    const buttonElement = document.createElement('button')
    buttonElement.classList.add(this.buttonCssClass)
    buttonElement.innerText = 'Hell World'
    const body = document.querySelector('body')
    body.appendChild(buttonElement)

    buttonElement.onclick = function() {
      const pElement = document.createElement('p')
      pElement.classList.add('text-xl')
      pElement.innerText = 'This is P tag'
      body.appendChild(pElement)
    }
  }
}

export default Button
