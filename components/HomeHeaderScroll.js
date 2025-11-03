import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, {useContext, useState } from 'react'
import colors from '../constants/colors'
import { CategoryContext } from '../context/CategroyContext'

export default function HomeHeaderScroll() {
    const arr = ["hamısı", "itlər", "pişiklər", "quşlar", "aksessuarlar", "elanlar"]

    const [num, setNum] = useState(0)
    const {setFilteredCat,filteredCat} =useContext(CategoryContext)

    const pressHandler = (item,index) =>{
        setNum(index)
        setFilteredCat(item)
    }

    console.log(filteredCat)
    return (
        <ScrollView style={{paddingTop:10, paddingLeft:15}} horizontal showsVerticalScrollIndicator={false}>
            {
                arr.map((item,index)=>{
                    const eq = index === num
                    return(
                        <TouchableOpacity  className='mx-1 ' key={index} onPress={()=>pressHandler(item,index)} >

                            <Text  className='text-xl p-2 rounded-xl'  style={{backgroundColor: eq ? 'white' : colors.primary, color:eq ? colors.primary : 'white'  }}>{item}</Text>

                        </TouchableOpacity>
                    )
                })
            }

        </ScrollView>
    )
}