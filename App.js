import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import "./global.css"
import MainNav from './navigation'
import { CatProvider } from './context/CategroyContext';

export default function App() {
  return <CatProvider>
    <MainNav />
  </CatProvider>
}


