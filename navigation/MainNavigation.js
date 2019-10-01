import React from "react"
import { createStackNavigator } from "react-navigation-stack"
import { createDrawerNavigator, DrawerNavigatorItems } from "react-navigation-drawer"
import { createAppContainer } from 'react-navigation'
import { StyleSheet, Image  } from "react-native"
import { Container, Content, Header, Body, Icon } from 'native-base'
import Divisors from "../Pages/Divisors"

const divisorsStack = createStackNavigator({
  Divisors: {
    screen: Divisors
  }
})
const CustomDrawerContentComponent = (props) => (

  <Container>
    <Header style={styles.drawerHeader}>
      <Body>
        <Image
          style={styles.drawerImage}
          source={require('../assets/icon.png')} />
      </Body>
    </Header>
    <Content>
      <DrawerNavigatorItems {...props} />
    </Content>

  </Container>

);

const drawerNavigator = createDrawerNavigator({
  Divisors: {
    screen: divisorsStack
  }
}, {
  initialRouteName: 'Divisors',
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
    borderRadius: 75
  }

})

export default Navigation