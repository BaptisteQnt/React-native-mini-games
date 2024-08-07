import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();
import Home from './assets/components/Home';
import Game from './assets/components/Game';
import Result from './assets/components/Result';
import { HeaderBackButton } from '@react-navigation/elements';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='auto' />
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Game' component={Game}/>
        <Stack.Screen name='Result' component={Result} options={({ navigation }) => ({ headerLeft: (props) => (<HeaderBackButton {...props} label='Home' onPress={() => navigation.navigate('Home')}/> 
          ),
        })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


