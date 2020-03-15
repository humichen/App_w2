import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Header = () => {
    return (
        <View style={styles.headerStyle}>
          <Text style={styles.textStyle}>＊我喜歡的歌曲集＊</Text>
        </View>
        );
};

const styles = StyleSheet.create({
    headerStyle: {
      backgroundColor: "#fffab3",
      justifyContent: "center",
      alignItems: "center",
      height: 90,
      paddingTop: 30,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      // Android Only
      elevation: 2
    },
    textStyle: {
        fontSize: 20,
        fontWeight:'600'
     },
});

export default Header;