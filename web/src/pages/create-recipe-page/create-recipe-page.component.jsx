import React, { useState, useContext } from "react";
import FormInput from "../../components/form-input/form-input.component";
import { CurrentUserContext } from "../../components/contexts/users/current-user.context";

import "./create-recipe-page.styles.scss";

const CreateRecipe = () => {
  //initialse state
  const [data, setData] = useState({
    title: "",
    description: "",
    bean_type: "",
    brew_time: "",
    brew_method: "",
    taste_notes: "",
    tags: "",
  });

  // use currentUser.id from context to define GET url parameter
  const currentUser = useContext(CurrentUserContext);

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
    const brewer = currentUser.id;
    const response = await fetch(
      `http://localhost:8080/brewers/${brewer}/recipes/`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );
    const resJson = await response.json();
    console.log(resJson); //Remove
  };

  return (
    <div className="create-recipe">
      <h1>Create Recipe</h1>
      <form className="create-recipe-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="title"
          value={data.title}
          onChange={handleChange}
          label="Title"
          required
        />
        <FormInput
          type="text"
          name="description"
          value={data.description}
          onChange={handleChange}
          label="Description"
          required
        />
        <FormInput
          type="text"
          name="bean_type"
          value={data.bean_type}
          onChange={handleChange}
          label="Bean Type"
          required
        />
        <FormInput
          type="text"
          name="brew_time"
          value={data.brew_time}
          onChange={handleChange}
          label="Brew Time"
          required
        />
        <FormInput
          type="text"
          name="brew_method"
          value={data.brew_method}
          onChange={handleChange}
          label="Brew Method"
          required
        />
        <FormInput
          type="text"
          name="taste_notes"
          value={data.taste_notes}
          onChange={handleChange}
          label="Taste Notes"
          required
        />
        <button type="submit">POST</button>
      </form>
    </div>
  );
};
export default CreateRecipe;
