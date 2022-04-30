import {EXPENSE_TYPES, EXPEN_CALCULATOIN_TYPES} from './../Types/ExpenseType';

export const calculation_actions = amount => {
  return {
    type: EXPEN_CALCULATOIN_TYPES,
    payload: amount,
  };
};

export const addExpense = (opt, amount) => {
  return {
    type: 'ADD_EXPENSE',
    payload: opt,
    payload1: amount,
  };
};
