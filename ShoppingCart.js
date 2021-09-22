import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from "@react-navigation/native";
import { Header } from "react-native/Libraries/NewAppScreen";
import HomeScreen from './containers/HomeScreen'
import ElectronicsScreen from './containers/ElectronicsScreen'
import BooksScreen from './containers/BooksScreen'
import ShoppingCartIcon from './containers/ShoppingCartIcon'
import CartScreen from './containers/CartScreen'

const Stack = createNativeStackNavigator();

class ShoppingCart extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                    name ='Home'
                    component={HomeScreen}
                    options={{ title: 'Inicio de sesión ' }}
                    >

                    </Stack.Screen>
                    <Stack.Screen
                    name ='Electronics'
                    component={ElectronicsScreen}
                    options={{ title: 'Electronicos ' }}
                    >

                    </Stack.Screen>
                    <Stack.Screen
                    name ='Books'
                    component={BooksScreen}
                    options={{ title:'Tienda de libros' }}
                    >

                    </Stack.Screen>
                    <Stack.Screen
                    name ='Cart'
                    component={CartScreen}
                    options={{ title: 'Tienda de libros ' }}
                    >

                    </Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
export default ShoppingCart;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});