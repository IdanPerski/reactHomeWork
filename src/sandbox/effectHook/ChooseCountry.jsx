import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import Country from "./Country";
import { Box } from "@mui/system";
// import Country2 from "./Country2";

export default function ChooseCountry() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchSelected = fetch(
      `https://restcountries.com/v3.1/name/${selectedCountry}`,
    );

    fetchSelected
      .then((response) => {
        console.log(response.status);
        return response.json();
      })
      .then((country) => {
        setData(country);
      });
    return () => {
      console.log("The components is unmount");
    };
  }, [selectedCountry]);

  const handleSelectChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleMenuItemClick = (event) => {
    setSelectedCountry("");
    setSelectedCountry(event.target.innerText);
  };

  return (
    <div>
      <Container
        maxWidth="lg"
        sx={{ display: "flex", p: 5, flexDirection: "column", width: "100%" }}
      >
        <FormControl sx={{ width: "25%", margin: "0 auto" }}>
          <InputLabel id="demo-simple-select-label">Select country</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="selectComp"
            value={selectedCountry}
            label="Select country"
            onChange={handleSelectChange}
          >
            <MenuItem value="japan" onClick={handleMenuItemClick}>
              Japan
            </MenuItem>
            <MenuItem value="Israel" onClick={handleMenuItemClick}>
              Israel
            </MenuItem>
            <MenuItem value="Canada" onClick={handleMenuItemClick}>
              Canada
            </MenuItem>
          </Select>
        </FormControl>
        {console.log(data)}
        <Box sx={{ margin: "0 auto" }}>
          <Country
            flag={data[0]?.flags.png}
            country={data[0]?.name.common}
            capital={data[0]?.capital?.[0]}
          />

          {/* <Country2 country={data[0]?data[0]} /> */}
        </Box>
      </Container>
    </div>
  );
}
