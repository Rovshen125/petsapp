import React, { useEffect, useState, useRef } from "react";
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, ScrollView, KeyboardAvoidingView, Platform, Alert } from "react-native";
import "./global.css";
import MainNav from './navigation';
import { CatProvider } from './context/CategroyContext';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);
  const [mode, setMode] = useState("login"); // login / register
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const timerRef = useRef(null);

  // Token yoxlanışı
  useEffect(() => {
    const checkToken = async () => {
      try {
        const t = await AsyncStorage.getItem("token");
        if (t) {
          setToken(t);
          startTokenTimer();
        }
      } catch (err) {
        console.log("Token oxunmadı:", err);
      } finally {
        setLoading(false);
      }
    };
    checkToken();

    return () => clearTimeout(timerRef.current);
  }, []);

  // Token müddəti 10s → logout
  const startTokenTimer = () => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(async () => {
      await AsyncStorage.removeItem("token");
      setToken(null);
      Alert.alert("Logout", "Tokenin müddəti bitdi. Yenidən giriş edin.");
    }, 10000); // 10 saniyə
  };

  // Login funksiyası
  const handleLogin = async () => {
    try {
      const { data } = await axios.post("http://192.168.1.73:5000/api/auth/login", { email, password });
      await AsyncStorage.setItem("token", data.token);
      setToken(data.token);
      startTokenTimer();
      Alert.alert("Uğur", "Giriş uğurla tamamlandı!");
    } catch (err) {
      Alert.alert("Xəta", err.response?.data?.message || "Xəta baş verdi");
    }
  };

  // Register funksiyası
  const handleRegister = async () => {
    try {
      const { data } = await axios.post("http://192.168.1.73:5000/api/auth/register", { email, nickname, password });
      await AsyncStorage.setItem("token", data.token);
      setToken(data.token);
      startTokenTimer();
      Alert.alert("Uğur", "Qeydiyyat uğurla tamamlandı!");
    } catch (err) {
      Alert.alert("Xəta", err.response?.data?.message || "Xəta baş verdi");
    }
  };

  if (loading) return (
    <View className="flex-1 justify-center items-center bg-white">
      <ActivityIndicator size="large" color="#4f46e5"/>
    </View>
  );

  // Token varsa MainNav göstər
  if (token) return <CatProvider><MainNav token={token} setToken={setToken} /></CatProvider>;

  // Token yoxdursa login/register form göstər
  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: "#f3f4f6" }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center", alignItems: "center", padding: 24 }}>
        <Text className="text-3xl font-bold mb-6 text-indigo-600">{mode === "login" ? "Giriş" : "Qeydiyyat"}</Text>

        {mode === "register" && (
          <TextInput
            className="w-full p-3 mb-4 bg-white rounded-lg border border-gray-300"
            placeholder="Nickname"
            value={nickname}
            onChangeText={setNickname}
          />
        )}

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

        <TouchableOpacity
          className="w-full bg-indigo-600 p-4 rounded-lg mb-4"
          onPress={mode === "login" ? handleLogin : handleRegister}
        >
          <Text className="text-white text-center font-bold">{mode === "login" ? "Giriş et" : "Qeydiyyatdan keç"}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setMode(mode === "login" ? "register" : "login")}>
          <Text className="text-indigo-600">
            {mode === "login" ? "Hesabın yoxdur? Qeydiyyatdan keç" : "Artıq hesabın var? Giriş et"}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
