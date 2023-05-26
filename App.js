// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.main}>
//         <View style={styles.info}>
//         </View>
//         <View style={styles.addbox}>
//           <View style={styles.buttonbox}>

//           </View>
//         </View>
//       </View>
//       <Text>룽투투다</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     width: '100%',
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   main: {
//     width: '100%',
//     height: 764,
//     position: 'absolute',
//     bottom: 0,
//     display: 'flex',
//     justifyContent: 'center',
//     backgroundColor: 'aqua',
//   },
//   info: {
//     width: 360,
//     height: 100,
//     borderRadius: 15,
//     backgroundColor: '#1867FF',
//   },
//   addbox: {
//     width: '100%',
//     height: 100,
//     margin: 'auto',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'white',
//     borderTopWidth: 1,
//     borderTopColor: 'black',
//     position: 'absolute',
//     bottom: 0,
//   },
// });


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/Login/Login';
import Main from './src/Main/Main';
import Tlscjd from './src/Tlscjd/Tlscjd';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Tlscjd />
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
    //     <Stack.Screen name="Main" component={Main} options={{headerShown: false}} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default App;