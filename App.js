import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import "./global.css"
import MainNav from './navigation'
import { CategoryContext, CatProvider } from './context/CategroyContext';
import { useState, useEffect, useContext } from 'react';
export default function App() {
const [token, setToken] = useState(null);


  // Token yoxlanışı
useEffect(() => {
  
  const loadToken = async () => {
    const t = await AsyncStorage.getItem("token");
    if (t) setToken(t);
  };
  loadToken();
}, []);
 



console.log(token)
  return <CatProvider>
    <MainNav />
  </CatProvider>
}


