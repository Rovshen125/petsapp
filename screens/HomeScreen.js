import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderSearch from '../components/HeaderSearch';
import HomeHeaderScroll from '../components/HomeHeaderScroll';
import HomeNews from '../components/HomeNews';
import HomeCardContainer from '../components/HomeCardContainer';
import { ScrollView } from 'react-native';


export default function HomeScreen() {

  return (
    <SafeAreaView>
      <ScrollView>
        <HeaderSearch />
        <HomeHeaderScroll />
        <HomeNews />
        <HomeCardContainer />
      </ScrollView>
    </SafeAreaView>
  )
}