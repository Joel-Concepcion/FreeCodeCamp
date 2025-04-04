import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Testimonio from './CompTesti/Testimonio';

export default function App() {
  
  return (
    <View style={styles.container}>

      <View style={styles.Img}> 
     <Image style={styles.containerImg} source={require('./image1/FreeCodeCamp.png')}/>
     </View>

     <Text style={styles.tex12}>Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp:</Text>

     <ScrollView style={styles.scroll1}>
        <Testimonio
        nombre="Shawn Wang"
        pais="Singapur"
        cargo="Ingeniero de Software"
        empresa="Amazon"
        imagen={require('./image1/tipo1.png')}
        testimonio="Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a tiempo completo."
        />
         <Testimonio
        nombre="Sarah Chima"
        pais="Nigeria"
        cargo="Ingeniera de Software "
        empresa="ChatDesk"
        imagen={require('./image1/tipo2.png')}
        testimonio="FreeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble."
        />
        <Testimonio
        nombre="Emma Bostian"
        pais="Suecia"
        cargo="Ingeniera de Software"
        empresa="Spotify"
        imagen={require('./image1/Tipo3.png')}
        testimonio="Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."
        />      
     </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFAFA',
    alignItems: 'center',
    justifyContent: 'center',
  },

  Img:{
    backgroundColor: '#1b1b32',
    width : '100%',
    height: 80,
    marginTop: 40,
    alignItems: 'center',
  },
  containerImg:{
    width : 350,
    height: 40,
    marginTop: '6%',
  },
  tex12: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 58,
    marginTop: 15,
    maxWidth: 500,
    minWidth: 450, 
  },
  containeDImg: {
    width:'100%',

  },
  scroll1:{
    marginTop: '-10%',
    width: '100%',
  },
});