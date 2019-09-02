import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput,Picker,StyleSheet,ImageBackground,FlatList, ActivityIndicator,Dimensions,Button,Image,Alert} from 'react-native'

class Signup1 extends Component {
    state = {
        Country: '',
        phone: ''
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
            <ImageBackground source={require('../assets/darkned.jpg')} style={styles.Background} resizeMode={'stretch'}>
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
                <TouchableOpacity style={styles.Icon} activeOpacity={0.5}>
                    <Image
                        source={require('../Images/icon.png')}
                        //Image Style
                        style={styles.IconStyle}
                    />

                </TouchableOpacity>
                <TouchableOpacity style={styles.SignIcon} activeOpacity={0.5}>
                    <Image
                        source={require('../Images/signup1.png')}
                        //Image Style
                        style={styles.ImageIconStyle}
                    />

                </TouchableOpacity>

            </View>
                <View>
                    <Text style={styles.q1} >Already Registered ? </Text><Text style={styles.q2}>SignIn</Text>
                </View>
            </ImageBackground>
        )
    }
}
export default Signup1

const styles = StyleSheet.create({
    container: {
        paddingTop: 220
    },
    q1:{
        marginLeft:35,
        marginTop:180,
        fontWeight:'bold',
        fontSize:20,
        color:"#270646"
    },
    q2:{
        marginTop:-29,
        marginLeft:230,
        fontWeight:'bold',
        fontFamily:'sans-serif',
        fontSize:22,
        textDecorationLine: 'underline',
      color:"#ba102c"
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
    },
    Icon:{
        flexDirection: 'column',
        alignItems: 'center',

        // borderWidth: 0.5,
        height: 120,
        width: 120,
        borderRadius: 5,
        marginLeft: 125,
        marginTop: -355
    },
    IconStyle: {
        padding: 10,
        height: '85%',
        width: '65%',
        resizeMode: 'stretch',
    },
    SignIcon:{
        flexDirection: 'column',
        alignItems: 'center',

        // borderWidth: 0.5,
        height: 100,
        width: 100,
        borderRadius: 5,
        marginLeft: 125,
        marginTop:-20
    },
    ImageIconStyle: {
        padding: 10,
        height: 60,
        width: 170,
        resizeMode: 'stretch',
    },
    Background:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height
    },
})

