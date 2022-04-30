import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {fontFamilies, themeColor, fontsizes} from './Config/Config';
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
import {useSelector, useDispatch} from 'react-redux';
import HeaderComponent from './SingleComponent/HeaderComponent';
import {addExpense} from './Redux/Actions/ExpenseActions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Addexpenes = () => {
  const Navigation = useNavigation();
  const dispatch = useDispatch();

  const {expenses} = useSelector(state => state.ExpenseReducer);

  const [Selected, setSelected] = useState('Daily Expense');
  const [expenseAmount, setExpenseAmount] = useState('');

  const handleAddExpense = () => {
    if (+expenseAmount > 0) {
      dispatch(addExpense(Selected, expenseAmount));
      setSelected('Daily Expense');
      setExpenseAmount('');
      Navigation.navigate('Home');
    } else {
      alert('please enter amount');
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          height: fontsizes.FONT_FIFTY,
        }}>
        <HeaderComponent
          IconClick={() => Navigation.goBack()}
          iconName="arrow-left"
          Title="Add Expense"
        />
      </View>

      <View
        style={{
          marginHorizontal: fontsizes.FONT_FIFTEEN,
          marginTop: fontsizes.FONT_TWENTY,
        }}>
        <Text style={{marginBottom: 7}}> Select Expense Catagory</Text>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}>
          {expenses.map((data, i) => {
            return (
              <View key={i} style={{width: '31%'}}>
                <TouchableOpacity onPress={() => setSelected(data.ExpenseName)}>
                  <View
                    style={{
                      backgroundColor:
                        Selected == data.ExpenseName
                          ? themeColor.PrimaryColor
                          : themeColor.FlashWhiteThree,
                      marginBottom: fontsizes.FONT_FIFTEEN,
                      height: fontsizes.FONT_FOURTY,
                      borderRadius: fontsizes.FONT_TEN,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: themeColor.White}}>
                      {data.ExpenseName}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
        <View
          style={{
            marginTop: fontsizes.FONT_FIFTEEN,
            backgroundColor: themeColor.FlashWhite,
          }}>
          <TextInput
            style={{
              borderRadius: 4,
              justifyContent: 'center',
              alignItems: 'center',
              height: fontsizes.FONT_FIFTY,
              paddingHorizontal: fontsizes.FONT_TEN,
            }}
            onChangeText={amount => setExpenseAmount(amount)}
            value={expenseAmount}
            keyboardType="numeric"
            placeholder="Enter expense amount"
          />
        </View>
        <View style={{marginTop: fontsizes.FONT_FIFTEEN}}>
          <Button
            onPress={handleAddExpense}
            title="Add"
            color={themeColor.PrimaryColor}
          />
        </View>
      </View>
    </View>
  );
};

export default Addexpenes;
