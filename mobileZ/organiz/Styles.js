import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({

    background:{
        flex: 1,
        backgroundColor: 'white',
    },

    containerMenu:{
        flex: 1,
        backgroundColor: '#228B22',
        padding: 20,

    },

    logo:{
        width:150,
        height: 80,
    
    },

    container:{
        flex:1,
        marginLeft: 40,
        marginBottom: 285,
        marginTop: 20,
        width:'90%',
        padding:30,
  
      },

      login:{
        fontSize: 40,
        textAlign: 'center',
        color: '228B22',
        padding: 38,
        fontFamily: 'Cambria, Cochin, Georgia, Times',
        fontWeight: 'bold',

      },
  
      inputs:{
          backgroundColor: '#fff',
          width: '90%',
          color: '#222',
          marginBottom: 15,
          fontSize: 17,
          borderRadius: 5,
          padding:10,
          borderBottomWidth: 1,
          borderColor: 'black',
      },
  
      btnSubmit:{
          backgroundColor: '228B22',
          justifyContent: 'center',
          marginBottom: 15,
          alignItems: 'center',
          width: '90%',
          height: 45,
          borderRadius: 5,
      },
  
      submitTxt:{
          color: '#fff',
          fontSize: 18,
      },
  
})