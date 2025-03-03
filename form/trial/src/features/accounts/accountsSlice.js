import { createSlice } from "@reduxjs/toolkit"
const initialState = {
  balance : 0,
  loan : 0,
  loanPurpose: "",
  isLoading : false

}
const accountSlice = createSlice({
  name : 'account',
  initialState,
  reducers :{
    deposit(state, action){
      state.balance += action.payload
    },
    withdraw(state, action){
    state.balance -= action.payload
    },
    requestLoan: {
      prepare(amount, purpose){
        return {payload : {amount, purpose}}
      },
    reducer(state, action){
      if(state.loan > 0) return state
      state.loan = action.payload.amount
      state.loanPurpose = action.payload.purpose
      state.balance += state.loan
    },
    payLoan(state){
      state.balance -= state.loan
      state.loan = 0
      state.loanPurpose =''
    }}
  }
})
export default accountSlice.reducer
export const {deposit, withdraw, requestLoan, payLoan} = accountSlice.actions

// export default function accountReducer(state = initialAccountState, action){
//   switch(action.type){
//   case  'account/deposit':
//     return{ ...state, balance : state.balance + action.payload,isLoading:false}
//     case 'account/currencyConverter':
//       return{...state, isLoading : true}
//     case 'account/withdraw':
//       return{...state, balance : state.balance - action.payload}
//     case 'account/requestLoan':
//       if(state.loan > 0){
//         return state
//       }
//       return{...state, loan : action.payload.amount, loanPurpose : action.payload.purpose}
//     case 'account/payLoan':
//       return{...state, loan : 0, loanPurpose : "", balance : state.balance -state.loan}
//     default:
//       return state
//  }
// }
// export function deposit (amount, currency){
//   if(currency == 'USD') return {type : 'account/deposit', payload : amount}
// return async function (dispatch, getState){
//   dispatch({ type: 'account/currencyConverter' });
//   const url = `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=EUR`;
// try{
// const res = await fetch(url)
// const data = await res.json();
// const convertedAmount = data.rates.EUR;
// console.log(convertedAmount);
// dispatch({ type: 'account/deposit', payload: convertedAmount });
//     } catch (error) {
//       console.error("Error fetching exchange rate:", error);
//     }
// }
// }
//   export function withdraw (amount){
//     return {type : 'account/withdraw', payload : amount}
//   }
//   export function requestLoan (amount,  purpose){
//     return {type : 'account/requestLoan', payload : {amount, purpose}}
//   }
//   export function payLoan (){
//     return {type : 'account/payLoan'}
//   }