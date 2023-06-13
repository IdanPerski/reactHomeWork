import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Joi from "joi";
import React, { useState } from "react";

export default function MyForms() {
  const initialForm = {
    firstName: "",
    lastName: "",
  };

  //   const joi = required("joi");
  const schema = {
    firstName: Joi.string().max(10),
    lastName: Joi.string().min(2).max(10),
  };

  // const userSchema = Joi.object(schema);

  const [data, setData] = useState(initialForm);
  const [, setErrors] = useState({});
  /*   const { error } = userSchema.validate(data); */

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    const errorMessage = validateProperty(e.target);
    if (errorMessage) {
      setErrors((prev) => ({ ...prev, [name]: errorMessage }));
    } else {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const resetForm = () => {
    console.log("Resetting Form...");
    setData(initialForm);
    console.log("Reset State:", data);
  };

  const validateProperty = (e) => {
    const { name, value } = e;
    console.log(value);
    const obj = { [name]: value };
    const joiObj = Joi.object({ [name]: schema[name] });
    const { error } = joiObj.validate(obj);
    return error ? error.details[0].message : null;
  };

  const validateForm = () => {
    const schemaObj = Joi.object(schema);
    const { error } = schemaObj.validate(data);
    return error ? true : false;
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          margin: "0 auto",
          padding: 5,
          border: "solid 1px",
          alignItems: "center",
          justifyContent: "space-evenly",
          pt: 2,
        }}
        component={"form"}
        onSubmit={(e) => {
          e.preventDefault();

          console.log("form submitted");
        }}
      >
        <Typography>First name</Typography>
        <TextField
          sx={{ m: 2 }}
          name="firstName"
          onChange={handleChange}
          value={data["firstName"]}
        />
        <Typography>Last name</Typography>
        <TextField
          sx={{ m: 2 }}
          name="lastName"
          onChange={handleChange}
          value={data["lastName"]}
        />
        <Box>
          <Button onClick={resetForm}>Reset</Button>
          <Button>Cancel</Button>
          <Button
            type="submit"
            onClick={() => {
              console.log(data);
            }}
            disabled={validateForm()}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
}
