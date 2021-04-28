import React from "react";
import TextField from "@material-ui/core/TextField";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    {/* <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${otherProps.value.length} ? 'shrink' : ''} form-input-label`}
      >
        {label}
      </label>
    ) : null} */}

    <TextField
      className="input"
      id="outlined-basic"
      label="Create Brewer"
      variant="outlined"
      required
    />
  </div>
);

export default FormInput;
