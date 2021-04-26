import React, { useState } from "react";

import "./create-brewer-page.styles.scss";

import FormInput from "../../components/form-input/form-input.component";

const CreateBrewer = () => {
  //initialise state
  const [data, setData] = useState({
    name: "",
  });

  //form data from Form saved in state
  const handleChange = (event) => {
    const { name, value } = event.target;

    setData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  // POST request to API
  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:8080/brewers/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const resJson = await response.json();
    console.log(resJson);
  };

  return (
    <div className="create-brewer">
      <h1>Create Brewer</h1>
      <form className="create-brewer-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
          label="Name"
          required
        />
        <button type="submit">POST</button>
      </form>
    </div>
  );
};
export default CreateBrewer;
