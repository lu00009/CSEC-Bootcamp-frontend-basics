import { usePost} from '../../store/post'
import { post2Validation } from './validation'
import { useFormik } from 'formik'
import { useStepperPost } from '../../store/stepperPost'
const Post2 = () => {
  const {setPost2}= usePost()
  const {next , back} = useStepperPost()

  const formik = useFormik({
    initialValues:{
      company : '',
      logo : '',
      isBookmarked :'',
      location : '',
      experiancelevel : '',
      currency: ''

    }, validationSchema : post2Validation,
    onSubmit : values =>{
      console.log(formik.errors);
      console.log(values, 'values')
      setPost2(values)
      console.log(values);
      
    next()
    console.log("Updated step:", useStepperPost.getState().count);  // Check if it increments
  }
  })
  return (
    <form onSubmit={formik.handleSubmit}>
       <div className="flex-col content-center ml-26">
    <div className="mt-6">
      {" "}
    </div>
    <div  className="mt-6 w-[320px] h-[30px] border-[1px] rounded-[6px] outline-none p-0.5 ">
      {" "}
      <input type="text" placeholder="company" className="pl-1" id="company" name="company" {...formik.getFieldProps('company')} />
    </div>
          {formik.touched.company && formik.errors.company ? (<div className='text-red-600'>{formik.errors.company}</div>):null}

    <div  className="mt-6 w-[320px] h-[30px] border-[1px] rounded-[6px] outline-none p-0.5">
      {" "}
      <input type="link" placeholder="logo" className="pl-1" id="logo" name="logo" {...formik.getFieldProps('logo')} />
    </div>
          {formik.touched.logo && formik.errors.logo ? (<div className='text-red-600'>{formik.errors.logo}</div>):null}

    <div  className="mt-6 w-[320px] h-[30px] border-[1px] rounded-[6px] outline-none p-0.5">
      {" "}
      <input type="text" placeholder="isBookmarked" className="pl-1" id="isBookmarked" name="isBookmarked" {...formik.getFieldProps('isBookmarked')} />
    </div>
          {formik.touched.isBookmarked && formik.errors.isBookmarked? (<div className='text-red-600'>{formik.errors.isBookmarked}</div>):null}

    <div  className="mt-6 w-[320px] h-[30px] border-[1px] rounded-[6px] outline-none p-0.5">
      {" "}
      <input type="text" placeholder="location" className="pl-1" id="location" name="location" {...formik.getFieldProps('location')}/>
    </div>
          {formik.touched.location && formik.errors.location ? (<div className='text-red-600'>{formik.errors.location}</div>):null}

    <div  className="mt-6 w-[320px] h-[30px] border-[1px] rounded-[6px] outline-none p-0.5">
    {" "}
    <input type="text" placeholder="experiance-level" className="pl-1" id="experiancelevel" name="experiancelevel" {...formik.getFieldProps('experiancelevel')}/>
  </div>
        {formik.touched.experiancelevel && formik.errors.experiancelevel ? (<div className='text-red-600'>{formik.errors.experiancelevel}</div>):null}

  <div  className="mt-6 w-[320px] h-[30px] border-[1px] rounded-[6px] outline-none p-0.5">
  {" "}
  <input type="text" placeholder="currency" className="pl-1" id="currency" name="currency" {...formik.getFieldProps('currency')}/>
</div>
      {formik.touched.currency && formik.errors.currency ? (<div className='text-red-600'>{formik.errors.currency}</div>):null}

    <div className="w-[320px] h-[30px] rounded-[8px] pt-[4px] pr-[14px] pb-[25px] pl-[100px] gap-[4px] bg-[#0034D1]  mt-6 ">
      <button className="text-white top-[6px] left-[47px] font-[500] text-[18px] leading-[21.78px]" type="submit"
      >Submit</button>
       
    </div>
    <div className="w-[320px] h-[30px] rounded-[8px] pt-[4px] pr-[14px] pb-[25px] pl-[100px] gap-[4px] bg-[#0034D1]  mt-6 ">
    <button className="text-white top-[6px] left-[47px] font-[500] text-[18px] leading-[21.78px]" type="button" onClick={back}
      >Back</button>
    </div>

  </div>
    </form>
    
  )
}

export default Post2
