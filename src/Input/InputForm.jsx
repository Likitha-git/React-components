import { useState , useRef, useEffect } from "react";
import "./InputForm.css";

function InputForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const nameInputRef = useRef(null);

   useEffect(() => {
    nameInputRef.current.focus();
  }, []);


  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
    setFormData(updatedData);
  console.log("Updated Form Data:", updatedData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form Data:", formData);
    alert(`Name: ${formData.name}, Email: ${formData.email}`);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Input Form</h2>

      <input
        type="text"
        name="name"
        placeholder="Enter name"
        value={formData.name}
        onChange={handleChange}
        ref={nameInputRef}
      />

      <input
        type="email"
        name="email"
        placeholder="Enter email"
        value={formData.email}
        onChange={handleChange}
      />
        <input
  type="password"
  name="password"
  placeholder="Enter password"
  value={formData.password}
  onChange={handleChange}
/>

      <button type="submit">Submit</button>
    </form>
  );
}

export default InputForm;
