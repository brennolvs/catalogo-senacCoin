import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { api } from './src/services';
import { Feather } from '@expo/vector-icons';

import Header from './src/components/header';
import Card from './src/components/card';
import Filtro from './src/components/filter/filtros';

const senacCoin = [
  {
    id: 1,
    data: '05-02-2023',
    titulo: 'Titulo',
    valor: 20
  }
]


export default function App() {
  const [movimentacoes, setMovimentacoes] = useState([]);
  const [dropdown, setDropdown] = useState(false);
  useEffect(() => {
    async function getSenacCoin() {
      const response = await api.get('/api/SenacCoinMovimentacao');

      setMovimentacoes(response.data);
      console.log(response.data);
    }

    getSenacCoin();
  }, []);

const drop = () => {
  if  (dropdown == false){
    setDropdown(true)
  }else{
    setDropdown(false)
  console.log(dropdown)
  }
  
}

  return (
    <View>
      <Header />
      <View style={styles.botoes}>
        <TouchableOpacity style={styles.buttonFilter} onPress={drop}>
          <Text style={{ color: 'blue', textAlign: 'center', backgroundColor: 'white', marginLeft: 5}}>Filtros</Text>
          <Feather
            name="chevron-down"
            color="blue"
            size={20}
            style={{ marginLeft: 5 }}

          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonCart}>
          <Text style={{ color: 'blue', textAlign: 'center' }}>Carrinho</Text>
          <Feather
            name="shopping-cart"
            color="blue"
            size={20}
            style={{ marginLeft: 5 }}
          />
        </TouchableOpacity>

      </View>

      <StatusBar style="auto" />

      <View style={styles.container}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </View>
      {dropdown && (
        <View style={styles.dropdown}>
        <TouchableOpacity><Text style={{ color: 'blue' }}>Filtro 1</Text></TouchableOpacity>
        <TouchableOpacity><Text style={{ color: 'blue' }}>Filtro 2</Text></TouchableOpacity>
        <TouchableOpacity><Text style={{ color: 'blue' }}>Filtro 3</Text></TouchableOpacity>
        <TouchableOpacity><Text style={{ color: 'blue' }}>Filtro 4</Text></TouchableOpacity>
      </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingVertical: 5,
    marginTop: 20,
  },
  buttonFilter: {
    width: 70,
    textAlign: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 15,
  },
  buttonCart: {
    flexDirection: 'row',
  },
  dropdown: {
    backgroundColor: 'white',
    position: 'absolute',
    width: 109,
    height: 100,
    marginLeft: 30,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'white',
    zIndex: 3,
    top:200,
},
});
