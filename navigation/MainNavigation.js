import {createStackNavigator} from "react-navigation-stack"
import {createAppContainer} from 'react-navigation'
import Divisors from "../Pages/Divisors"

const divisorsStack = createStackNavigator({
    Divisors:{
       screen: Divisors,
       navigationOptions: {
         title: "Divisors"
       }
}})

const Navigation = createAppContainer(divisorsStack)
export default Navigation