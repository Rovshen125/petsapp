import { View, Text, Image, Linking, Alert, TouchableOpacity } from 'react-native'
import React from 'react'
import { catsData } from '../data'
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderSearch from '../components/HeaderSearch';
import HomeHeaderScroll from '../components/HomeHeaderScroll';
import HomeNews from '../components/HomeNews';
import HomeCardContainer from '../components/HomeCardContainer';

export default function HomeScreen() {
  const openLocation = (lat, lng) => {
    const url = `https://www.google.com/maps?q=${lat},${lng}`;
    Linking.openURL(url).catch(() => {
      Alert.alert("Xəritə açıla bilmədi");
    });
  };
  return (
    <SafeAreaView>
        <HeaderSearch />
        <HomeHeaderScroll />
        <HomeNews />
        <HomeCardContainer />
    </SafeAreaView>
  )
}