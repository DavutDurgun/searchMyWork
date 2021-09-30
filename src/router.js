import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//pages 
import Jobs from './pages/Jobs';
import Favorite from './pages/Favorite';
import JobsDetail from './pages/JobsDetail';



const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const stackNavigatorComponent = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='JobsPage'
        component={Jobs}
        options={{
          title: 'Jobs',
          headerTitleStyle: {
            color: '#ef5350',
            textAlign: 'center'
          }
        }}
      />
       <Stack.Screen
        name='JobsDetailPage'
        component={JobsDetail}
        options={{
          title: 'Detail',
          headerTitleStyle: {
            color: '#ef5350',
            textAlign: 'center'
          }
        }}
      />
    </Stack.Navigator>
  );
};




const App = () => {


  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name='JobsDetailPages'
          component={stackNavigatorComponent}
          options={{
            title: 'Jobs',
            headerLeft: false,
            headerTitleStyle: {
              color: '#ef5350',
              textAlign: 'center'
            },
            headerShown: false
          }}
        />
        <Drawer.Screen
          name="FavoritesPage"
          component={Favorite}
          options={{
            title: 'Favorite',
            headerLeft: false,
            headerTitleStyle: {
              color: '#ef5350',
              textAlign: 'center'
            }
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
