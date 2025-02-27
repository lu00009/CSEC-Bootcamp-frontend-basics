import { useSelector } from "react-redux"
const Customer = () => {
 const customer = useSelector((store)=>store.customer.fullName)
  
  return (
    <div>
      hey, {customer}
      
    </div>
  )
}

export default Customer
