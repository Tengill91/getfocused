import React from "react";
import { FlatList, View, StyleSheet } from "react-native";

import Card from "../components/Card";
import Screen from "../components/Screen";
import routes from "../navigation/routes";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "röd jacka till salu",
    price: 100,
    image: require("../assets/icon.png"),
  },
  {
    id: 2,
    title: "blå byxor till salu",
    price: 300,
    image: require("../assets/icon.png"),
  },
];
// we can reach the "navigation" prop becouse this screen is added in the navigator in feed navigator
export default function ListingsScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.lGray,
  },
});
