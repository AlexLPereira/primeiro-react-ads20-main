import { StatusBar } from 'expo-status-bar';
import { Button, EventSubscriptionVendor, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';
import { Component } from 'react';
import LembreteItem from './components/LembreteItem';

export default function App() {
  const[lembrete, setLembrete]=useState('');
  const[lembretes, setLembretes]=useState([]);
  const[contadorLembretes, setContadorLembretes]=useState(0);

  //captura texto digitado
  const capturarLembrete = (lembrete) => {
    setLembrete(lembrete)
  };

  //para adicionar o que foi digitado
  const adicionarLembrete = (Lembrete) => {
    setLembretes((lembretes) =>{ 
      console.log(lembretes);
      setContadorLembretes(contadorLembretes + 1);
      return [...lembretes, {key: contadorLembretes.toString(), value: lembrete}];
    });
  }

  return (
    <View style={styles.telaPrincipalView}>
      <LembreteInput onAdicionarLembrete={adicionarLembrete} />
      <View style={styles.lembreteView}>
        {/*usuário irá inserir lembretes aqui*/}
        <TextInput 
          placeholder="Lembrar..." 
          style={styles.lembreteInputText}
          onChangeText={capturarLembrete}
          value={lembrete} />
        <Button
          title="+"
          onPress={() => props.onAdicionarLembrete(lembrete)}
          />
      </View>
      <FlatList
        data={lembretes}
        renderItem={
          lembrete=>(
            <View style={styles.itemNaLista}>
              <LembreteItem 
              lembrete={lembrete.item.value}
              onDelete={() => {console.log("item tocado...")}}
              />
            </View>
          )
        }
      />  
    </View>
  );
}


const removerLembrete = (keyASerRemovida) => {
  setLembretes (lembretes => {
  return lembretes.filter ((lembrete) => {
  lembrete.key !== keyASerRemovida
  })
  });
  };

const styles = StyleSheet.create({
  telaPrincipalView: {
    padding: 50
  },
  lembreteView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  lembreteInputText: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 2,
    marginBottom: 8
    },
    itemNaLista: {
      padding: 12,
      backgroundColor: '#CCC',
      borderColor: "#000",
      borderWidth: 1,
      marginBottom: 8,
      borderRadius: 8
    }
})
