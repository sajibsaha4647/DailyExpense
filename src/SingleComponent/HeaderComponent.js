import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {fontsizes, themeColor} from '../Config/Config';
import Feather from 'react-native-vector-icons/Feather';
import {TouchableOpacity} from 'react-native-gesture-handler';
const HeaderComponent = ({Title, iconName, IconClick}) => {
  return (
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor={themeColor.PrimaryColor} />
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: themeColor.PrimaryColor,
          paddingHorizontal: fontsizes.FONT_TWELVE,
          height: fontsizes.FONT_FIFTY,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View>
          <TouchableOpacity onPress={() => IconClick()}>
            <Feather
              name={iconName}
              style={{
                color: themeColor.White,
                fontSize: fontsizes.FONT_THIRTY,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, marginLeft: fontsizes.FONT_FIFTEEN}}>
          <Text
            style={{fontSize: fontsizes.FONT_FIFTEEN, color: themeColor.White}}>
            {Title}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HeaderComponent;
