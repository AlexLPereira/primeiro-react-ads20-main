import React from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native'
import React, { useState } from 'react';
const [lembrete, setLembrete] = useState ('');


const LembreteInput = (props) => {
return (
<View style={styles.lembreteView}>
{/* usuário irá inserir lembretes aqui*/}
<TextInput
placeholder="Lembrar..."
style={styles.lembreteInputText}
onChangeText={capturarLembrete}
value={lembrete}
/>
<Button
title="+"
onPress={adicionarLembrete}
/>
</View>
);
}
const styles = StyleSheet.create({
lembreteView: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
marginBottom: 8
},
lembreteInputText: {
width: '80%',
borderBottomColor: 'black',
borderBottomWidth: 1,
padding: 2
}
}
);
export default LembreteInput;