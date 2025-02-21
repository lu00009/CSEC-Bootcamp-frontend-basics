import logo2 from '../../assets/signup.svg';
import logo from '../../assets/jobsphere.svg'
import {useFormik} from 'formik'
import { personalInfoValidation } from "./signup.validation";
import { useStepper } from "../../store/stepper";
import { useSignupInfo } from "../../store/signupinfo";
const Personalinfo = () => {

  const {setPersonalInformation} = useSignupInfo()
  const {next} = useStepper()
  const formik = useFormik({
    initialValues : {
      firstName : '',
      lastName : '',
      email : '',
      phoneNumber : ''
    },validationSchema: personalInfoValidation ,
    onSubmit : values => {
      setPersonalInformation(values)
      next()
    }
  })
  return (
    <form onSubmit={formik.handleSubmit}>
       <div className="flex gap-58 ml-5">
      <div className="flex-col content-center ml-26">
       <img src={logo} alt=""className="bg-[#0034D1] w-[130px] h-[51px] rounded-[9.56px] p-[4.79px]"/>
      <div className="mt-6">
        {" "}
        <h3 className="font-bold text-2xl">Create your account</h3>
      </div>
      <div  className="mt-6 w-[320px] h-[30px] border-[1px] rounded-[6px] outline-none p-0.5 ">
        {" "}
        <img src="" alt="" />
        <input type="text" placeholder="First name" className="pl-1" id="firstName" name="firstName" {...formik.getFieldProps('firstName')} />
      </div>
      {formik.touched.firstName && formik.errors.firstName ? (<div className='text-red-600'>{formik.errors.firstName}</div>):null}
      <div  className="mt-6 w-[320px] h-[30px] border-[1px] rounded-[6px] outline-none p-0.5">
        {" "}
        <img src="" alt="" />
        <input type="text" placeholder="Last name" className="pl-1" id="lastName" name="lastName" {...formik.getFieldProps('lastName')}/>
      </div>
      {formik.touched.lastName && formik.errors.lastName ? (<div className='text-red-600'>{formik.errors.lastName}</div>):null}

      <div  className="mt-6 w-[320px] h-[30px] border-[1px] rounded-[6px] outline-none p-0.5">
        {" "}
        <img src="" alt="" />
        <input type="text" placeholder="email" className="pl-1" id="email" name="email" {...formik.getFieldProps('email')} />
      </div>
      {formik.touched.email && formik.errors.email ? (<div className='text-red-600'>{formik.errors.email}</div>):null}
      <div  className="mt-6 w-[320px] h-[30px] border-[1px] rounded-[6px] outline-none p-0.5">
        {" "}
        <img src="" alt="" />
        <input type="text" placeholder="Phone Number" className="pl-1" id="phoneNumber" name="phoneNumber" {...formik.getFieldProps('phoneNumber')}/>
      </div>
      {formik.touched.phoneNumber && formik.errors.phoneNumber ? (<div className='text-red-600'>{formik.errors.phoneNumber}</div>):null}

      <div className="w-[320px] h-[30px] rounded-[8px] pt-[4px] pr-[14px] pb-[25px] pl-[100px] gap-[4px] bg-[#0034D1]  mt-6 ">
        <button className="text-white top-[6px] left-[47px] font-[500] text-[18px] leading-[21.78px]" type="submit"
        >Continue</button>
      </div>
    </div>
    <div className="w-[500px] h-[150 px] rounded-[9.56px] p-[4.79px]  ">
          <img src={logo2} className="" />
        </div>
    </div>
    </form>
   
  );
};

export default Personalinfo;
