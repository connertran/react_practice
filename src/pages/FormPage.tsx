import React, { FormEvent, ChangeEvent } from "react";
import { useState } from "react";
interface Form {
  firstName: string;
  lastName: string;
  password: string;
}
function FormPage() {
  const formObj: Form = {
    firstName: "s",
    lastName: "",
    password: "",
  };
  const [formData, setFormData] = useState<Form>(formObj);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const { name, value } = e.target;

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  }
  return (
    <>
      <h1>Form</h1>
      <form>
        <label htmlFor="firstName">First Name: </label>
        <input
          type="text"
          name="firstName"
          id="fistName"
          value={formData.firstName}
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor="lastName">Last Name: </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={formData.lastName}
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor="password">password: </label>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={(e) => handleChange(e)}
        />
      </form>
    </>
  );
}
export default FormPage;
