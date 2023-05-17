import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import Colors from "../../Common/Colors";

import { Email } from "../../stubs";

import Images from "../../Common/Images";

const renderFirstChar = (members: string[]) => {
  if (members.length <= 1)
    return (
      <View style={[styles.image, styles.leftSideContainer]}>
        <Text style={styles.char}>{members[0]}</Text>
      </View>
    );

  if (members.length === 2) {
    return (
      <View style={styles.leftIconContainer}>
        <View style={styles.leftIcon}>
          <Text style={[styles.char, { fontSize: 14 }]}>{members[0]}</Text>
        </View>
        <View style={[styles.leftIcon, styles.leftBottomIcon]}>
          <Text style={[styles.char, { fontSize: 14 }]}>{members[1]}</Text>
        </View>
      </View>
    );
  }
};

const renderPlusMembers = (membersLength: number) => {
  return (
    <View style={[styles.leftIcon, styles.leftBottomIcon, { bottom: -15 }]}>
      <Text style={[styles.char, { fontSize: 14 }]}>+{membersLength}</Text>
    </View>
  );
};

const EmailListItem = ({
  image,
  title,
  header,
  subheader,
  date,
  isRead,
  members = [],
  withAttachment,
}: Email) => (
  <View style={styles.item}>
    {image ? (
      <View>
        <Image
          style={[
            styles.image,
            members?.length > 2 && { width: 40, height: 40 },
          ]}
          source={image}
        />
        {members?.length > 2 && renderPlusMembers(members?.length)}
      </View>
    ) : (
      renderFirstChar(members || [])
    )}
    <View style={styles.details}>
      <Text style={[styles.title, isRead && styles.isRead]}>{title}</Text>
      <View style={styles.headerContainer}>
        <Text style={[styles.header, isRead && styles.isRead]}>{header}</Text>
        {withAttachment && (
          <Image
            style={styles.attachmentImage}
            source={Images.AttachmentImage}
          />
        )}
      </View>

      <View style={styles.subtitleContainer}>
        <Text
          style={[styles.subheader, isRead && styles.isRead]}
          numberOfLines={1}
        >
          {subheader.length > 27
            ? subheader.slice(0, 33).concat("...")
            : subheader}
        </Text>
        <Text style={[styles.date, isRead && styles.isRead]}>{date}</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  subtitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4,
  },
  headerContainer: {
    flexDirection: "row",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
    backgroundColor: Colors.white,
  },

  attachmentImage: {
    marginLeft: 10,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    color: Colors.white,
    fontWeight: "700",
  },
  header: {
    fontSize: 15,
    color: Colors.white,
    fontWeight: "700",
  },
  subheader: {
    fontSize: 14,
    color: Colors.white,
    fontWeight: "700",
  },
  date: {
    fontSize: 12,
    color: Colors.white,
    fontWeight: "700",
  },
  isRead: {
    fontWeight: "400",
    color: Colors.grey,
  },
  leftSideContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.dark_grey,
  },
  char: {
    fontSize: 18,
    fontWeight: "700",
    color: Colors.white,
  },
  leftIconContainer: {
    position: "relative",
    width: 55,
    height: 55,
    marginRight: 16,
  },
  leftIcon: {
    width: 35,
    height: 35,
    borderRadius: 25,
    backgroundColor: Colors.dark_grey,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  leftBottomIcon: {
    bottom: 0,
    right: 0,
    borderWidth: 1,
  },
});

export default EmailListItem;
