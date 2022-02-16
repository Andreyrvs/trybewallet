// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { USER_EXPENSES } from './actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [0],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_EXPENSES:
    return {
      expenses: action.payload.expenses,
    };
  default:
    return state;
  }
};

export default wallet;
