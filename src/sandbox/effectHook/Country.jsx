import { Avatar, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Country({ flag, country, capital }) {
  return (
    <div>
      <Box sx={{ width: "100%", m: " 2rem auto" }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Avatar src={flag}></Avatar>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6">{country}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6">{capital}</Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
