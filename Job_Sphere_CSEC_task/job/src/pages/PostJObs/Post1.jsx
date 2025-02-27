import { useFormik } from "formik";
import { post1Validation } from "./validation";
import { useStepperPost } from "../../stores/stepperPost";
import { setJobData } from "../../features/JobdataSlice";
import { useDispatch } from "react-redux";
const Post1 = () => {
  const dispatch = useDispatch();
  const { next } = useStepperPost();
  console.log("next function:", next);

  const formik = useFormik({
    initialValues: {
      title: "",
      type: "",
      salary: "",
      description: "",
    },
    validationSchema: post1Validation,
    onSubmit: (values) => {
      console.log(formik.errors);
      console.log(values, "values");

      dispatch(setJobData(values));
      console.log("next......");
      next();
      console.log("Updated step:", useStepperPost.getState().count); // Check if it increments
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex gap-58 ml-5">
        <div className="flex-col content-center ml-26">
          <div className="mt-6">
            {" "}
            <h3 className="font-bold text-2xl">Post Job</h3>
          </div>
          <div className="mt-6 w-[320px] h-[30px] border-[1px] rounded-[6px] outline-none p-0.5 ">
            {" "}
            <input
              type="text"
              placeholder="title"
              className="pl-1"
              id="title"
              name="title"
              {...formik.getFieldProps("title")}
            />
          </div>
          {formik.touched.title && formik.errors.title ? (
            <div className="text-red-600">{formik.errors.title}</div>
          ) : null}

          <div className="mt-6 w-[320px] h-[30px] border-[1px] rounded-[6px] outline-none p-0.5">
            {" "}
            <input
              type="text"
              placeholder="type"
              className="pl-1"
              id="type"
              name="type"
              {...formik.getFieldProps("type")}
            />
          </div>
          {formik.touched.type && formik.errors.type ? (
            <div className="text-red-600">{formik.errors.type}</div>
          ) : null}

          <div className="mt-6 w-[320px] h-[30px] border-[1px] rounded-[6px] outline-none p-0.5">
            {" "}
            <input
              type="number"
              placeholder="salary"
              className="pl-1"
              id="salary"
              name="salary"
              {...formik.getFieldProps("salary")}
            />
          </div>
          {formik.touched.salary && formik.errors.salary ? (
            <div className="text-red-600">{formik.errors.salary}</div>
          ) : null}

          <div className="mt-6 w-[320px] h-[30px] border-[1px] rounded-[6px] outline-none p-0.5">
            {" "}
            <input
              type="text"
              placeholder="description"
              className="pl-1"
              id="description"
              name="description"
              {...formik.getFieldProps("description")}
            />
          </div>
          {formik.touched.description && formik.errors.description ? (
            <div className="text-red-600">{formik.errors.description}</div>
          ) : null}

          <div className="w-[320px] h-[30px] rounded-[8px] pt-[4px] pr-[14px] pb-[25px] pl-[100px] gap-[4px] bg-[#0034D1]  mt-6 ">
            <button
              className="text-white top-[6px] left-[47px] font-[500] text-[18px] leading-[21.78px]"
              type="submit"
            >
              Continue
            </button>
          </div>
        </div>
        {/* <div className="w-[500px] h-[150 px] rounded-[9.56px] p-[4.79px]  ">
          <img src='' className="" />
        </div> */}
      </div>
    </form>
  );
};

export default Post1;
