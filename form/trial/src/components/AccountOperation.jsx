import {useDispatch} from 'react-redux'
import {useState} from 'react'
import {deposit, withdraw, requestLoan, payLoan} from '../features/accounts/accountsSlice'
const AccountOperation = () => {
  const [depositAmount,setDepositAmount] = useState(0)
  const [withdrawAmount, setWithdrawAmount] = useState(0)
  const [loan, setLoan] = useState(0)
  const [loanPurpose, setLoanPurpose] = useState("")
  const [currency, setCurrency] = useState("USD")

  const dispatch = useDispatch()
  function handleWithdraw(){
    if(withdrawAmount > 0){
    dispatch(withdraw(withdrawAmount, currency))
  }
console.log(withdrawAmount);
}
  function handleDeposit(){
    if(depositAmount > 0){
    dispatch(deposit(depositAmount, currency))
  }
  setDepositAmount(0)
console.log(depositAmount);}
  function handleLoan(){
    if(loan > 0){
    dispatch(requestLoan(loan, loanPurpose))
  }
  console.log(loan, loanPurpose);
  }
  function handlePayLoan(){
    dispatch(payLoan())
    console.log('pay loan');
  }
  return (
    <div className='background-color: lightblue'>
      <div className='deposit'><label htmlFor="">Deposit</label>
      <input type="number" onChange={(e)=> setDepositAmount(e.target.value)}/>
      <button onClick={handleDeposit} disabled={isLoading}>
        {isLoading ? 'converting...':`Deposit ${depositAmount}`}</button>
      <select name="currency" id="" onChange={(e)=> setCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option></select></div>
      <div className='withdraw'><label htmlFor="">Withdraw</label>
      <input type="number" onChange={(e)=> setWithdrawAmount(e.target.value)}/>
      <button onClick={handleWithdraw}>withdraw</button></div>
      <div className='loan'><label htmlFor="">Loan</label>
      <input type="number" onChange={(e)=> setLoan(e.target.value)}/>
      <input type="text" onChange={(e)=> setLoanPurpose(e.target.value)}/>
      <button onClick={handleLoan}>loan</button></div>
      <div className='pay loan'><label htmlFor="">Pay Loan</label>
      <button onClick={handlePayLoan}>pay Loan</button></div>
      
    </div>
  )
}

export default AccountOperation
