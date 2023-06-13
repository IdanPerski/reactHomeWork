import { Container, Grid, List, ListItem, Typography } from "@mui/material";
import React from "react";
import PageHeader from "../components/PageHeader";
import { useTheme } from "../providers/ThemeProvider";

export default function AboutPage() {
  const { isDark } = useTheme();

  return (
    <Container sx={{ color: isDark ? "white" : "black" }}>
      <PageHeader
        title="About Page"
        subtitle="On this page you can find explanations about using the application"
      />
      <Grid container spacing={5}>
        <Grid item xs={12} md={7} alignSelf="center">
          <Typography variant="h4" gutterBottom>
            About Our Business Cards App
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to our Business Cards App! We are dedicated to helping
            professionals and businesses create impressive and impactful
            business cards to make a lasting impression on potential clients and
            partners.
          </Typography>
          <Typography variant="body1" paragraph>
            Our app provides an intuitive and user-friendly interface for
            designing customized business cards. With a wide range of design
            templates, fonts, colors, and graphics, you have the freedom to
            create a unique and professional representation of your brand.
          </Typography>
          <Typography variant="body1" paragraph>
            Key Features of Our Business Cards App:
          </Typography>
          <List>
            <ListItem>
              <Typography variant="body1" component="span">
                Professional templates: Choose from a wide selection of
                professionally designed templates, tailored to various
                industries and styles. You can customize the templates to match
                your brand's identity.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1" component="span">
                Customizable elements: Personalize your business card with your
                logo, contact information, social media handles, and any other
                details that are essential for your business.
              </Typography>
            </ListItem>
          </List>

          <Typography variant="body1" paragraph>
            Thank you for choosing our app to create your business cards. We are
            excited to be a part of your journey towards success. If you have
            any questions or need assistance, please don't hesitate to contact
            our support team. Happy designing!
          </Typography>
        </Grid>
        <Grid
          item
          md={5}
          sx={{
            display: { md: "block", xs: "none" },
            justifyContent: "center",
          }}
        >
          <img src="/assets/images/card.jpg" alt="card" width="100%" />
        </Grid>
      </Grid>
    </Container>
  );
}
