import React, { ReactNode } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

interface Props {
  style?: ViewStyle;
  children: ReactNode;
}

const SideOptions = ({ style, children }: Props) => {
  return <View style={[styles.sideOptionsContainer, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  sideOptionsContainer: {
    width: 56,
    height: 335,
    paddingHorizontal: 13,
    paddingVertical: 16,
    position: "absolute",

    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 29,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default SideOptions;
