const formValidation = ({
    userName,
    email,
    password,
    confirmPassword,
    phoneNumber,
  }) => {
    const errors = {};
  
    if (!userName.trim()) {
      errors.userName = "Username required";
    }
  
    if (!email) {
      errors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email address";
    }
  
    if (!password) {
      errors.password = "Password required";
    } else if (password.length < 6) {
      errors.password = "Password length needs to atleast 6 character";
    }
  
    if (!confirmPassword) {
      errors.confirmPassword = "Confirm password required";
    } else if (confirmPassword !== password) {
      errors.confirmPassword = "Confirm password does not match";
    }
  
    if (!phoneNumber) {
      errors.phoneNumber = "Phone number reqired";
    }
  
    return errors;
  };
  
  export { formValidation };
  