import React from 'react'

import {View, Image,Text, StyleSheet, SafeAreaView, StatusBar, Pressable, Linking} from 'react-native';

const corGit = '#010409';
const image = 'https://avatars.githubusercontent.com/u/86370873?v=4';
const url = 'https://github.com/Artartur';
const corBola = '#32CD32';

const App = () =>{
    
    const handlePress = async () =>{
        console.log('a')
        const res = await Linking.canOpenURL(url)
        if(res){
            console.log('b')
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
           
           <View style={style.div}>
               <View style={style.coluna}>
                   <Text></Text>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
               </View>

               <View style={style.coluna}>
                     <Text></Text>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
                   <View style={[style.linha,style.bolaClara]}>
                        <Text></Text>
                   </View>
                   <View style={[style.linha,style.bolaClara]}>
                        <Text></Text>
                   </View>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
                   <View style={[style.linha,style.bolaClara]}>
                        <Text></Text>
                   </View>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
                   <View style={[style.linha,style.bolaClara]}>
                        <Text></Text>
                   </View>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
               </View>

               <View style={style.coluna}>
               <Text></Text>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
                   <View style={[style.linha,style.bolaClara]}>
                        <Text></Text>
                   </View>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
                   <View style={[style.linha,style.bolaClara]}>
                        <Text></Text>
                   </View>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
                   <View style={[style.linha,style.bolaClara]}>
                        <Text></Text>
                   </View>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
                   <View style={[style.linha,style.bolaClara]}>
                        <Text></Text>
                   </View>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
                   <View style={[style.linha,style.bolaClara]}>
                        <Text></Text>
                   </View>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
               </View>

               <View style={style.coluna}>
               <Text></Text>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
                   <View style={[style.linha,style.bolaClara]}>
                        <Text></Text>
                   </View>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
                   <View style={[style.linha,style.bolaClara]}>
                        <Text></Text>
                   </View>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
                   <View style={[style.linha,style.bolaClara]}>
                        <Text></Text>
                   </View>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
                   <View style={[style.linha,style.bolaClara]}>
                        <Text></Text>
                   </View>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
                   <View style={[style.linha,style.bolaClara]}>
                        <Text></Text>
                   </View>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
               </View>

               <View style={style.coluna}>
                     <Text></Text>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
                   <View style={[style.linha,style.bolaClara]}>
                        <Text></Text>
                   </View>
                   <View style={[style.linha,style.bolaClara]}>
                        <Text></Text>
                   </View>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
                   <View style={[style.linha,style.bolaClara]}>
                        <Text></Text>
                   </View>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
                   <View style={[style.linha,style.bolaClara]}>
                        <Text></Text>
                   </View>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
               </View>

               <View style={style.coluna}>
                     <Text></Text>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
                   <View style={style.linha}>
                        <Text></Text>
                   </View>
               </View>
          </View> 
           
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
        flex: 1,       
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
    div:{
        marginRight: 240,
        padding: 10,
        flexDirection: 'column',
    },
    coluna:{
        width:19,
        heigth:20,
        margin:0.4,
        borderRadius: 6,
        backgroundColor: 'green',
        flexDirection:'row'
    },
    linha:{
        width:19,
        heigth:20,
        margin:0.6,
        borderRadius: 6,
        backgroundColor: 'green',
    },
    bolaClara:{
        backgroundColor: corBola,
    }

});