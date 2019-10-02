import React from "react"
import { ScrollView, Text, StyleSheet } from "react-native"
import { ActivityIndicator, Colors, TextInput, Button, Dialog, Portal, Paragraph } from "react-native-paper"
import { Icon, Container, Content } from "native-base"

class PrimeNumber extends React.Component {
    state = {
        text: '',
        visible: false,
        res: "",
        loading: false
    }
    static navigationOptions = ({ navigation }) => ({
        title: "Prime Numbers",
        headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} />,
        drawerLabel: 'Prime Numbers',
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
        this.setState({ text: "", res: '' })
        this.hideActivator()
    }
    showActivator = () => {
        this.setState({ loading: true })
    }
    hideActivator = () => {
        this.setState({ loading: false })
    }
    primeCheck = (num) => {
        if(num === 1){
            return false
        }
        else if (num === 2 || num === 3){
            return true
        }
        else {
            for(i = 3; i < num; i++){
                if(num % i === 0){
                    return false
                }
            }
            return true
        }
    }
    handleSubmit = () => {
        let res = ""
        let num = parseInt(this.state.text)
        this.showActivator()
        if(this.primeCheck(num)){
            res = "The number " + num + " is prime."
        }
        else {
            res = "The number " + num + " is not prime."
        }
        this.setState({ res })
        this.showDialog()
    }
    render() {
        return (
            <Container>
                <Content contentContainerStyle={styles.container}>
                    <Text style={styles.text}>Type a number : </Text>
                    <TextInput error={this.state.error} keyboardType="number-pad" style={styles.textInput} placeholder="Type a number ..." label="Number" value={this.state.text} onChangeText={text => { this.setState({ text }) }} />
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
        marginLeft: 5,
        marginTop: 5
    }
});

export default PrimeNumber