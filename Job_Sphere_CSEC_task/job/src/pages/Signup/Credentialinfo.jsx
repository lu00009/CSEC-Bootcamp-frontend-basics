import logo2 from "../../assets/signup.svg";
import logo from '../../assets/jobsphere.svg'
import {useFormik} from 'formik'
import { credentialInfoValidation } from "./signup.validation";
import { useStepper } from "../../store/stepper";
import { useSignupInfo } from "../../store/signupinfo";
const Credentialinfo = () => {
  const {setcredentialsInformation} = useSignupInfo()
  const {back, next} = useStepper()
  const formik = useFormik({
    initialValues : {
      username : '',
      password : '',
      confirmPassword : ''
    },validationSchema: credentialInfoValidation ,
    onSubmit : values => {
      setcredentialsInformation(values)
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
        <input type="text" placeholder="Username" className="pl-1" id="username" name="username" {...formik.getFieldProps('username')} />
      </div>
      {formik.touched.username && formik.errors.username ? (<div className="text-red-600">{formik.errors.username}</div>):null}
      <div  className="mt-6 w-[320px] h-[30px] border-[1px] rounded-[6px] outline-none p-0.5">
        {" "}
        <img src="" alt="" />
        <input type="text" placeholder="Password" className="pl-1" id="password" name="password" {...formik.getFieldProps('password')}/>
      </div>
      {formik.touched.password && formik.errors.password ? (<div className="text-red-600">{formik.errors.password}</div>):null}

      <div  className="mt-6 w-[320px] h-[30px] border-[1px] rounded-[6px] outline-none p-0.5">
        {" "}
        <img src="" alt="" />
        <input type="text" placeholder="Confirm Password" className="pl-1" id="confirmPassword" name="confirmPassword" {...formik.getFieldProps('confirmPassword')} />
      </div>
      {formik.touched.confirmPassword && formik.errors.confirmPassword ? (<div className="text-red-600">{formik.errors.confirmPassword}</div>):null}

      <div className="w-[320px] h-[30px] rounded-[8px] pt-[4px] pr-[14px] pb-[25px] pl-[100px] gap-[4px] bg-[#0034D1]  mt-6 ">
        <button className="text-white top-[6px] left-[47px] font-[500] text-[18px] leading-[21.78px]" type="submit" onClick={next}
        >Continue</button>
      </div>
      <div className="w-[320px] h-[30px] rounded-[8px] pt-[4px] pr-[14px] pb-[25px] pl-[100px] gap-[4px] bg-[#0034D1]  mt-6 ">
        <button className="text-white top-[6px] left-[47px] font-[500] text-[18px] leading-[21.78px]" type="button" onClick={back}
        >Back</button>
      </div>
    </div>
    <div className="w-[500px] h-[150 px] rounded-[9.56px] p-[4.79px]">
          <img src={logo2} className="" />
        </div>
    </div>
    </form>
   
  );
};

export default Credentialinfo;
