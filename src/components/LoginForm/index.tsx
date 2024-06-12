import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Inp from '../LoginInp';
import style from'../LoginForm/forum.module.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Define a validation schema using Yup
const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required').min(6, 'Password must be at least 6 characters'),
});

// Define form values type
interface FormValues {
  email: string;
  password: string;
  
}
interface Props{
    Languege:boolean
}
const LoginForm= (props:Props) => {
  // Handle form submission
  let [ckeck,setCheck]=useState(false)
  let {Languege }:any=props
  const handleSubmit = (values: FormValues) => {
    toast.success('Возмите меня на рботу :)', {
      position: 'top-right',
      autoClose: 5000,
    });
    alert(`        Email : ${values.email} 
        Password : ${values.password}
        Remember Me : ${ckeck}
        Чтобы увидеть другие страницы войдите как тренер
        `)

  };

  return (<>
   <div style={{width:"100%"}} className={style.center}>
      
      <Formik
        initialValues={{ email: '', password: '',remember:false }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form >
            <div className=''>
              
              {/* <Field type="email" id="email" name="email" /> */}
              <Inp placeholder='E-mail' name='email' isPassword={false} />
              {/* <ErrorMessage name="email" component="div" className="error" /> */}
            </div>
            <div>
              <Inp placeholder={Languege?'Пароль':'Password' } name='password' isPassword={true} />
              {/* <Field type="password" id="password" name="password" />
              <ErrorMessage name="password" component="div" className="error" /> */}
            </div>
            <div className={style.ckeckDiv}>
                <input type="checkbox" name="" id="" className='checkbox'  onClick={()=>setCheck(prew=>!prew)}/>
                <label htmlFor="" className={style.remember}>{Languege?'Запомнить меня':'Remember me' }</label>
            </div>
            <div>
                <button type="submit" className={style.submit}>{Languege?'Войти':'Login' }</button>
            </div>
          </Form>
        )}
      </Formik>
      
    </div>
    <ToastContainer/>
  </>
   
  );
};

export default LoginForm;
