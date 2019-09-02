import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet,Picker } from 'react-native'

class Signup1 extends Component {
    state = {
        Country: '',
        phone: ''
    }
    handleCountry = (text) => {
        this.setState({ Country: text })
    }
    handlePhone = (number) => {
        this.setState({ phone: number })
    }
    handlePlaceholder = (text) =>{
        if(text=== undefined || text ===0){

            return "+94";
        }
        else{
            return "email address";
        }
    }
    login = (country, phone) => {

        alert('Country: ' + country + ' Phone: ' + phone)
    };
    render() {
        return (
            <View style = {styles.container}>
                <View style={styles.veiwinput}>
                <Picker style={styles.pickerInput}
                        underlineColorAndroid = "transparent"
                        selectedValue={this.state.language}
                        onValueChange={(itemValue, itemPosition) =>
                            this.setState({language: itemValue, choosenIndex: itemPosition})}
                >
                    <Picker.Item label="Srilanka" value="java" />
                    <Picker.Item label="Maldives" value="js" />
                    <Picker.Item label="India" value="rn" />
                </Picker>
                </View>
                {/*<Text style={styles.textStyle}> {"Index ="+this.state.choosenIndex}</Text>*/}
                {/*<TextInput style = {styles.input}*/}
                           {/*underlineColorAndroid = "transparent"*/}
                           {/*placeholder = "Srilanka"*/}
                           {/*resizeOnWindow = "Auto"*/}
                           {/*placeholderTextColor = "#9a73ef"*/}
                           {/*autoCapitalize = "none"*/}
                           {/*onChangeText = {this.handleCountry}/>*/}

                <TextInput style = {styles.input}
                           underlineColorAndroid = "transparent"
                           placeholder = {this.handlePlaceholder(this.state.choosenIndex)}
                           placeholderTextColor = "#949580"
                           autoCapitalize = "none"
                           onChangeText = {this.handlePhone}/>
                <TouchableOpacity
                    style = {styles.submitButton}
                    onPress = {
                        () => this.login(this.state.choosenIndex, this.state.phone)
                    }>
                    <Text style = {styles.submitButtonText}> Next </Text>
                </TouchableOpacity>

            </View>
        )
    }
}
export default Signup1

const styles = StyleSheet.create({
    container: {
        paddingTop: 180
    },
    textStyle:{
        margin: 24,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    veiwinput: {
        margin: 15,
        height: 40,
        backgroundColor : '#fff2f9',
        color: '#00b489',
        borderWidth: 1,
        borderColor : '#3e7dff'
    },
    pickerInput:{
        margin: 3,
        height: 40,
        // backgroundColor : '#4c50ff',
        color: '#00b489',
        borderWidth: 1,
        borderColor : '#3e7dff'
    },
    input: {
        margin: 15,
        height: 40,
        backgroundColor : '#fff2f9',
        color: '#00b489',
        borderWidth: 1,
        borderColor : '#3e7dff'
    },
    submitButton: {
        backgroundColor: '#9c66ed',
        marginLeft: 230,
        paddingTop:8,
        width: 70,
        height: 35,
        textAlign: 'center',
    },
    submitButtonText:{
        color: 'white',
        textAlign: 'center',
    }
})