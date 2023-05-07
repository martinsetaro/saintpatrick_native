import React, { useEffect } from 'react';
import { Text,
SafeAreaView,
View,
ImageBackground,
StyleSheet,
Pressable,
Image, } from 'react-native';
import { useNavigation } from '@react-navigation/native'


const Home = () =>{

const navigation = useNavigation();

    const handlerIniciar = ()=>{
      navigation.navigate('Login')
    }

    return (
     <SafeAreaView style={style.mainContainer}>
      <ImageBackground
      style={style.backgroundImagen}
      source={require('../assets/back2.png')}
      resizeMode='cover'
      >
       <Image
      style={style.imagen} 
      source={require('../assets/logo1.png')}
      />
      <Text style={style.titulo}>Saint Patrick Bank</Text>
      <Text style={style.parrafo}>Administra tus finanzas desde cualquier lugar con nuestra app bancaria</Text>
      <Pressable
      onPress={handlerIniciar}
      style={style.btn}>
        <Text style={style.textoBtn}>Inicia sesion</Text>
      </Pressable>
       </ImageBackground>
     </SafeAreaView>
    );
  }


  const style = StyleSheet.create({
mainContainer:{
flex:1,

},
backgroundImagen:{
flex:1
},
imagen:{
    marginTop:40,
    width:120,
    height:150,
    marginHorizontal:150
},
titulo:{
  fontFamily:'Comme',
  fontWeight:'700',
  color:'#fff',
  fontSize:30,
  textAlign:'center',
  marginTop:20
},
parrafo:{
  fontFamily:'Comme',
  color:'#fff',
  fontSize:25,
  marginTop:220,
  textAlign:'center'
},
btn:{
  backgroundColor:'#fff',
  width:'60%',
  borderRadius:10,
  height:40,
  marginHorizontal:90,
  marginTop:40
},
textoBtn:{
  color:'#005758',
  textAlign:'center',
  fontSize:20,
  marginTop:5,
  fontWeight:'600'
}
    
  })
export default Home;