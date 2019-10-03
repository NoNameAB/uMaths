import React from "react"
import { createStackNavigator } from "react-navigation-stack"
import { createDrawerNavigator, DrawerNavigatorItems } from "react-navigation-drawer"
import { createAppContainer } from 'react-navigation'
import { StyleSheet, Image } from "react-native"
import { Container, Content, Header, Body } from 'native-base'
import Divisors from "../Pages/Divisors"
import GCD from "../Pages/GCD"
import LCM from "../Pages/LCM"
import Divisibility from "../Pages/Divisibility"
import PrimeNumbers from "../Pages/PrimeNumbers"
import Home from "../Pages/Home"

const homeStack = createStackNavigator({
  Home: {
    screen: Home
  }
})

const divisorsStack = createStackNavigator({
  Divisors: {
    screen: Divisors
  }
})

const gcdStack = createStackNavigator({
  GCD: {
    screen: GCD
  }
})

const lcmStack = createStackNavigator({
  LCM: {
    screen: LCM
  }
})

const divisibilityStack = createStackNavigator({
  Divisibility: {
    screen: Divisibility
  }
})

const primeStack = createStackNavigator({
  PrimeNumbers: {
    screen: PrimeNumbers
  }
})

const CustomDrawerContentComponent = (props) => (

  <Container >
    <Header style={styles.drawerHeader}>
      <Body>
        <Image
          style={styles.drawerImage}
          source={require('../assets/maths.png')} />
      </Body>
    </Header>
    <Content>
      <DrawerNavigatorItems {...props} />
    </Content>

  </Container>

);

const drawerNavigator = createDrawerNavigator({
  Home: {
    screen: homeStack
  },
  Divisors: {
    screen: divisorsStack
  },
  GCD: {
    screen: gcdStack
  },
  LCM: {
    screen: lcmStack
  },
  Divisibility: {
    screen: divisibilityStack
  },
  PrimeNumbers: {
    screen: primeStack,
    navigationOptions: {
      title: 'Prime Numbers'
    }
  }
}, {
  initialRouteName: 'Home',
  drawerPosition: 'left',
  contentComponent: CustomDrawerContentComponent,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle'
})

const Navigation = createAppContainer(drawerNavigator)

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  drawerHeader: {
    height: 200,
    backgroundColor: 'white'
  },
  drawerImage: {
    height: 150,
    width: 150,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 75
  }

})

export default Navigation