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
import AsyncStorage from '@react-native-async-storage/async-storage';


const Login = () =>{

const[user,setUser] = useState('');
const[ pass,setPass] = useState('');
const [auth,setAuth] = useState(true)
const [ datos,setDatos]= useState([])


const navigation = useNavigation();




useEffect(()=>{

if(pass.length > 1 && user.length > 1){
    setAuth(false);

}
},[user,pass])

async function comprobarDatos(){

 fetch('http://10.0.2.2:4001/usuario',{method:'GET',headers:{'Content-type':'application/json',Accept: "application/json"}})
 .then(response => response.json())
 .then(data => {
  setDatos(data)
  
}).catch(err => console.log(err))

}



useEffect(()=>{
  comprobarDatos();
},[])




async function accesoVerificar(){
  const verificarCuenta = datos.find( dato =>  dato.numerocuenta === user)
  const verificarCuentaString = JSON.stringify(verificarCuenta);
  AsyncStorage.setItem('userData',verificarCuentaString)
        .then(() => console.log('Componente verificarCuenta guardado en AsyncStorage.'))
        .catch((error) => console.error(error));

  
  if(Number(verificarCuenta.pin) == pass && verificarCuenta.numerocuenta == user){
       Alert.alert(
        'Login correcto',)
        setTimeout(() => {
         navigation.navigate('Perfil')
        }, 3000);
        
        
  }
   else {
    Alert.alert(
      'Verifique , uno de los datos es incorrecto')
      
     
      
   }
}



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
    
    if(user.length < 16 || user.length > 16){
      Alert.alert("la cuenta debe llevar 16 caracteres")
    }else if(pass.length < 4 || pass.length > 4){
      Alert.alert("el pin debe de ser de 4 caracteres")
    }else{
      accesoVerificar()
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
        <Text style={style.label}>Pin</Text>
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