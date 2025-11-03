import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import colors from '../constants/colors'
import { CategoryContext } from '../context/CategroyContext'

export default function ModalCont({ setShowModal }) {
  const arr = ["hamısı", "itlər", "pişiklər", "quşlar", "aksessuarlar", "elanlar"]
  const {setFilteredCat} = useContext(CategoryContext)

  const handleModal = () => {
    setShowModal(false)
  }
  return (
    <View className='flex-1 justify-center items-center'>
      <View style={{ position: 'relative' }} className='w-9/12 h-2/3 justify-center  items-center rounded-3xl'>
        <View className='w-full h-full' style={{ position: 'absolute', backgroundColor: colors.primary, opacity: .8, borderRadius: 30 }}>

        </View>
        <View className='w-full justify-center flex-row gap-1 flex-wrap'>
          {
            arr.map((item, index) => (<TouchableOpacity onPress={()=>setFilteredCat(item)} key={index}>
              <Text className='bg-blue-50 text-2xl p-1 rounded-xl'>{item}</Text>
            </TouchableOpacity>))
          }
        </View>
        <TouchableOpacity
          onPress={() => handleModal()}
          className='absolute bottom-0'
        >

          <Text className='text-white text-2xl font-bold'>Bağla</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}