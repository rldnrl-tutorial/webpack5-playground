import helloWorld from "./hello-world";
import addImage from './add-image'
import Button from "./components/Button";
import Heading from "./components/Heading/Heading";

const button = new Button()
button.render()

const heading = new Heading()
heading.render()

helloWorld()
addImage()