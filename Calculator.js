import React,{useState} from 'react';
import { Text, View, TextInput,Button } from 'react-native';

const YourApp = () => {
const [number1, setNumber1]= useState("")
const [number2, setNumber2]= useState("")
const [final, setFinal] = useState("")
function add ()
{

setFinal(Number(number1)+Number(number2))
}
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        Addition is : {final}
      </Text>

      <TextInput 
      value={number1}
      onChangeText={(e)=>setNumber1(e)}
      placeholder="Enter number1"
       />
       <TextInput
       value={number2}
       onChangeText={(e)=>setNumber2(e)}
       placeholder="Enter number2"
        />
        <Button
        onPress={add}
        title="Submit"
         />
    </View>
  );
}

export default YourApp;
