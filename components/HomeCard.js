import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function HomeCard({id,bashliq, pictures, about,location }) {
    const navigation = useNavigation()
  return (
         <TouchableOpacity onPress={()=>navigation.navigate('etrafli',{id:id,bashliq:bashliq, pictures:pictures, about:about, location})}  className='w-[48%] rounded-xl bg-white p-1 m-1'>

            <View>
                <Image resizeMode='center' className='w-full rounded-xl h-32' source={{uri:pictures[0]}} />
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