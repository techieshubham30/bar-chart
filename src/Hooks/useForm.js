import { useEffect, useState } from "react";
const useForm = (callback,formValidation) => {
  const [formValues, setFromValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    userName: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState({});
  const [isFormSubmited, setFormSubmited] = useState(false);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    setErrors(formValidation(formValues));
    setFormSubmited(true);
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFromValues({
      ...formValues,
      [name]: e.target.value,
    });
  };

  useEffect(()=>{
    if(Object.keys(errors).length === 0 && isFormSubmited){
      callback();
    }
  }, [errors])
  return { onChangeHandler, formValues, formSubmitHandler, errors};
};

export { useForm };
