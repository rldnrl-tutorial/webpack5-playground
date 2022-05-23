import './style.scss'

class Image {
  constructor(src, alt) {
    this.src = src
    this.alt = alt
  }

  render() {
    const imageElement = document.createElement('img')
    imageElement.src = this.src
    imageElement.alt = this.alt
    imageElement.className = 'image'
    const body = document.querySelector('body')
    body.appendChild(imageElement)
  }
}

export default Image