import * as React from 'react';
import { StyleSheet, Text, Image, View, Button, TouchableOpacity } from 'react-native';


export default function MyComponent({ data }) {
    const [active, setActive] = React.useState(false);
    const filtros = ["Filtro 1", "Filtro 2", "Filtro3", "FIltro 4"]

    // const valor =data.valor;
    // console.log(valor)

    return (

        <View style={styles.card}>
            <View>

                {<Image style={styles.image} source={require('../icon/canetaAzul.png')} />}
            </View>


            <View>
                <View style={styles.titulo}>

                    <View style={{ marginRight: 40 }}>
                        <Text style={{ fontWeight: 'bold' }}>Caneta do Senac</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View >
                            {<Image style={styles.senacCoin} source={require('../icon/chinese-coin.png')} />}
                        </View>

                        <View>
                            <Text style={{ fontWeight: 'bold' }}>250</Text>
                        </View>

                    </View>
                </View>

                <View style={styles.subtitle}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Sobre</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Comprar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    card: {
        // justifyContent: 'space-between',
        flexDirection: 'row',
        height: 70,
        borderWidth: 0.22,
        width: 350,
        marginTop: 20
    },
    image: {
        width: 120,
        height: 68,
        borderWidth: 1,
        marginRight: 10
    },
    titulo: {
        flexDirection: 'row',
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 5,
        justifyContent: 'space-between'
    },
    subtitle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    coin: {
        marginRight: 30,
        marginTop: 34,
        fontWeight: 'bold',
        color: 'green'
    },
    box: {
        // ...
        shadowColor: '#000',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 10,
    },
    button: {
        width: 70,
        backgroundColor: 'gray',
        borderRadius: 40,
        textAlign: 'center',

    },
    senacCoin: {
        width: 20,
        height: 20,
        marginRight: 5
    },
    filtros: {

    }
});