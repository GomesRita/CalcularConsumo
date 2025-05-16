import * as React from 'react';
import { TextInput, Text, Button } from 'react-native-paper';
import { useState } from 'react';
import { StyleSheet, View} from 'react-native';

export default function App() {
  const [text, setText] = React.useState("");
  const [text2, setText2] = React.useState("");
  const [litros, setLitros] = useState<number>(0)
  const [km, setKm] = useState<number>(0)
  const [consumo, setConsumo] = useState<any>(0)

  const calcular = (): any => {
      if( km == 0 && litros == 0){
        setConsumo(0)
      }if( km == 0 && litros > 0){
        setConsumo('Informe os km rodados')
      }
      else{
        setConsumo(km/litros)
      } 
  }
  return (
    <View style={styles.container}>
       {consumo !== null && <Text style={styles.text} variant="headlineLarge" >{consumo}</Text>}
      <TextInput placeholder='Km rodados'  style={styles.input} keyboardType='numeric' value={text} onChangeText={text => {setText(text); setKm(parseInt(text) || 0)}}/>
      <TextInput placeholder='Litros gastos' style={styles.input}  keyboardType='numeric' value={text2} onChangeText={text => {setText2(text); setLitros(parseInt(text) || 0)}}/>  
      <Button mode="contained" onPress={calcular}> Calcular </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    width: 200,
    height: 50,
    marginBottom: 10
  },
  text:{
    marginBottom: 10
  }
});
