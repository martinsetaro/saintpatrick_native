import React, { Component } from 'react';
import { Text,
SafeAreaView,
View,
ImageBackground,
StyleSheet,
Pressable,
Image,
Modal } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Opciones from '../components/Opciones';

const Perfil = () =>{



    return (
     <SafeAreaView style={style.mainContainer}>
      <LinearGradient
        colors={['#005758', '#007d72', '#00a584']}
        style={style.gradient}
      >
      <Image style={style.imagen} source={require('../assets/logo1.png')}/>
      <Text style={style.textoNombre}>Bienvenido, <Text style={style.textoSpan}>Gabriel!</Text></Text>
      <View style={style.container}>
        <Text style={style.titulo}>Cuenta Saint Patrick 1</Text>
        <Text style={style.infoSaldo}>$ 40555,75</Text>
        <Text style={style.subTituloSaldo}>Saldo disponible</Text>
        <View style={style.infoCuenta}>
             <View style={style.infoNumeroCuenta}>
              <Text style={style.textoInfoCuenta}>Cuenta</Text>
              <Text>00393948349</Text>
             </View>
             <View style={style.infoNumeroCuenta}>
              <Text style={style.textoInfoCuenta}>N° tarjeta</Text>
              <Text>xxx-8349</Text>
             </View>
        </View>
        <Opciones/>
      </View>
      </LinearGradient>
     </SafeAreaView>
    );
  }

  const style = StyleSheet.create({
    mainContainer:{
      flex:1,
     
     
    },
    container:{
      backgroundColor:'#fff',
      marginTop:50,
      height:700,
      borderTopRightRadius:50,
      borderTopLeftRadius:50
    },
    titulo:{
      fontFamily:'Commer',
      color:'#1d1d1d',
      fontSize:20,
      fontWeight:'700',
      textAlign:'center',
      marginTop:30
    },
    infoSaldo:{
      fontFamily:'Commer',
      color:'#1d1d1d',
      fontSize:45,
      textAlign:'center',
      marginTop:20
    },
    subTituloSaldo:{
      fontFamily:'Commer',
      color:'#1d1d1d',
      fontSize:15,
      textAlign:'center',
      
    },
    imagen:{
      width:40,
      height:50,
      marginTop:20,
      marginLeft:40
    },
    textoNombre:{
      fontSize:25,
      color:'#fff',
      fontFamily:'Comme',
      marginLeft:40,
      marginTop:30
    },
    textoSpan:{
      fontSize:25,
      color:'#fff',
      fontFamily:'Comme',
      fontWeight:'700'
    },
    gradient:{
      flex:1
    },
    infoCuenta:{
       width:370,
       height:80,
       marginTop:30,
       borderWidth:1,
       marginHorizontal:20,
       borderColor:'#005758',
       paddingTop:10,
       borderRadius:20
    },
    infoNumeroCuenta:{
    width:330,
    marginHorizontal:20,
    height:50,
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:-20
    },
    textoInfoCuenta:{
      fontWeight:'700',
      
    },
    
  })


export default Perfil;