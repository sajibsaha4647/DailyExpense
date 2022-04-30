import {EXPENSE_TYPES, EXPEN_CALCULATOIN_TYPES} from './../Types/ExpenseType';

const initialState = {
  expenses: [
    {
      ExpenseName: 'Daily Expense',
      value: 0,
    },
    {
      ExpenseName: 'Food Expense',
      value: 0,
    },
    {
      ExpenseName: 'Home Expense',
      value: 0,
    },
    {
      ExpenseName: 'Medical Expense',
      value: 0,
    },
  ],
};

const ExpenseReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.map(exp => {
          if (exp.ExpenseName === actions.payload) {
            return {
              ...exp,
              value: +exp.value + +actions.payload1,
            };
          } else {
            return exp;
          }
        }),
      };

    default:
      return state;
  }
};

export default ExpenseReducer;
