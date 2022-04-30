import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {fontFamilies, fontsizes, themeColor} from './Config/Config';

import {useNavigation} from '@react-navigation/native';
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
import {useSelector, useDispatch} from 'react-redux';
import HeaderComponent from './SingleComponent/HeaderComponent';

const Sidedrower = () => {
  const Navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View
        style={{
          height: fontsizes.FONT_ONE_FIFTY,
          backgroundColor: themeColor.PrimaryColor,
          justifyContent: 'center',
          borderBottomColor: themeColor.FlashWhiteTwo,
          borderBottomWidth: 1,
          alignItems: 'center',
        }}>
        <View style={{alignItems: 'center'}}>
          <Image
            resizeMethod="resize"
            resizeMode="contain"
            style={{
              height: fontsizes.FONT_HUNDRED,
              width: fontsizes.FONT_HUNDRED,
              borderRadius: fontsizes.FONT_HUNDRED / 2,
            }}
            source={require('./Assets/expense.png')}
          />
        </View>
        <View>
          <Text
            style={{
              color: themeColor.White,
              marginTop: fontsizes.FONT_TEN,
              fontSize: fontsizes.FONT_TWELVE,
              fontFamily: fontFamilies.Montserrat_Bold,
            }}>
            Sajib saha
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: themeColor.White,
              fontSize: fontsizes.FONT_TWELVE,
              fontFamily: fontFamilies.Montserrat_Bold,
            }}>
            Sajib@gmail.com
          </Text>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => Navigation.navigate('Addexpenes')}>
        <View
          style={{
            height: fontsizes.FONT_FIFTY,
            backgroundColor: themeColor.PrimaryColorDeepRed,
            marginTop: fontsizes.FONT_FOUR,
            paddingHorizontal: fontsizes.FONT_TEN,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: themeColor.White,
              fontFamily: fontFamilies.Montserrat_Bold,
            }}>
            Add Expenes
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColor.PrimaryColor,
  },
});

export default Sidedrower;
