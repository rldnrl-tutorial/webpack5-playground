import Heading from "../components/Heading";
import Image from "../components/Image";
import food from '../images/food.jpg'

const heading = new Heading();
heading.render()

const FoodImage = new Image(food, 'food')
FoodImage.render()