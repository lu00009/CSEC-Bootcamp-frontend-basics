import React from 'react'
import { useSelector } from 'react-redux'
const Account = () => {
  const account = useSelector((store)=>store.account.balance)
  return (
    <div>
      your balance is {account}
    </div>
  )
}

export default Account
