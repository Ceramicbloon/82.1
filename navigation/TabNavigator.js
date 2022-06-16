import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Ionicons from 'react-native-vector-icons/Ionicons'
import Feed from "../screens/Feed";
import CreatePost from "../screens/CreatePost";

const Tab = createMaterialBottomTabNavigator()

const BottomTabNavigator = () => {
    return (

        <Tab.Navigator
            labeled={false}
            barStyle={styles.bottomTab}
            screenOptions={({ route }) => ({ headerShown: false, tabBarIcon: ({ focused, color, size }) => { let iconName; if (route.name === 'Feed') { iconName = focused ? 'book' : 'book-outline' } else if (route.name === 'CreatePost') { iconName = focused ? 'create' : 'create-outline'; } return <Ionicons name={iconName} size={RFValue(20)} color={color} /> } })}
            tabBarOptions={{ activeTintColor: 'tomato', inactiveTintColor: 'gray' }}
        >
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="CreatePost" component={CreatePost} />
        </Tab.Navigator>

    )
}

export default BottomTabNavigator

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    icons: {
        width: RFValue(80),
        height: RFValue(80)
    },
    bottomTab: {
        height: "8%",
        backgroundColor: '#2f345d',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        position: 'absolute',
        overflow: 'hidden'
    }


})