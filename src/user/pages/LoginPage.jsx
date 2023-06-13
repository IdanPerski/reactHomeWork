import { Box, Grid } from "@mui/material";
import React from "react";
import { Navigate } from "react-router-dom";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import useForm from "../../forms/hooks/useForm";
import ROUTES from "../../routes/routesModel";
import initialLoginForm from "../helpers/initialForms/initialLoginForm";
import useUsers from "../hooks/useUsers";
import loginSchema from "../models/joi-schema/loginSchema";
import { useUser } from "../providers/UseProvider";

export default function LoginPage() {
  const { user } = useUser();
  const { handleLogin } = useUsers();

  const { value, ...rest } = useForm(
    initialLoginForm,
    loginSchema,
    handleLogin,
  );

  if (user) return <Navigate replace to={ROUTES.CARDS} />;
  return (
    <>
      <Box
        sx={{
          margin: "0 auto",
          width: "75%",
        }}
      >
        <Grid container sx={{ display: "flex", justifyContent: "center" }}>
          <Form
            title="Login"
            onSubmit={rest.onSubmit}
            onReset={rest.handleReset}
            styles={{ maxWidth: "450px" }}
            onChange={rest.validateForm}
            to={ROUTES.CARDS}
          >
            <Input
              label="email"
              name="email"
              type="email"
              data={value.data}
              error={value.errors.email}
              onChange={rest.handleChange}
            />
            <Input
              label="password"
              name="password"
              type="password"
              data={value.data}
              error={value.errors.password}
              onChange={rest.handleChange}
            />
          </Form>
        </Grid>
      </Box>
    </>
  );
}

/* CLASS */

/* 
import { Container } from "@mui/material";
import React from "react";
import PageHeader from "../../components/PageHeader";
import useForm from "../../forms/hooks/useForm";
import initialLoginForm from "../helpers/initialForms/initialLoginForm";
import loginSchema from "../models/joi-schema/loginSchema";
import ROUTES from "../../routes/routesModel";

import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";

export default function LoginPage() {
  const handleLogin = () => {
    console.log("loggin succesfull");
  };

  //איך אנחנו בונים טופס עם הכלים שבנינו בשיעור קודם
  //החלק הלוגי:
  //נשתמש בהוק יוזפורם

  //החלק הויזואלי
  //נשתמש בקומפוננטת טופס שיצרנו
  //ונכניס לתוכה קומפוננטות אינפוט שיצרנו

  const { value, ...rest } = useForm(
    initialLoginForm,
    loginSchema,
    handleLogin
  );

  return (
    <Container>
      <PageHeader
        title="Welcome to Login page"
        subtitle="here you can Log in"
      />
      <Container
        sx={{
          paddingTop: 8,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Form
          title="login"
          styles={{ maxWidth: "450px" }}
          to={ROUTES.CARDS}
          onSubmit={rest.onSubmit}
          onReset={rest.onReset}
          onChange={rest.validateForm}
        >
          <Input
            label="email"
            name="email"
            type="email"
            error={value.errors.email}
            onChange={rest.handleChange}
            data={value.data}
          />
          <Input
            label="password"
            name="password"
            type="password"
            error={value.errors.password}
            onChange={rest.handleChange}
            data={value.data}
          />
        </Form>
      </Container>
    </Container>
  );
}


*/
