import React, { useEffect, useState } from "react";
import { FormDropdownInput, FormInput } from "../form-input/form-input";
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
  const [businessName, setBusinessName] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [businessPhone, setBusinessPhone] = useState("");
  const [businessContact, setBusinessContact] = useState("");
  const [businessIndustry, setBusinessIndustry] = useState("");
  const [businessNameError, setBusinessNameError] = useState(false);
  const [businessEmailError, setBusinessEmailError] = useState(false);
  const [businessPhoneError, setBusinessPhoneError] = useState(false);
  const [businessContactError, setBusinessContactError] = useState(false);
  const [businessIndustryError, setBusinessIndustryError] = useState(false);

  const [form, setForm] = useState(1);

  useEffect(() => {
    document.title = "Out Africa | Register";
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
      case "businessName":
        setBusinessName(value);
        break;
      case "businessEmail":
        setBusinessEmail(value);
        break;
      case "businessPhone":
        setBusinessPhone(value);
        break;
      case "businessContact":
        setBusinessContact(value);
        break;
      case "businessIndustry":
        setBusinessIndustry(value);
        break;
      default:
        break;
    }
  }

  const handleDropChange = (item) => {
    setBusinessIndustry(item);
  };

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

  const handleSubmit2 = (event) => {
    event.preventDefault();

    let formFields = [
      "businessName",
      "businessEmail",
      "businessPhone",
      "businessContact",
      "businessIndustry",
    ];

    let isValid = true;

    formFields.forEach((field) => {
      isValid = validateBusinessField(field) && isValid;
    });

    if (isValid) {
      console.log(businessName);
      console.log(businessEmail);
      console.log(businessPhone);
      setBusinessName("");
      setBusinessEmail("");
      setBusinessPhone("");
      setBusinessContact("");
      setBusinessIndustry("");
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

  function validateBusinessField(name) {
    let isValid = false;

    if (name === "businessName") isValid = validateBusinessName();
    else if (name === "businessEmail") isValid = validateBusinessEmail();
    else if (name === "businessPhone") isValid = validateBusinessPhone();
    else if (name === "businessContact") isValid = validateBusinessContact();
    else if (name === "businessIndustry") isValid = validateBusinessIndustry();

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

  function validateBusinessName() {
    let businessNameError = false;
    const value = businessName;
    if (value.trim() === "") businessNameError = true;

    setBusinessNameError(businessNameError);
    return businessNameError === false;
  }

  function validateBusinessEmail() {
    let businessEmailError = false;
    const value = businessEmail;
    if (value.trim() === "") businessEmailError = true;

    setBusinessEmailError(businessEmailError);
    return businessEmailError === false;
  }

  function validateBusinessPhone() {
    let businessPhoneError = false;
    const value = businessPhone;
    if (value.trim() === "") businessPhoneError = true;

    setBusinessPhoneError(businessPhoneError);
    return businessPhoneError === false;
  }

  function validateBusinessContact() {
    let businessContactError = false;
    const value = businessContact;
    if (value.trim() === "") businessContactError = true;

    setBusinessContactError(businessContactError);
    return businessContactError === false;
  }

  function validateBusinessIndustry() {
    let businessIndustryError = false;
    const value = businessIndustry;
    if (value.trim() === "") businessIndustryError = true;

    setBusinessIndustryError(businessIndustryError);
    return businessIndustryError === false;
  }

  const act1 = name.length > 1 && email.length > 1;
  const isActive = act1 && phone.length > 1;

  const act2 = businessName.length > 1 && businessEmail.length > 1;
  const act3 = businessPhone.length > 1 && businessContact.length > 1;
  const act4 = businessIndustry.length > 1 && act2;
  const isEnabled = act3 && act4;

  const navigate = useNavigate();

  return (
    <div className="reg-page">
      <div className="reg-container">
        <span className="r-head">
          Register to get notified as soon as we launch.
        </span>
        <div className="form-head">
          <div
            className={form === 1 ? "form-type-active" : "form-type"}
            onClick={() => setForm(1)}
          >
            <span>Students</span>
          </div>
          <div
            className={form === 2 ? "form-type-active" : "form-type"}
            onClick={() => setForm(2)}
          >
            <span>Partner Brands</span>
          </div>
        </div>
        {form === 1 ? (
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
        ) : (
          <form className="r-form" onSubmit={handleSubmit2}>
            <FormInput
              label="Business name"
              name="businessName"
              value={businessName}
              handleChange={handleChange}
              error={businessNameError}
            />
            <FormInput
              label="Business email address"
              name="businessEmail"
              value={businessEmail}
              handleChange={handleChange}
              error={businessEmailError}
            />
            <FormInput
              label="Business phone number"
              name="businessPhone"
              value={businessPhone}
              handleChange={handleChange}
              error={businessPhoneError}
              type="tel"
            />
            <FormInput
              label="Name of Contact person"
              name="businessContact"
              value={businessContact}
              handleChange={handleChange}
              error={businessContactError}
            />
            <FormDropdownInput
              label="Business Industry"
              name="businessIndustry"
              value={businessIndustry}
              handleChange={handleChange}
              handledropchange={handleDropChange}
              error={businessIndustryError}
            />

            <CustomButton type="submit" disabled={!isEnabled}>
              Join the waitlist
            </CustomButton>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
