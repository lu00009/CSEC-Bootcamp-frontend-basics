import React from "react";
import { useFormik } from "formik";
const CredentialsInformation = () => {
  const formik = useFormik({
    initialValues : {
      email : '',
      password: '',
      confirm:''

    },
    onSubmit : values =>{
      alert(JSON.stringify(values,null,2))
    }
  })
  return (
    <div className="grid gap-4 p-4 border rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold">Credentials Information</h2>
      
      <label className="block">
        <span className="text-sm font-medium">Email</span>
        <input
          id="email"
          name="email"
          onChange={formik.handleChange}
          type="email"
          values={formik.values.email}
          placeholder="Enter your email"
          className="w-full px-3 py-2 mt-1 border rounded-md"
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium">Password</span>
        <input
          id="password"
          name="password"
          onChange={formik.handleChange}
          values = {formik.values.password}
          type="password"
          placeholder="Enter your password"
          className="w-full px-3 py-2 mt-1 border rounded-md"
        />
      </label>
      <label className="block">
        <span className="text-sm font-medium ">Confirm Password</span>
        <input
          id="confirm"
          name="confirm"
          onChange={formik.handleChange}
          value={formik.values.confirm}
          type="password"
          placeholder="Enter your password"
          className="w-full px-3 py-2 mt-1 border rounded-md"
        />
      </label>
    </div>
  );
};

export default CredentialsInformation;
