import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import colors from '../constants/colors';

export default function HeaderSearch() {
  return (
    <View className='flex-row justify-evenly items-center'>

        <View className='w-4/5 h-14 ml-5 rounded-2xl bg-white  flex-row items-center'>
            <Ionicons className="p-2" name="search" size={32} color={colors.primary} />
            <TextInput  className='w-4/5 text-xl mx-1 p-2' color={colors.primary} />
        </View>
        <TouchableOpacity>
            <Ionicons name="options" size={32} />
        </TouchableOpacity>

    </View>
  )
}