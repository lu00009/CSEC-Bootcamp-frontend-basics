import * as Yup from 'yup'

const checkAvailabilityUsername = async (username) => {
  const takenUsernames = ["johnDoe", "user123", "admin"]; 
  return !takenUsernames.includes(username); 
};
export const personalInfoValidation = Yup.object ({
  firstName : Yup.string().max(15, 'must be 15 character or less').required('Required'),
  lastName : Yup.string().max(15, 'must be 15 character or less').required('Required'),
  email : Yup.string().email('Invalid email address').required('Required'),
  phoneNumber : Yup.string().required('Required')
  .matches(
    /^(?:\+251|0)?\(?(9|7)\)?\d{8}$/,
    "Please enter a valid phone Number"
  ),
})

export const handleInfoValidation = Yup.object({
  leetcode : Yup.string().required('You must enter your username'),
  codeforce : Yup.string().required('You must enter your username'),
  github : Yup.string().required('You must enter your username'),

})

export const credentialInfoValidation = Yup.object({
  username : Yup.string().min(1, "Mininum 1 characters").max(15, "Maximum 15 characters").test("username", "This username has already been taken", async function (value) {
    const isAvailable = await checkAvailabilityUsername(value);
    return isAvailable; 
  }).required("You must enter a username"),
  password : Yup.string().min(6).required('Required'),
  confirmPassword : Yup.string().when('password', (password,field) => 
    password ? field.required('Required').oneOf([Yup.ref('password')], 'Passwords must match') 
  : field ),
  })
  
 