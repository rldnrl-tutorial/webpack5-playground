import helloWorld from "../hello-world";
import addImage from '../add-image'
import Button from "../components/Button";
import Heading from "../components/Heading/Heading";
import upperCase from 'lodash/upperCase'

const button = new Button()
button.render()

const heading = new Heading()
heading.render(upperCase('Hello World'))

const heading2 = new Heading()
heading2.render(upperCase('hello world'))

helloWorld()
addImage()