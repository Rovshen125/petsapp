import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import HomeCard from './HomeCard'
import { CategoryContext } from '../context/CategroyContext'
 

export default function HomeCardContainer() {
   const {readyData} = useContext(CategoryContext)
    return (
        <ScrollView>
            <View className='flex-row flex-wrap p-4'>
                {
                    readyData.map((item, index)=> <HomeCard {...item} key={index} />)
                }

            </View>
        </ScrollView>
    )
}