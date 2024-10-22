import React from 'react'
import { Formik } from 'formik';
const Froms = () => {
  return (
   
<div>
     <h1>Anywhere in your app!</h1>
     <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form className='w-[20%] h-[70vh] rounded  text-white flex flex-col items-center justify-center bg-slate-500'onSubmit={handleSubmit}>
           <h1>Sign Up</h1>
           <p>enter your email</p>
           <input
           className='text-black rounded text-center py-1 px-3'
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
           {errors.email && touched.email && errors.email}
           <p>enter your password</p>
           <input
           className='text-black rounded text-center py-1 px-3'
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
           {errors.password && touched.password && errors.password}
           <button className='bg-blue-500 text-white px-3 py-1 rounded-lg my-4' type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
   </div>
 
  
  )
}

export default Froms