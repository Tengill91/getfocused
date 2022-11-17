import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "d1",
    image: require("../assets/icon.png"),
  },
  {
    id: 2,
    title: "T2",
    description: "d2",
    image: require("../assets/icon.png"),
  },
];

export default function MessagesScreen() {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
          />
        )}
      ></FlatList>
    </Screen>
  );
}

const styles = StyleSheet.create({});
