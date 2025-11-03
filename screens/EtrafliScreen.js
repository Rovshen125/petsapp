import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import colors from '../constants/colors'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';

export default function EtrafliScreen({ route }) {
  const { bashliq, pictures, about,location } = route.params

  console.log(location)

  const openLocation = (lat,lng) => {
    const url = `https://www.google.com/maps?q=${lat},${lng}`;
    Linking.openURL(url).catch(() => {
      Alert.alert("Xəritə açıla bilmədi");
    });
  };

  return (
    <View style={{ backgroundColor: colors.secondary }}>
      <View className='w-full ' style={{ position: 'relative' }}>
        <SafeAreaView className='absolute inset-0 flex-row justify-end'>
          <Image style={{ width: 200, height: 200 }} resizeMode='contain' source={require('../assets/cat.png')} />
        </SafeAreaView>
      </View>
      <View className='p-3 mt-10 mb-5 w-2/3 min-h-52'>
        <Text numberOfLines={2} style={{ color: colors.primary }} className='font-bold text-2xl'>{bashliq}</Text>
        <Text numberOfLines={8} className='text-sm' style={{color:colors.primary}}> {about} </Text>
      </View>

      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
             <View className='flex-row gap-2 mx-4'>
              {
                pictures.map((item,index)=><View style={{borderColor:colors.primary, borderWidth:5, borderRadius:12}} key={index}>
                  <Image  className='w-64 h-64' source={{uri:item}} style={{borderRadius:9}} />
                </View>)
              }
              </View>
        </ScrollView>
      </View>




      <View className='mx-5 py-5'>
          <View className='flex-row items-center'>
            <Ionicons size={32} name="location-outline" />
            <TouchableOpacity onPress={()=>openLocation(location.lat, location.lng)}>
                <Text className='underline text-2xl'>Xəritədə Bax</Text>
            </TouchableOpacity>
          </View>
          
          <View className='flex-row items-center my-2'>
            <Ionicons size={30} name="phone-portrait-outline" />
            <Text className='text-2xl'>+994551234567</Text>
          </View>

          <View className='flex-row'>

              <Text className='text-red-600 text-4xl'>#</Text>
              <Text className='text-3xl'>234567</Text>
          </View>


      </View>


    </View>
  )
}