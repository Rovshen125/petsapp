import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderSearch from '../components/HeaderSearch';
import HomeHeaderScroll from '../components/HomeHeaderScroll';
import HomeNews from '../components/HomeNews';
import HomeCardContainer from '../components/HomeCardContainer';
import { ScrollView } from 'react-native';
import { CategoryContext } from '../context/CategroyContext';


export default function HomeScreen() {
const {userStatus} = useContext(CategoryContext)
if (userStatus) {
  console.log(200)
} else {
    console.log(404)

}
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