import React, {Component} from 'react';
import {
  NavigationContainer,
  useNavigation,
  DrawerActions,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import {Wallet} from '../screens/ccwallet';

const WalletStack = createStackNavigator();

export const WalletStackNav = props => {
  return (
    <WalletStack.Navigator>
      <WalletStack.Screen
        name="Wallet"
        component={Wallet}
        options={{
          headerShown: true,
          tabBarLabel: 'Wallet',
          title: 'Wallet',
          showIcon: true,
          headerStyle: {
            backgroundColor: '#F2F2F2',
          },
          headerTintColor: '#4f3cb2',
          headerTitleAlign: 'center',
          headerLeft: ({}) => <HeaderLeft />,
          headerRight: () => (
            <Icon
              name="cart-outline"
              type="material-community"
              color="#4f3cb2"
              size={28}
              style={{marginRight: 20}}
            />
          ),
        }}
      />
    </WalletStack.Navigator>
  );
};
