import * as yup from "yup";

export const post1Validation = yup.object({
  title: yup.string().required("enter title"),
  type: yup.string().required("enter type"),
  salary: yup.string().required("enter salary"),
  description: yup.string().required("enter description"),
});
export const post2Validation = yup.object({
  company: yup.string().required("enter company name"),
  logo: yup.string().required("enter the logo url"),
  isBookMarked: yup.bool().required("isBookmarked"),
  location: yup.string().required("enter the location"),
  experienceLevel: yup.string().required("enter the experiance level"),
  currency: yup.string().required("enter the currency"),
});
