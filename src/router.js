import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Store 
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './utils/reducer';
import stores from './utils/store';

//pages 
import Jobs from './pages/Jobs';
import Favorite from './pages/Favorite';
import JobsDetail from './pages/JobsDetail';

//component
import TextButton from './components/TextButton';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const stackNavigatorComponent = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='JobsPage'
        component={Jobs}
        options={{
          title: 'Jobs',
          headerTitleStyle: {
            color: '#ef5350',
            fontWeight: '900'
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
            fontWeight: '900'
          },
          headerTintColor: '#ef5350',
          headerLeft: (item => {
            return (
              <TextButton
                title="Jobs"
                icon="chevron-left"
                iconColor="#ef5350"
                iconSize={25}
                onPress={() => { navigation.goBack() }}
              />
            );
          }),
        }}
      />
    </Stack.Navigator>
  );
};




const App = () => {
  const store = createStore(reducer, stores);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen
            name='JobsDetailPages'
            component={stackNavigatorComponent}
            options={{
              title: 'Jobs',
              headerTitleStyle: {
                color: '#ef5350',
                textAlign: 'center'
              },
            }}
          />
          <Drawer.Screen
            name="FavoritesPage"
            component={Favorite}
            options={{
              title: 'Favorite',
              headerTitleStyle: {
                color: '#ef5350',
                textAlign: 'center'
              }
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
