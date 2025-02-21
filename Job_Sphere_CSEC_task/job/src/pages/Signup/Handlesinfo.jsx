import logo2 from "../../assets/signup.svg";
import logo from '../../assets/jobsphere.svg'
import {useFormik} from 'formik'
import { handleInfoValidation } from "./signup.validation";
import { useStepper } from "../../store/stepper";
import { useSignupInfo } from "../../store/signupinfo";
const Handleinfo = () => {
  const {setHandleInformation} = useSignupInfo()
  const {next, back} = useStepper()
  const formik = useFormik({
    initialValues : {
      leetcode : '',
      codeforce : '',
      linkedin : ''
    },validationSchema: handleInfoValidation ,
    onSubmit : values => {
      setHandleInformation(values)
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
        <input type="text" placeholder="Leetcode" className="pl-1" id="leetcode" name="leetcode" {...formik.getFieldProps('leetcode')} />
      </div>
      {formik.touched.leetcode && formik.errors.leetcode ? (<div className="text-red-600">{formik.errors.leetcode}</div>):null}
      <div  className="mt-6 w-[320px] h-[30px] border-[1px] rounded-[6px] outline-none p-0.5">
        {" "}
        <img src="" alt="" />
        <input type="text" placeholder="Codeforce" className="pl-1" id="codeforce" name="codeforce" {...formik.getFieldProps('codeforce')}/>
      </div>
      {formik.touched.codeforce && formik.errors.codeforce ? (<div className="text-red-600">{formik.errors.codeforce}</div>):null}

      <div  className="mt-6 w-[320px] h-[30px] border-[1px] rounded-[6px] outline-none p-0.5">
        {" "}
        <img src="" alt="" />
        <input type="text" placeholder="Github" className="pl-1" id="github" name="github" {...formik.getFieldProps('github')} />
      </div>
      {formik.touched.github && formik.errors.github ? (<div className="text-red-600">{formik.errors.github}</div>):null}      
      <div className="w-[320px] h-[30px] rounded-[8px] pt-[4px] pr-[14px] pb-[25px] pl-[100px] gap-[4px] bg-[#0034D1]  mt-6 ">
        <button className="text-white top-[6px] left-[47px] font-[500] text-[18px] leading-[21.78px]" type="submit"
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

export default Handleinfo;
