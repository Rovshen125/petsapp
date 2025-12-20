import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default function RegisterScreen({ navigation, setToken }) {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const { data } = await axios.post("http://192.168.1.73:5000/api/auth/register", { email, nickname, password });
      await AsyncStorage.setItem("token", data.token);
      setToken(data.token);
    } catch (err) {
      Alert.alert("Xəta", err.response?.data?.message || "Xəta baş verdi");
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-gray-100 p-6">
      <Text className="text-2xl font-bold mb-6 text-indigo-600">Qeydiyyat</Text>
      <TextInput
        className="w-full p-3 mb-4 bg-white rounded-lg border border-gray-300"
        placeholder="Nickname"
        value={nickname}
        onChangeText={setNickname}
      />
      <TextInput
        className="w-full p-3 mb-4 bg-white rounded-lg border border-gray-300"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        className="w-full p-3 mb-4 bg-white rounded-lg border border-gray-300"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity onPress={handleRegister} className="w-full bg-indigo-600 p-4 rounded-lg mb-4">
        <Text className="text-white text-center font-bold">Qeydiyyatdan keç</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text className="text-indigo-600">Artıq hesabın var? Giriş et</Text>
      </TouchableOpacity>
    </View>
  );
}
