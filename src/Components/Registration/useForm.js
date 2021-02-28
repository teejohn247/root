import { useState, useEffect } from "react";
import {useHistory} from 'react-router-dom';



const useForm = (callback, validate) => {
  const history = useHistory()

  const [values, setValues] = useState({
    organisationname: "",
    username: "",
    email: "",
    contact: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
    history.push('/login');
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  });
  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};
export default useForm;
