import React, { useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ImageInput from "./ImageInput";

export default function ImageInputList({
  imageUris = [],
  onRemoveImage,
  onAddImage,
}) {
  // ger tillgång till scrollView Läs på
  const scrollView = useRef();

  return (
    <View>
      <ScrollView
        //style={{ backgroundColor: "yellow" }}
        ref={scrollView}
        horizontal={true}
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUris.map((uri) => (
            <View key={uri} style={styles.imageList}>
              <ImageInput
                imageUri={uri}
                onChangeImage={() => onRemoveImage(uri)}
              />
            </View>
          ))}
          <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flexDirection: "row" },
  imageList: { marginRight: 10 },
});
