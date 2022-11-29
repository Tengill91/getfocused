import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";


import Screen from "./app/components/Screen";
import ImageInput from "./app/components/ImageInput";

export default function App() {
  const [imageUri, setImageUri] = useState();





  return (
    <Screen>
      <ImageInput imageUri={imageUri} onChangeImage={(uri) => setImageUri(uri)}/>
    </Screen>
  );
}
