import React, { useState , useEffect } from 'react';
import { Text,
SafeAreaView,
View,
ImageBackground,
StyleSheet,
Pressable,
TextInput,
Image,
Alert,
Modal } from 'react-native';
import logo from '../assets/logo1.png'
import { useNavigation } from '@react-navigation/native';

const Login = () =>{

const[user,setUser] = useState('');
const[ pass,setPass] = useState('');
const [auth,setAuth] = useState(true)

const navigation = useNavigation();




useEffect(()=>{

if(pass.length > 1 && user.length > 1){
    setAuth(false);

}
},[user,pass])







const handleIngresar = () => {


    if (pass === '' || user === '') {
      Alert.alert(
        'No puede llevar campos vacios',
        'Verifique los datos ingresados.',
        [
          {
            text: 'Cancelar',
            style: 'cancel',
          },
        ]
      );
    }
     else {
        navigation.navigate('Perfil')
     }
      
      
    
  };










    return (
     <SafeAreaView>
      <View style={style.container}>
        <Text style={style.texto}>Bienvenido!</Text>
        <Image 
        style={style.imagenLogo}
        source={logo} />
        <Text style={style.subTitulo}>Inicia sesión en tu cuenta Saint Patrick</Text>
        <Text style={style.label}>Numero de tarjeta</Text>
        <TextInput
        keyboardType='numeric'
        value={user}
        onChangeText={setUser}
        style={style.input}/>
        <Text style={style.label}>Contraseña</Text>
        <TextInput
        keyboardType='numeric'
        secureTextEntry={true}
        value={pass}
        onChangeText={setPass}
        style={style.input}/>

        <Pressable
        disabled={auth}
        style={[style.btn ,auth ? {opacity:0.5}: {opacity:1}]}
        onPress={handleIngresar}
        >
            <Text
            style={style.textoBtn}
            >Entrar</Text>
        </Pressable>

      </View>
     </SafeAreaView>
    );
  }
  const style = StyleSheet.create({


    texto:{
        fontSize:40,
        fontFamily:'Comme',
        textAlign:'center',
        marginTop:30,
        fontWeight:'700',
        color:'#005758',
      
    },
    subTitulo:{
        fontSize:20,
        fontFamily:'Comme',
        textAlign:'center',
        color:'#005758',
        marginTop:40,
        marginBottom:70
        
    },
    imagenLogo:{
        width:110,
        height:140,
        marginHorizontal:150,
        marginTop:30,
       
    },
    label:{
        fontFamily:'Comme',
        fontSize:15,
        color:'#1d1d1d',
        marginHorizontal:20,
        marginBottom:10
    },
    input:{
        borderColor:'#7d7d7d',
        borderWidth:.5,
        width:'90%',
        marginHorizontal:20,
        marginBottom:20,
        paddingLeft:10,
        fontSize:15,
        borderRadius:15
        
    },
    btn:{
        backgroundColor:'#005758',
        width:'60%',
        marginHorizontal:90,
        marginTop:40,
        height:40,
        borderRadius:20
    },
    textoBtn:{
        color:'#fff',
        fontFamily:'Comme',
        fontWeight:'700',
        textTransform:'uppercase',
        textAlign:'center',
        marginTop:5,
        fontSize:20
    }
  })
export default Login;