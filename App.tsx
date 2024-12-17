import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-paper';
import Contador from './src/components/Contador';
import CardContent from 'react-native-paper/lib/typescript/components/Card/CardContent';

export default function App() {
  return (
    <SafeAreaView style={ styles.container }>
      <Card style={ styles.cardContent}>
        <View>
          <Contador />
        </View>
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#545454',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContent: {
    padding: 20,
  }
});
