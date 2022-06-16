import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from "./TabNavigator";
import Profile from "../screens/Profile";
import Feed from "../screens/Feed";

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={BottomTabNavigator} />
                <Drawer.Screen name="Profile" component={Profile} />
            </Drawer.Navigator>
        </NavigationContainer>)
}

export default DrawerNavigator