import React, { Component } from 'react';
import { Text,
SafeAreaView,
View,
ImageBackground,
StyleSheet,
Pressable,
Image,
Modal } from 'react-native';




const Opciones = () =>{
    return (
     
      <View style={style.container}>
        <View style={style.icons}>
        <Image style={style.imagenes} source={require('../assets/creditCard.png')}/>
        <Text style={style.texto}>Tarjetas Digitales</Text>
        
        </View>
        <View style={style.icons}>
        <Image style={style.imagenes} source={require('../assets/transferir1.png')}/>
        <Text style={style.texto}>Transferir</Text>
        </View>
        <View style={style.icons}>
        <Image style={style.imagenes} source={require('../assets/transferir.png')}/>
        <Text style={style.texto}>Historial</Text>
        </View>
      </View>
     
    );
  }

  const style=StyleSheet.create({
        container:{
            width:370,
            height:220,
            flexDirection:'row',
            justifyContent:'space-around',
            marginHorizontal:20,
            marginTop:70,
           
        },
        icons:{
            backgroundColor:'#005758',
            width:70,
            height:70,
            borderRadius:100,
            
        },
        imagenes:{
            width:40,
            height:40,
            marginLeft:15,
            marginTop:15
        },
        texto:{
            marginTop:30,
            fontFamily:'Comme',
            fontSize:15
        }
  })
export default Opciones;