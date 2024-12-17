import { useState } from "react";
import { Button, Text, View, StyleSheet} from "react-native";


export default function Contador() {
    const [count, setCount] = useState(0);

    return(
        <View style={ styles.container }>
            <Text>Total de Vezes que o Botão Foi Clicado 👇</Text>
            <Text style= { styles.countText }>{count}</Text>
            <Button 
            title="Aumentar"
            onPress={() => setCount(count+1)}
            color={"#5cd89f"}
            />
            <Button title="Diminuir"
            onPress={ () => setCount(count-1)}
            color={"#ff5c3e"}
            />
            <Button title="Resetar"
            onPress={ () => setCount(0)}
            color={"#ffd36e"}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: 10,
    },
    countText: {
        textAlign: 'center',
        fontWeight: 700,
        fontSize: 40,
        color: '#545454'
    }
});