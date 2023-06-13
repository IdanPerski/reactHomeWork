import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Country from "./Country";
import Show2Countries from "./Show2Countries";

export default function Countries() {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountryData(data);
      });
  }, []);

  const displySelectedCountry1 = () => {
    console.log("displayFunction");
  };
  const displySelectedCountry2 = () => {
    console.log("displayFunction");
  };

  return (
    <div>
      <Show2Countries
        func1={displySelectedCountry1}
        func2={displySelectedCountry2}
      />

      {countryData ? (
        countryData.map((country, i) => {
          return (
            <Country
              flag={country.flags.png}
              country={country.name.common}
              capital={country.capital?.[0]}
              key={i}
            />
          );
        })
      ) : (
        <Typography> "loading..."</Typography>
      )}
    </div>
  );
}
