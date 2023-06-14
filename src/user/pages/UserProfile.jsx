import { Box, Card, Grid, Tab, Tabs } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import useForm from "../../forms/hooks/useForm";
import PersonalDetails from "../components/PersonalDetails";
import UserAddress from "../components/UserAddress";
import UserContactDetails from "../components/UserContactDetails";
import userPersonalDetails from "../helpers/normalization/userPersonalDetailsModal";
import { getUsersFromServer } from "../services/usersApiService";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../providers/UseProvider";
import initialEditForm from "../helpers/initialForms/initialEditForm";
import useUsers from "../hooks/useUsers";
import DisplayUserDetails from "../components/DisplayUserDetails";
import { useMediaQuery } from "@mui/material";
import signupSchema from "../models/joi-schema/signupSchema";

export default function UserProfile() {
  const { user } = useUser();
  const { handleUpdateUser } = useUsers();
  const [tabValue, setTabValue] = useState(0);
  const isMobileView = useMediaQuery("(max-width: 665px)");
  const handleTabChange = (e) => {
    setTabValue(e.target.tabIndex);
  };

  const { value, ...rest } = useForm(
    initialEditForm,
    signupSchema,
    handleUpdateUser,
  );

  const getUserData = async () => {
    try {
      const userPersonalData = await getUsersFromServer();
      rest.setData(userPersonalDetails(userPersonalData));
      return userPersonalData;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const user = getUserData();
    rest.setData(user);
  }, [user]);

  const { data } = value;

  if (!user) return <Navigate replace to={ROUTES.CARDS} />;
  return (
    <>
      <PageHeader title="Profile page" subtitle="profile" />
      <Box display="flex" sx={{ width: "90%", margin: "0 auto", p: 2 }}>
        <Grid container alignItems="stretch" spacing={2}>
          <Grid
            item
            sm={4}
            md={4}
            sx={{
              height: isMobileView ? "25vh" : "100%",
              width: isMobileView ? "100%" : null,
              display: isMobileView ? "none" : null,
            }}
          >
            <DisplayUserDetails displayData={data} />
          </Grid>

          <Grid item xs={12} sm={isMobileView ? 12 : 8} md={8}>
            <Card sx={{ height: "100%" }}>
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                textColor="secondary"
                indicatorColor="secondary"
              >
                <Tab tabIndex={0} label="Personal Details"></Tab>
                <Tab tabIndex={1} label="Address" />
                <Tab tabIndex={2} label="Contact" />
              </Tabs>

              {tabValue === 0 ? (
                <Box sx={{ p: 4 }}>
                  <Grid
                    container
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      height: "100%",
                    }}
                  >
                    {
                      <PersonalDetails
                        onSubmit={rest.onSubmit}
                        onReset={rest.handleReset}
                        onFormChange={rest.validateForm}
                        title={"Edit profile"}
                        errors={value.errors}
                        onInputChange={rest.handleChange}
                        setData={rest.setData}
                        data={value.data}
                      />
                    }
                  </Grid>
                </Box>
              ) : null}
              {tabValue === 1 ? (
                <Box sx={{ p: 4 }}>
                  <Grid
                    container
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      height: "100%",
                    }}
                  >
                    {
                      <UserAddress
                        onSubmit={rest.onSubmit}
                        onReset={rest.handleReset}
                        onFormChange={rest.validateForm}
                        title={"Edit profile"}
                        errors={value.errors}
                        onInputChange={rest.handleChange}
                        setData={rest.setData}
                        data={value.data}
                      />
                    }
                  </Grid>
                </Box>
              ) : null}
              {tabValue === 2 ? (
                <Box sx={{ p: 4 }}>
                  {
                    <UserContactDetails
                      onSubmit={rest.onSubmit}
                      onReset={rest.handleReset}
                      onFormChange={rest.validateForm}
                      title={"Edit profile"}
                      errors={value.errors}
                      onInputChange={rest.handleChange}
                      setData={rest.setData}
                      data={value.data}
                    />
                  }
                </Box>
              ) : null}
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
