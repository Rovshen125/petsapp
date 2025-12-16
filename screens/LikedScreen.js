import { View, Text, Image, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import { CategoryContext } from '../context/CategroyContext'


export default function LikedScreen() {
  const { likeds } = useContext(CategoryContext)
  return (
    <ScrollView>
      {likeds.map((item, index) => <View key={index} style={{flexDirection:'row', justifyContent:index%2===0 ? 'flex-end' : 'flex-start'}} className='bg-blue-400'>
        <View className='bg-red-500 w-1/2 rounded-full justify-center items-center'>
          <Image  resizeMode='contain' className='rounded-full w-full h-32 ' source={{ uri: item.pictures[0] }} />
          <Text className='p-1'>{item.bashliq}</Text>
        </View>

      </View>)}
    </ScrollView>
  )
}