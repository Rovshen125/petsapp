import { View, Text, TouchableOpacity, Alert } from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext } from 'react';
import { CategoryContext } from '../context/CategroyContext';

const UsersPage = ({ setToken }) => {
      const {setUserStatus} = useContext(CategoryContext)
    
  const handleLogout = async () => {
    await AsyncStorage.removeItem("token");
    setToken(null);
    setUserStatus(false)
    Alert.alert("Çıxış", "Hesabdan çıxıldı");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Xoş gəldin 👋</Text>

      <TouchableOpacity
        onPress={handleLogout}
        style={{
          backgroundColor: "#ef4444",
          padding: 15,
          borderRadius: 10,
          width: 200
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center", fontWeight: "bold" }}>
          Çıxış et
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default UsersPage