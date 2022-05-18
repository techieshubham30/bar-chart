import "./form.css";
import { useForm } from "../../Hooks/useForm";
import { formValidation } from "../../services/formValidation";
const Form = ({submitForm}) => {
  const { onChangeHandler, formValues, formSubmitHandler, errors } =
    useForm(submitForm,formValidation);
  
  return (
    <form className="form" onSubmit={formSubmitHandler}>
      <h1 className="form__title">Create an account</h1>
      <div className="form__inputs">
        <label htmlFor="email" className="form__label">
          Your email address
        </label>
        <input
          type="email"
          className="form__input"
          name="email"
          value={formValues.email}
          onChange={onChangeHandler}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div className="form__inputs">
        <label htmlFor="password" className="form__label">
          Your Password
        </label>
        <input
          type="password"
          className="form__input"
          name="password"
          value={formValues.password}
          onChange={onChangeHandler}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>

      <div className="form__inputs">
        <label htmlFor="confirm password" className="form__label">
          Confirm your password
        </label>
        <input
          type="password"
          className="form__input"
          name="confirmPassword"
          value={formValues.confirmPassword}
          onChange={onChangeHandler}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
      </div>

      <div className="form__inputs">
        <label htmlFor="name" className="form__label">
          Your full name
        </label>
        <input
          type="text"
          className="form__input"
          name="userName"
          value={formValues.userName}
          onChange={onChangeHandler}
        />
        {errors.userName && <p>{errors.userName}</p>}
      </div>

      <div className="form__inputs">
        <label htmlFor="number" className="form__label">
          Your phone number
        </label>
        <input
          type="number"
          className="form__input"
          name="phoneNumber"
          value={formValues.phoneNumber}
          onChange={onChangeHandler}
        />
        {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
      </div>

      <button className="form__btn">Create account</button>
    </form>
  );
};

export { Form };
