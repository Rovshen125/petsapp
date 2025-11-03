import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderSearch from '../components/HeaderSearch';
import HomeHeaderScroll from '../components/HomeHeaderScroll';
import HomeNews from '../components/HomeNews';
import HomeCardContainer from '../components/HomeCardContainer';

export default function HomeScreen() {

  return (
    <SafeAreaView>
        <HeaderSearch />
        <HomeHeaderScroll />
        <HomeNews />
        <HomeCardContainer />
    </SafeAreaView>
  )
}