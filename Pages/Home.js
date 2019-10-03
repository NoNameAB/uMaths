import React from "react"
import { StyleSheet, Image } from "react-native"
import * as Font from "expo-font"
import { Container, Content, Button, Text, Icon } from "native-base"
import { IonIcons } from "@expo/vector-icons"

class Home extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Home",
        headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} />,
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../assets/icon.png')}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),
    })
    state = {
        loading: true
    }
    async componentDidMount() {
        await Font.loadAsync({
            "Roboto": require("../utils/fonts/Roboto.ttf"),
            "Roboto_medium": require("../utils/fonts/Roboto_medium.ttf"),
            ...IonIcons
        })
        this.setState({ loading: false })
    }
    render() {
        if (this.state.loading) {
            return (
                <Container></Container>
            )
        }
        return (
            <Container>
                <Content>
                    <Text style={styles.text}>Welcome to uMaths ! This application provides you some tips and tricks about maths that are very useful. They can help you in your maths problems. So, what are you waiting for ? Just click on one of these buttons or open the menu !</Text>
                    <Button style={styles.button} onPress={() => { this.props.navigation.navigate("Divisors") }}><Text>Divisors Calculator</Text></Button>
                    <Button style={styles.button} onPress={() => { this.props.navigation.navigate("GCD Calculator") }}><Text>GCD Calculator</Text></Button>
                    <Button style={styles.button} onPress={() => { this.props.navigation.navigate("LCM Calculator") }}><Text>LCM Calculator</Text></Button>
                    <Button style={styles.button} onPress={() => { this.props.navigation.navigate("Prime Numbers") }}><Text>Prime Numbers</Text></Button>
                    <Button style={styles.button} onPress={() => { this.props.navigation.navigate("Divisibility") }}><Text >Divisibility</Text></Button>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        margin: 10
    },
    button: {
        margin: 10,
        marginLeft: "auto",
        marginRight: "auto",
        justifyContent: "center",
        width: 250
    }
})

export default Home