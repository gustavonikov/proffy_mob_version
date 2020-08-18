import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Teach from '../pages/Teach';
import StudyTabs from './StudyTabs';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="Home" component={Home} />
                <Screen name="Teach" component={Teach} />
                <Screen name="Study" component={StudyTabs} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;
