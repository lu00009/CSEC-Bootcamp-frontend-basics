import React from "react";
import { useFormik } from "formik";
const HandlesInformation = () => {
  const formik = useFormik({
    initialValues: {
      twitter : '',
      linkedIn : ''
    },
    onSubmit : values =>{
      alert(JSON.stringify(values,null,2))
    }
    }
  )
  return (
    <div className="grid gap-4 p-4 border rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold">Handles Information</h2>
      
      <label className="block">
        <span className="text-sm font-medium">Twitter Handle</span>
        <input
          id="twitter"
          name="twitter"
          type="text"
          placeholder="@yourhandle"
          onChange={formik.handleChange}
          className="w-full px-3 py-2 mt-1 border rounded-md"
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium">LinkedIn Profile</span>
        <input
          id="linkedIn"
          name="linkedIn"
          type="text"
          placeholder="linkedin.com/in/yourname"
          onChange={formik.handleChange}
          className="w-full px-3 py-2 mt-1 border rounded-md"
        />
      </label>
    </div>
  );
};

export default HandlesInformation;
