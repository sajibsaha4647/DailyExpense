import {combineReducers} from 'redux';
import ExpenseReducer from './Reducer/ExpenseReducer';

const Rootreducer = combineReducers({
  ExpenseReducer: ExpenseReducer,
});

export default Rootreducer;
