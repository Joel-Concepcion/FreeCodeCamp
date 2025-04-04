import { StyleSheet, Text, View, Image } from 'react-native';

function Testimonio({ imagen, testimonio, nombre, pais, cargo, empresa }) {
  return (
    <View style={styles.container}>

      <View style={styles.containerFoto}>
        <Image style={styles.foto} source={imagen} />
      </View>

      <View style={styles.containerTestimonio}>
            
            <Text style={styles.contenedordt}>
                <Text style={styles.nombre}>{nombre}</Text> en {pais}
            </Text>

            <Text style={styles.contenedordt}>
                <Text style={styles.cargo}>{cargo}</Text> en <Text style={styles.empre}>{empresa}</Text>
            </Text>


            <Text style={styles.contenedordt}>
            <Text style={styles.testimonio}>"{testimonio}"</Text>
            </Text>

       
      </View>
    </View>
  );
}
export default Testimonio;

const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'row',
            minHeight:250,
            backgroundColor: '#fff',
            marginTop: 100,
            shadowColor:'#000',
            

            shadowColor: "blue",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 15,
          },

    
        containerFoto: {
            flex: 1,
            alignSelf: 'center',
    
        },
        containerTestimonio: {
            flex: 2,
            alignSelf: 'center',
        },
        foto: {
            height: '100%',
            width: 200,
            marginLeft: -40,
        },
        contenedordt: {
            marginVertical: 5, 
            width: 220, 
            fontSize: 12,
            alignSelf: 'center',
            marginLeft: 40,
            fontStyle: 'italic',
          },
          nombre: {
            fontWeight: 'bold',
            fontSize: 12, 
            textAlign: 'center',
          },
          cargo: {
            fontSize: 12,
            textAlign: 'center',
          },
          empre: {
            fontWeight: 'bold',
            fontSize: 12,
            textAlign: 'center',
          },
          testimonio: {
            fontSize: 12,
            textAlign: 'center',
            marginVertical: 5,
          },
      
    });