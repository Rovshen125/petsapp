import { View, Text, TextInput, TouchableOpacity, Modal } from 'react-native'
import React, { useContext, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import colors from '../constants/colors';
import { CategoryContext } from '../context/CategroyContext';
import ModalCont from './ModalCont';

export default function HeaderSearch() {
  const { setFilteredData } = useContext(CategoryContext)
  const [showModal, setShowModal] = useState(false)
  return (
    <View className='flex-row justify-evenly items-center'>

      <View className='w-4/5 h-14 ml-5 rounded-2xl bg-white  flex-row items-center'>
        <Ionicons className="p-2" name="search" size={32} color={colors.primary} />
        <TextInput onChangeText={(text) => setFilteredData(text)} className='w-4/5 text-xl mx-1 p-2' color={colors.primary} />
      </View>
      <TouchableOpacity onPress={()=>setShowModal(!showModal)}>
        <Ionicons name="options" size={32} />
      </TouchableOpacity>


      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <ModalCont setShowModal={setShowModal} />
      </Modal>

    </View>
  )
}