import React from 'react';
import {View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable, Linking} from 'react-native';

const colorGitHubBg = '#161b22';
const imageProfile = 'https://avatars.githubusercontent.com/u/62121038?v=4';
const colorBtnProfile ='#24292f';
const urlGitHub = 'https://github.com/franceslyhebe';


const App = ()=>{

    const handlePressGoToGitHub = async ()=>{
        const res = await Linking.canOpenURL(urlGitHub);
        if(res){
            await Linking.openURL(urlGitHub)
        }
        
    };

    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGitHubBg} barStyle='light-content' />
            <View style={style.content}>

                <Image style={style.avatar} source={{uri: imageProfile}} accessibilityLabel='Imagem de perfil'/>
                
                <Text style={[style.text, style.name]} accessibilityLabel='Nome Francesly Hebe'>Francesly Hebe</Text>
                
                <Text style={style.defaultText} accessibilityLabel='Software Enginner'>Software Engineer</Text>
                
                <Text style={style.defaultText} accessibilityLabel='Mobile Developer'>Mobile Developer</Text>

                <Pressable onPress={handlePressGoToGitHub}>
                <View style={style.button}>
                    <Text style={[style.defaultText, style.textButton]}> Open in Github </Text>
                </View>
                </Pressable>
            </View>

        </SafeAreaView>

    );
};

export default App;

const style = StyleSheet.create({
    
    container: {
        backgroundColor: colorGitHubBg,
        flex: 1, //expandir background pra tela inteira
        justifyContent: 'center',
    },
    content:{
        alignItems: 'center',
        padding: 25,

    },
    avatar: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: 'gray',       
    },
    defaultText:{
        color:'gray'
    },
    name:{
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
    },
    button:{
        marginTop: 20,
        backgroundColor: colorBtnProfile,
        borderColor: '#484f58',
        borderWidth: 1,
        borderRadius: 5,
        height: 30,
        width: 200,
    },
    textButton:{
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },
});