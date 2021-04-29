import React, { useState, useContext } from "react";
import { CurrentUserContext } from "../../components/contexts/users/current-user.context";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import "./create-recipe-page.styles.scss";

const CreateRecipe = (props) => {
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
    // give redirect funtionality to button
    const onclickRedirect = () =>
      props.history.push("/brewersrecipes/:profileId");
    onclickRedirect();
  };

  return (
    <div className="create-recipe">
      <h1>Create Recipe</h1>
      <form className="create-recipe-form" onSubmit={handleSubmit}>
        <div>
          <TextField
            className="input"
            id="outlined-basic"
            name="title"
            type="text"
            value={data.title}
            onChange={handleChange}
            label="Title"
            variant="outlined"
            required
          />
          <TextField
            className="input"
            id="outlined-basic"
            name="description"
            type="text"
            value={data.description}
            onChange={handleChange}
            label="Description"
            variant="outlined"
            required
          />
          <TextField
            className="input"
            id="outlined-basic"
            name="bean_type"
            type="text"
            value={data.bean_type}
            onChange={handleChange}
            label="Bean type"
            variant="outlined"
            required
          />
          <TextField
            className="input"
            id="outlined-basic"
            name="brew_time"
            type="text"
            value={data.brew_time}
            onChange={handleChange}
            label="Brew time"
            variant="outlined"
            required
          />
          <TextField
            className="input"
            id="outlined-basic"
            name="brew_method"
            type="text"
            value={data.brew_method}
            onChange={handleChange}
            label="Brew method"
            variant="outlined"
            required
          />
          <TextField
            className="input"
            id="outlined-basic"
            name="taste_notes"
            type="text"
            value={data.taste_notes}
            onChange={handleChange}
            label="Taste notes"
            variant="outlined"
            required
          />
        </div>

        <Button
          className="create-recipe-button"
          variant="contained"
          type="submit"
          size="large"
        >
          Create
        </Button>
      </form>
    </div>
  );
};
export default CreateRecipe;
