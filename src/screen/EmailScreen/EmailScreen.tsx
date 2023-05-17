import React from "react";
import {
  FlatList,
  Image,
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { SvgXml } from "react-native-svg";

import Colors from "../../Common/Colors";
import Icons from "../../Common/Icons";
import SideOptions from "../..//Components/SideOptions/SideOptions";
import { Email, DATA } from "../../stubs";
import EmailListItem from "../../Components/EmailListItem/EmailListItem";

const EmailScreen = () => {
  const renderItem = ({ item }: { item: Email }) => <EmailListItem {...item} />;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <SideOptions style={styles.sideOptionsContainer}>
        <SvgXml xml={Icons.message} />
        <SvgXml xml={Icons.attachment} />
        <SvgXml xml={Icons.about} />
        <SvgXml xml={Icons.trash} />
        <SvgXml xml={Icons.setting} />
      </SideOptions>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideOptionsContainer: {
    bottom: 33,
    right: 10,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
});

export default EmailScreen;
