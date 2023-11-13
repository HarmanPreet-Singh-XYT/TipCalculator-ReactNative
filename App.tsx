import React from 'react';
import {Text, TextInput, View, StyleSheet, Button} from 'react-native';
const App = () => {
  const [bill, setBill] = React.useState<string>('');
  const [tip, setTip] = React.useState<string>('');
  const [result, setResult] = React.useState<number>(0);
  const calculateTotal = (bill:any,tip:any):void => {
    const billAmount:number = parseFloat(bill) || 0;
    const tipPercentage:number = parseFloat(tip) || 0;
    const totalAmount:number = billAmount + (billAmount * tipPercentage / 100);
    setResult(totalAmount);
  };
  return (
    <View style={styles.container}>
      <View style={styles.container1} />
      <View style={styles.container2}>
          <View style={styles.outer}>
            <Text style={styles.title} >Tip Calculator</Text>
            </View>
          <Text style={styles.p} >Enter the bill amount and tip percentage to calculate the total</Text>
          <Text style={styles.p}>Bill Amount: </Text>
          <TextInput inputMode='numeric' keyboardType='number-pad' onChangeText={(e)=>setBill(e)} placeholder='405.5' style={styles.inputfield} />
          <Text style={styles.p}>Tip percentage: </Text>
          <TextInput inputMode='numeric' keyboardType='number-pad' onChangeText={(e)=>setTip(e)} placeholder='5' style={styles.inputfield} />
          <Button color='green' onPress={()=>calculateTotal(bill,tip)} title="Calculate" />
          <Text>Total Amount: {result}</Text>
      </View>
      <View style={styles.container3} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    width: '100%',
    height: '100%',
    display: 'flex',
    padding: 20,
    justifyContent: 'center',
  },
  container1: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  container2: {
    flex: 10,
    minHeight: 400,
    maxHeight: 600,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    gap: 35,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    // Elevation for Android
    elevation: 5,
  },
  container3: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  title: {
    color: 'black',
    fontSize: 38,
  },
  outer: {
    display: 'flex',
    alignItems: 'center',
  },
  p: {
    color: 'black',
  },
  inputfield: {
    width: '90%',
    borderRadius: 10,
    borderWidth: 1,
  },
});
export default App;