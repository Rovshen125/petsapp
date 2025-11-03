import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function HomeCard({bashliq, picture, about }) {
  return (
         <TouchableOpacity className='w-[48%] rounded-xl bg-white p-1 m-1'>

            <View>
                <Image resizeMode='center' className='w-full rounded-xl h-32' source={{uri:picture}} />
            </View>
            <Text className='font-bold text-xl'>{bashliq}</Text>
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