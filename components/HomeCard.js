import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import colors from '../constants/colors';
import { CategoryContext } from '../context/CategroyContext';

export default function HomeCard({ id, bashliq, pictures, about, location, category }) {
    const navigation = useNavigation()
    const {handlerLike, likeds} = useContext(CategoryContext)
    
    const handlePress = (id)=>{
        handlerLike(id)
        const test = likeds.find(item=>item.id === id)
        
    }
    
    return (
        <TouchableOpacity onPress={() => navigation.navigate('etrafli', { id: id, bashliq: bashliq, pictures: pictures, about: about, location, category })} className='w-[48%] rounded-xl bg-white p-1 m-1'>

            <View>
                <Image resizeMode='center' className='w-full rounded-xl h-32' source={{ uri: pictures[0] }} />
            </View>
            <View className='flex-row justify-between items-center'>
            <Text className='font-bold text-xl'> {bashliq}</Text>
            <TouchableOpacity onPress={()=>handlePress(id)}>
                <Ionicons size={32} name={likeds.find(item=>item.id === id) ? "heart" : "heart-outline"} color={colors.primary} />
            </TouchableOpacity>
            </View>
            <Text
                numberOfLines={2}
                ellipsizeMode='tail'
                className='text-slate-600'
            >
                {
                    about
                }

            </Text>
        </TouchableOpacity>
    )
}