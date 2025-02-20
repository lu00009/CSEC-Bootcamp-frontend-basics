import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup'

const PersonalInformations = () => {
  // const validate = (values) => {
  //   const errors = {};

  //   if (!values.fullName) {
  //     errors.fullName = "Required";
  //   } else if (values.fullName.length > 15) {
  //     errors.fullName = "Must be 15 characters or less";
  //   }

  //   return errors;
  // };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      date: "",
    },
    validationSchema: Yup.object({
      fullName : Yup.string().max(15,'must be 15 character').required('Required')
    }),
    
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="grid gap-4 p-4 border rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold">Personal Information</h2>

      {/* Full Name Input */}
      <label className="block">
        <span className="text-sm font-medium">Full Name</span>
        <input
          id="fullName"
          name="fullName"
          type="text"
          placeholder="Enter your full name"
          {...formik.getFieldProps('fullName')}
          className="w-full px-3 py-2 mt-1 border rounded-md"
        />
      </label>
      {formik.touched.fullName && formik.errors.fullName ? (
        <div className="text-red-500 text-sm">{formik.errors.fullName}</div>
      ) : null}

      {/* Date of Birth Input */}
      <label className="block">
        <span className="text-sm font-medium">Date of Birth</span>
        <input
          id="date"
          name="date"
          type="date"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.date}
          className="w-full px-3 py-2 mt-1 border rounded-md"
        />
      </label>
    </div>
  );
};

export default PersonalInformations;
