import React from "react";
import { Image, View, StyleSheet } from "react-native";
import AppText from "../components/AppText";

import colors from "../config/colors";
import ListItem from "../components/ListItem";

// route prop comes from our navigator in FeedNavigator
export default function ListingDetailsScreen({ route }) {
  const listing = route.params;
  console.log(listing);
  return (
    <View>
      <Image style={styles.image} source={listing.images} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>{listing.price} kr</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/icon.png")}
            title="Robert Tenglund"
            subTitle="4 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  userContainer: {
    marginVertical: 50,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
});
