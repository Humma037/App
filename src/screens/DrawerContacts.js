// import React, { useReducer } from 'react';
// import { View, Text, Button } from 'react-native';

// const something = { count: 0 };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { count: state.count + 1 };
//     case 'DECREMENT':
//       return { count: state.count - 1 };
//     case 'RESET':
//       return { count: 0 };
//     default:
//       return state;
//   }
// };
// function CounterApp() {
//   const [state, dispatch] = useReducer(reducer, something);

//   return (
//     <View style={{margin: 40}}>
//       <Text style={{color:'#000', textAlign:'center',  padding:30}}>Count: {state.count}</Text>
//       <Button
//         title="Increment"
//         onPress={() => dispatch({ type: 'INCREMENT' })}
//       />
//       <Button
//         title="Decrement"
//         onPress={() => dispatch({ type: 'DECREMENT' })}
//       />
//       <Button
//         title="Reset"
//         onPress={() => dispatch({ type: 'RESET' })}
//       />
//     </View>
//   );
// }

// export default CounterApp;










// useEffect


import React, { useEffect, useState } from 'react';
import { Text, View, Button } from 'react-native';


function WeatherDisplay() {
  const [weather, setWeather] = useState('Sunny');

  useEffect(() => {
    console.log("Weather changed:", weather);
  }, [weather]);

  const makeRainyWeather = () => {
    setWeather ('Rainy');
  };
  const makeSunnyWeather = () => {
    setWeather ('Sunny');
  };
  return (
    <View>
      <Text style={{ color: '#000' }} >Weather Display</Text>
      <Text style={{ color: '#000' }} >Current weather: {weather}</Text>

      <Button title="make it rainy" onPress ={makeRainyWeather}/> 
      <Button title="make it sunny" onPress={makeSunnyWeather}/>
    </View>
  );
}

export default WeatherDisplay;
