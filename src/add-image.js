import food from './food.jpg'

export default function addImage() {
  const imageElement = document.createElement('img')
  imageElement.src = food
  imageElement.alt = 'food'
  const body = document.querySelector('body')
  body.appendChild(imageElement)
}