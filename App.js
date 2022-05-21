import React from 'react'

import {View, Image,Text, StyleSheet, SafeAreaView, StatusBar, Pressable, Linking, FlatList} from 'react-native';
import Bolinha from './Bolinha';

const corGit = '#010409';
const image = 'https://avatars.githubusercontent.com/u/86370873?v=4';
const url = 'https://www.youtube.com/watch?v=FzG4uDgje3M';


const App = () =>{
    
    const handlePress = async () =>{
        const res = await Linking.canOpenURL(url)
        if(res){
            await Linking.openURL(url)
        }
    } 

    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor = 'white' barStyle="ligth-content"/>
        <View style={style.content}>
        <Image accessibilityLabel = "Foto de perfil de Artur" style = {style.avatar} source={{uri: image}}/>
            <Text accessibilityLabel="Nome: Artur Souza" style={[style.text, style.nome]}>Artur Souza</Text>
            <Text accessibilityLabel="Nome de usuario: ArtArtur" style={[style.text, style.nick]}>ArtArtur</Text>
            <Text accessibilityLabel="Descricao: " style={[style.text, style.descricao]}>Analysis and systems development student | Full-Stack Student</Text>

            <Bolinha/>

            <Pressable onPress={handlePress}>

            <View style={style.botao}>
                <Text style={[style.text, style.textBotao]}> Open in Github </Text>
            </View>
            </Pressable>

        </View>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container:{
        backgroundColor: corGit,
        flex: 1, //Expande para a tela inteira         
        justifyContent: 'center',
        
    },
    text:{
        color: '#C9D1D9', 
    },
    avatar:{
        height: 200,
        width:200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 3,        
    },
    content:{
        alignItems: 'center',
        padding:20,
    },
    nome:{
        fontSize: 25,
        fontWeight: 'bold',
        marginTop:20,
    },
    nick:{
        fontSize:22,
        color:'#4F565E',
    },
    descricao:{
        fontSize:20,
        fontWeight: 'bold'
    },
    botao:{
        backgroundColor: '#4F565E',
        borderRadius: 10,
        padding: 20,
        marginTop: 20,
    },
    textBotao:{
        fontWeight: 'bold',
        fontSize: 16,
    },
    

});