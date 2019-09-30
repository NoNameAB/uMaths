import React from "react"
import { ScrollView, View, Text, StyleSheet } from "react-native"
import { ActivityIndicator, Colors, TextInput, Button, Dialog, Portal, Paragraph} from "react-native-paper"

class Divisors extends React.Component {
    state = {
            text: '',
            visible: false,
            res: "",
            loading: false
        }
    showDialog = () => {
        this.setState({visible: true})
    }
    hideDialog = () => {
        this.setState({visible: false})
        this.setState({text: "", res: ''})
        this.hideActivator()
    }
    showActivator = () => {
        this.setState({loading: true})
    }
    hideActivator = () => {
        this.setState({loading: false})
    }
    handleSubmit = () => {
        let res = ""
        let div = []
        let loading = false
        let num = parseInt(this.state.text)
        div = []
        loading = true
        this.showActivator()
        for(i = 1; i <= num; i++){
            if(num % i === 0){
                if(num === i){
                    res += i + "\n"
                }
                else {
                    res += i + ", \n"
                }
                div.push(i)
            }
        }
        res += "Number of divisors : " + div.length
        loading = false
        this.setState({res})
        this.showDialog()
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style = {styles.text}>Type a number : </Text>
                <TextInput error = {this.state.error} keyboardType = "number-pad" style = {styles.textInput} placeholder = "Type a number ..."label= "Number" value = {this.state.text} onChangeText={text => {this.setState({text})}}/>
                <Button disabled = {this.state.loading} mode = "contained" onPress = {this.handleSubmit}>
                Submit
                </Button>
                {this.state.loading ? <ActivityIndicator animating = {true} size = 'large' style = {styles.loading} color = {Colors.blue800}/> : null}
                <Portal>
                    <Dialog
                        visible={this.state.visible}
                        onDismiss={this._hideDialog}>
                        <Dialog.Title>Divisors</Dialog.Title>
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
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
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

export default Divisors