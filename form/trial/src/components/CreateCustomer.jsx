import {useState } from 'react'
import { useDispatch } from 'react-redux'
import { createCustomer } from '../features/customers/customerSlice'
const CreateCustomer = () => {
  const [fullName, setFullName] = useState('')
  const [nationalId, setNationalId] = useState('')
  const dispatch = useDispatch()
  function handleClick(){
  if(!fullName||!nationalId) return;
  dispatch(createCustomer(fullName,nationalId))
  console.log(fullName,nationalId);
  
  }
  return (
    <div>
      <h2>Create a new customer</h2>
      <div className='fullname'>
        <label htmlFor="">Customer Full Name</label>
        <input type="text"
        value={fullName}
        onChange={(e)=>setFullName(e.target.value)} />
      </div>
      <div><button onClick={handleClick}>Create FullName</button></div>
      <div className='nationalid'>
        <label htmlFor="">Customer National Id</label>
        <input type="text"
        value={nationalId}
        onChange={(e)=>setNationalId(e.target.value)} />
      </div>
      <div><button onClick={handleClick}>Create National Id</button></div>
    </div>
  )
}

export default CreateCustomer
