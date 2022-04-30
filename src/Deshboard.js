import React, {useCallback, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {fontFamilies, themeColor, fontsizes} from './Config/Config';
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
import {useSelector, useDispatch} from 'react-redux';
import HeaderComponent from './SingleComponent/HeaderComponent';

const Deshboards = () => {
  const Navigation = useNavigation();

  const [loader, setLoader] = useState(true);

  const {expenses} = useSelector(state => state.ExpenseReducer);

  const _key = (item, index) => `${item}-${index}`;

  useFocusEffect(
    useCallback(() => {
      let isActive = true;

      if (isActive) {
        setLoader(false);
      }

      return () => {
        setLoader(true);
        isActive = false;
      };
    }, []),
  );

  const _render = ({item, index}) => (
    <View
      style={{
        width: '48%',
        backgroundColor: themeColor.PrimaryColor,
        marginTop: fontsizes.FONT_FIFTEEN,
        height: fontsizes.FONT_EIGHTY,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: fontsizes.FONT_TEN,
        marginHorizontal: '1%',
      }}>
      <Text
        style={{
          color: themeColor.White,
          fontSize: fontsizes.FONT_THIRTEEN,
          fontFamily: fontFamilies.Montserrat_Medium,
        }}>
        {item.ExpenseName}
      </Text>
      <Text
        style={{
          fontSize: fontsizes.FONT_FIFTEEN,
          color: themeColor.White,
        }}>
        {item.value} TK
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View
        style={{
          height: fontsizes.FONT_FIFTY,
        }}>
        <HeaderComponent
          IconClick={() => Navigation.toggleDrawer()}
          iconName="menu"
          Title="Deshboard"
        />
      </View>

      {loader ? (
        <View style={{marginTop: 50, width: '100%', alignItems: 'center'}}>
          <ActivityIndicator size="large" color={themeColor.PrimaryColor} />
        </View>
      ) : (
        <FlatList
          data={expenses}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          contentContainerStyle={{padding: '1%'}}
          keyExtractor={_key}
          renderItem={_render}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Deshboards;
