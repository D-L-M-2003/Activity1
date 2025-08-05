import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  return (
    
    <View style={styles.welcomeText}>
      <Text>Activity 1, David Manley</Text>
      <StatusBar style="auto" />
      <Text style = {styles.welcomeText}>Welcome to your Activity 1 app!</Text>
    <Text>Enter Name: </Text>
    <TextInput placeholder= "First Name"/>
    <Text>Enter Surname: </Text>
    <TextInput placeholder="Surname"/>
    <Button title = "add user"/>

    </View>

  );
}
const styles = StyleSheet.create({
  welcomeText: {
    paddingTop: 40,
    color: 'purple',
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center'
  }
  },
);



