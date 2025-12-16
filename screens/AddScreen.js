import { View, Text, TouchableOpacity, TextInput, Image, ScrollView } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";
import { useState } from "react";

export default function AddScreen() {
  const [photos, setPhotos] = useState([]);
  const [location, setLocation] = useState(null);
  const [description, setDescription] = useState("");

  // 📷 Kamera
  const takePhoto = async () => {
    if (photos.length >= 3) return;

    const result = await ImagePicker.launchCameraAsync({
      quality: 0.7,
    });

    if (!result.canceled) {
      setPhotos([...photos, result.assets[0].uri]);
    }
  };

  // 🖼️ Qalereya
  const pickFromGallery = async () => {
    if (photos.length >= 3) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      quality: 0.7,
      allowsMultipleSelection: true,
      selectionLimit: 3 - photos.length,
    });

    if (!result.canceled) {
      const newPhotos = result.assets.map(a => a.uri);
      setPhotos([...photos, ...newPhotos]);
    }
  };

  // 📍 Konum
  const getLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") return;

    const loc = await Location.getCurrentPositionAsync({});
    setLocation(loc.coords);
  };

  return (
    <ScrollView className="flex-1 bg-gray-100 px-4 pt-6">
      
      <Text className="text-2xl font-bold text-gray-800 mb-4">
        🐾 Yeni heyvan əlavə et
      </Text>

      {/* Foto seçimi */}
      <View className="mb-4">
        <Text className="font-semibold mb-2">Şəkillər (max 3)</Text>

        <View className="flex-row gap-3 mb-3">
          <TouchableOpacity
            onPress={takePhoto}
            className="flex-1 bg-blue-500 py-3 rounded-xl"
          >
            <Text className="text-white text-center font-semibold">📷 Çək</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={pickFromGallery}
            className="flex-1 bg-green-500 py-3 rounded-xl"
          >
            <Text className="text-white text-center font-semibold">🖼️ Yüklə</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row gap-2">
          {photos.map((uri, index) => (
            <Image
              key={index}
              source={{ uri }}
              className="w-24 h-24 rounded-xl"
            />
          ))}
        </View>
      </View>

      {/* Konum */}
      <View className="mb-4">
        <Text className="font-semibold mb-2">Konum</Text>

        <TouchableOpacity
          onPress={getLocation}
          className="bg-purple-500 py-3 rounded-xl"
        >
          <Text className="text-white text-center font-semibold">
            📍 Mövcud yeri əlavə et
          </Text>
        </TouchableOpacity>

        {location && (
          <Text className="text-sm text-gray-600 mt-2">
            Lat: {location.latitude.toFixed(4)}, 
            Lon: {location.longitude.toFixed(4)}
          </Text>
        )}
      </View>

      {/* Açıqlama */}
      <View className="mb-6">
        <Text className="font-semibold mb-2">
          Açıqlama (max 400 simvol)
        </Text>

        <TextInput
          multiline
          value={description}
          onChangeText={text => {
            if (text.length <= 400) setDescription(text);
          }}
          className="bg-white rounded-xl p-4 h-32 text-gray-800"
          placeholder="Heyvanın vəziyyəti, yeri, ehtiyacları..."
        />

        <Text className="text-right text-sm text-gray-500 mt-1">
          {description.length}/400
        </Text>
      </View>

      {/* Submit */}
      <TouchableOpacity className="bg-red-500 py-4 rounded-2xl mb-10">
        <Text className="text-white text-center text-lg font-bold">
          ➕ Əlavə et
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
}
