import React, { useState, useContext } from "react";
import { CurrentUserContext } from "../../components/contexts/users/current-user.context";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import "./create-brewer-page.styles.scss";

const CreateBrewer = (props) => {
  //initialise state
  const [data, setData] = useState({
    name: "",
  });
  // use currentUser.id from context to store userdata in context state
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

    const response = await fetch("http://localhost:8080/brewers/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const resJson = await response.json();

    //setState functions to update CurrentUserContext from current-user.js
    const setCurrentUserName = () => currentUser.setName(resJson.name);
    const setCurrentUserId = () => currentUser.setId(resJson.id);
    setCurrentUserName();
    setCurrentUserId();
    const onclickRedirect = () => props.history.push("/createrecipe");
    onclickRedirect();
  };

  return (
    <div className="create-brewer">
      <h1>Create Brewer</h1>
      <form className="create-brewer-form" onSubmit={handleSubmit}>
        <div>
          <TextField
            className="input"
            type="text"
            value={data.name}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            name="name"
            onChange={handleChange}
            required
          />
        </div>
        <Button
          className="create-brewer-button"
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
export default CreateBrewer;
