import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabBar({ state, descriptors, navigation }) {
    const AddIcon = () => {
        return (
            <View className='p-1 rounded-full -mt-2'>
                <Ionicons color={'#aea5a6'} size={36} name='share' />
            </View>
        )
    }

    return (
        <SafeAreaView style={{ backgroundColor: 'transparent', position: 'absolute', bottom: 0, left: 0, right: 0 }}>
            <View className='flex-row justify-center bg-[#391151] mx-10 rounded-xl gap-5 p-3'>
                {state.routes.map((route, index) => {
                    const isFocused = state.index === index;

                    return (
                        <TouchableOpacity
                            className='items-center'
                            onPress={() => navigation.navigate(route.name)}
                            key={index}
                        >
                            {
                                route.name === 'home' ? <Ionicons color={'#aea5a6'} size={25} name='home' /> :
                                route.name === 'add' ? <AddIcon /> :
                                route.name === 'elan' ? <Ionicons color={'#aea5a6'} size={25} name='newspaper' /> :
                                route.name === 'liked' ? <Ionicons color={'#aea5a6'} size={25} name='heart' /> :
                                route.name === 'profile' ? <Ionicons color={'#aea5a6'} size={25} name='person' /> :
                                null
                            }
                        </TouchableOpacity>
                    )
                })}
            </View>
        </SafeAreaView>
    )
}
