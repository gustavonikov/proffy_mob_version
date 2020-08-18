import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import ListTeacher from '../pages/Study/ListTeacher';
import Favorites from '../pages/Study/Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
    return (
        <Navigator
            tabBarOptions={{
                style: {
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 64,
                },
                tabStyle: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                iconStyle: {
                    flex: 0,
                    width: 20,
                    height: 20,
                },
                labelStyle: {
                    fontFamily: 'Archivo_700Bold',
                    fontSize: 13,
                    marginLeft: 16,
                },
                inactiveBackgroundColor: '#fafafc',
                activeBackgroundColor: '#ebebf5',
                inactiveTintColor: '#c1bccc',
                activeTintColor: '#32264d',
            }}
        >
            <Screen
                name="ListTeacher"
                component={ListTeacher}
                options={{
                    tabBarLabel: 'Proffys',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons
                            name="ios-easel"
                            size={size}
                            color={focused ? '#8257e5' : color}
                        />
                    ),
                }}
            />
            <Screen
                name="Favorites"
                component={Favorites}
                options={{
                    tabBarLabel: 'Favoritos',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons
                            name="ios-heart"
                            size={size}
                            color={focused ? '#8257e5' : color} // #f00 p red
                        />
                    ),
                }}
            />
        </Navigator>
    );
}

export default StudyTabs;
