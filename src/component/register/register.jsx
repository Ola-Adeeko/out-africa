import React, { useEffect, useState } from "react";
import FormInput from "../form-input/form-input";
import CustomButton from "../button/button";
import "./register.css";
import { useNavigate } from "react-router";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  useEffect(() => {
    document.title = "Out Africa - Register";
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      default:
        break;
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    let formFields = ["name", "email", "phone"];

    let isValid = true;

    formFields.forEach((field) => {
      isValid = validateField(field) && isValid;
    });

    if (isValid) {
      console.log(name);
      console.log(email);
      console.log(phone);
      setName("");
      setEmail("");
      setPhone("");
      navigate("/register/success");
    }
  };

  function validateField(name) {
    let isValid = false;

    if (name === "name") isValid = validateName();
    else if (name === "email") isValid = validateEmail();
    else if (name === "phone") isValid = validatePhone();

    return isValid;
  }

  function validatePhone() {
    let phoneError = false;
    const value = phone;
    if (value.trim() === "") phoneError = true;

    setPhoneError(phoneError);
    return phoneError === false;
  }

  function validateEmail() {
    let emailError = false;
    const value = email;
    if (value.trim() === "") emailError = true;

    setEmailError(emailError);
    return emailError === false;
  }

  function validateName() {
    let nameError = false;
    const value = name;
    if (value.trim() === "") nameError = true;

    setNameError(nameError);
    return nameError === false;
  }

  const act1 = name.length > 1 && email.length > 1;

  const isActive = act1 && phone.length > 1;

  const navigate = useNavigate();

  return (
    <div className="reg-page">
      <div className="reg-container">
        <span className="r-head">
          Register to get notified as soon as we launch.
        </span>
        <form className="r-form" onSubmit={handleSubmit}>
          <FormInput
            label="Full name"
            name="name"
            value={name}
            handleChange={handleChange}
            error={nameError}
          />
          <FormInput
            label="Email address"
            name="email"
            value={email}
            handleChange={handleChange}
            error={emailError}
          />
          <FormInput
            label="Phone number"
            name="phone"
            value={phone}
            handleChange={handleChange}
            error={phoneError}
            type="tel"
          />
          <CustomButton type="submit" disabled={!isActive}>
            Join the waitlist
          </CustomButton>
        </form>
      </div>
    </div>
  );
};

export default Register;
