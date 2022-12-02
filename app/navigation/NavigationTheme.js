import React from "react";
import { DefaultTheme } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.white,
  },
};
