
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AddScreen, ElanlarScreen, EtrafliScreen, LikedScreen, ProfilScreen, HomeScreen } from '../screens'
import { NavigationContainer } from '@react-navigation/native'; // bunu əlavə et
import TabBar from './TabBar';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const TabNav = () => {
    return (
        <Tab.Navigator
            tabBar={(props) => <TabBar {...props} />}
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen name='home' component={HomeScreen} />
            <Tab.Screen name='elan' component={ElanlarScreen} />
            <Tab.Screen name='add' component={AddScreen} />
            <Tab.Screen name='liked' component={LikedScreen} />
            <Tab.Screen name='profile' component={ProfilScreen} />
            <Tab.Screen name="etrafli" component={EtrafliScreen} /> 

        </Tab.Navigator>
    )
}

export default function () {

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="Tabs" component={TabNav} />
                {/* <Stack.Screen name="calendar" component={CalendarScreen} />*/}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

