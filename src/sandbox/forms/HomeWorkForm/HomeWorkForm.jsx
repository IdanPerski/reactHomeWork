import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Joi from "joi";
import React from "react";
import Form from "../../../forms/components/Form";
import Input from "../../../forms/components/Input";
import useForm from "../../../forms/hooks/useForm";
import ROUTES from "../../../routes/routesModel";

export default function HomeWorkForm() {
  const INITIAL_FORM = {
    first: "",
    last: "",
  };

  const schema = {
    first: Joi.string().min(2).required(),
    last: Joi.string().min(2).max(7).required(),
  };
  const handleSubmit = (data) => console.log(data);

  const { value, ...rest } = useForm(INITIAL_FORM, schema, handleSubmit);
  return (
    <>
      <Box>
        <Grid container>
          <Form
            title="Home Work Form"
            onSubmit={rest.onSubmit}
            onReset={rest.handleReset}
            styles={{ maxWidth: "450px" }}
            onChange={rest.validateForm}
            to={ROUTES.SANDBOX}
          >
            <Input
              label="first name"
              name="first"
              data={value.data}
              error={value.errors.first}
              onChange={rest.handleChange}
            />
            <Input
              label="last name"
              name="last"
              data={value.data}
              error={value.errors.last}
              onChange={rest.handleChange}
            />
          </Form>
        </Grid>
      </Box>
    </>
  );
}
