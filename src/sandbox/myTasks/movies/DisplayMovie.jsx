import { Box, Card, CardHeader, CardMedia } from "@mui/material";

export default function DisplayMovie({ movie }) {
  return (
    <>
      (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Card sx={{ maxWidth: 400 }}>
          <CardHeader title={movie.Title} />
          <Box sx={{ position: "relative", paddingTop: "100%" }}>
            <CardMedia
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              image={movie.Poster}
              title={movie.Title}
            />
          </Box>
        </Card>
      </Box>
      {/* ) : (
        <Box>
          <h1>please choose movie</h1>
        </Box>
      )} */}
    </>
  );
}
