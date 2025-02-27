import { applyMiddleware, combineReducers, createStore } from 'redux';
import accountReducer from './features/accounts/accountsSlice';
import { composeWithDevTools } from '@redux-devtools/extension';
import customerReducer from './features/customers/customerSlice';
import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;

// store.dispatch({type : 'account/deposit', payload : 1000})
// console.log(store.getState());
// store.dispatch({type : 'account/withdraw', payload : 500})
// console.log(store.getState());
// store.dispatch({type : 'account/requestLoan', payload : {amount : 1000, purpose : 'buying a car'}})
// console.log(store.getState());
// store.dispatch({type : 'account/payLoan'})
// console.log(store.getState());

// store.dispatch(deposit(1000))
// console.log(store.getState());
// store.dispatch(withdraw(500))
// console.log(store.getState());
// store.dispatch(requestLoan(1000, 'buying a car'))
// console.log(store.getState());
// store.dispatch(payLoan())
// console.log(store.getState());



// store.dispatch(createCustomer('John Doe', '1234567890'))
// console.log(store.getState());
// store.dispatch(updateName('John Doe'))
// console.log(store.getState());