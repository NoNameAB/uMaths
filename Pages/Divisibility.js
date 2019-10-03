import React from "react"
import { ScrollView, Text, StyleSheet } from "react-native"
import { ActivityIndicator, Colors, TextInput, Button, Dialog, Portal, Paragraph } from "react-native-paper"
import { Icon, Container, Content } from "native-base"

class Divisibility extends React.Component {
    state = {
        num1: '',
        num2: "",
        visible: false,
        res: "",
        loading: false
    }
    static navigationOptions = ({ navigation }) => ({
        title: "Divisibility",
        headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} />,
        drawerLabel: 'Divisibility',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../assets/icon.png')}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),
    })
    showDialog = () => {
        this.setState({ visible: true })
    }
    hideDialog = () => {
        this.setState({ visible: false })
        this.setState({ num1: "", num2: "", res: '' })
        this.hideActivator()
    }
    showActivator = () => {
        this.setState({ loading: true })
    }
    hideActivator = () => {
        this.setState({ loading: false })
    }
    handleSubmit = () => {
        let res = ""
        let num1 = parseInt(this.state.num1)
        let num2 = parseInt(this.state.num2)
        this.showActivator()
        if(num1 % num2 === 0){
            res = num1 + " is divisible by " + num2
        } 
        else {
            res = num1 + " is not divisible by " + num2 + " and the rest is " + num1 % num2
        }
        this.setState({ res })
        this.showDialog()
    }
    render() {
        return (
            <Container>
                <Content contentContainerStyle={styles.container}>
                    <Text style={styles.text}>Type the first number : </Text>
                    <TextInput error={this.state.error} keyboardType="number-pad" style={styles.textInput} placeholder="Type the first number ..." label="First Number" value={this.state.num1} onChangeText={text => { this.setState({ num1: text }) }} />
                    <Text style={styles.text}>Type the second number : </Text>
                    <TextInput error={this.state.error} keyboardType="number-pad" style={styles.textInput} placeholder="Type the second number ..." label="Second Number" value={this.state.num2} onChangeText={text => { this.setState({ num2: text }) }} />
                    <Button disabled={this.state.loading} mode="contained" onPress={this.handleSubmit}>
                        Submit
                </Button>
                    {this.state.loading ? <ActivityIndicator animating={true} size='large' style={styles.loading} color={Colors.blue800} /> : null}
                    <Portal>
                        <Dialog
                            visible={this.state.visible}
                            onDismiss={this._hideDialog}>
                            <Dialog.Title>Result</Dialog.Title>
                            <Dialog.ScrollArea>
                                <ScrollView>
                                    <Paragraph>{this.state.res}</Paragraph>
                                </ScrollView>
                            </Dialog.ScrollArea>
                            <Dialog.Actions>
                                <Button onPress={this.hideDialog}>Done</Button>
                            </Dialog.Actions>
                        </Dialog>
                    </Portal>
                </Content>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    icon: {
        width: 24,
        height: 24,
    },
    textInput: {
        margin: 10
    },
    loading: {
        marginTop: 15
    },
    text: {
        fontSize: 20,
        marginLeft: 10,
        marginTop: 10
    }
});

export default Divisibility