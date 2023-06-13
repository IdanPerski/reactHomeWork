import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Container,
  List,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import useCards from "../hooks/useCards";
import BuisnessMap from "../components/card/BuisnessMap";

export default function CardDetailsPage() {
  const [mapAddress, setAddress] = useState("");
  const { id } = useParams();
  const {
    handleGetCard,
    value: { card },
  } = useCards();

  const fetchData = async () => {
    try {
      await handleGetCard(id);
    } catch (error) {
      console.log(error);
    }
  };

  const getAddress = () => {
    if (card) {
      const { address } = card;
      setAddress(` ${address.city} ${address.street} ${address.houseNumber} `);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id, handleGetCard]);

  const [cardDetails, setCardDetails] = useState(card);

  const capitalizeFirstLetter = (str) => {
    if (typeof str === "string") {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  };

  useEffect(() => {
    const displayCardDetails = (card) => {
      const convertedObj = Object.entries(card);
      const slicedArray = convertedObj.slice(1, 7);
      const backToObj = Object.fromEntries(slicedArray);
      setCardDetails((prev) => ({ ...prev, ...backToObj }));
      getAddress();
      // const { address } = card;
      // setAddress(
      //   `${address.street} ${address.houseNumber} ${address.city} , ${address.country}`,
      // );
    };

    if (card) displayCardDetails(card);
  }, [card]);

  return (
    <Container>
      <PageHeader title="Card details" subtitle="" />
      {/* <Typography>Details about card : {id}</Typography> */}
      <Card
        sx={{
          width: "80%",
          marginX: "auto",
          marginY: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box width={"100%"} display="flex" flexDirection="column">
          <CardHeader
            sx={{ margin: "0 auto" }}
            avatar={
              <Avatar
                sx={{
                  height: "12rem",
                  width: "12rem",
                  display: "flex",
                  alignItems: "center",
                  fontSize: "3.5rem",
                }}
                src={`/${card?.image.url}`}
              ></Avatar>
            }
          />

          <List sx={{ textAlign: "center" }}>
            {cardDetails &&
              Object.keys(cardDetails).map((key) => (
                <ListItemText
                  key={key}
                  primary={capitalizeFirstLetter(key)}
                  secondary={capitalizeFirstLetter(cardDetails[key])}
                />
              ))}
          </List>
        </Box>

        <Box
          sx={{
            height: "45vh",
            width: "40%",
            m: 3,
            marginX: "auto",
            zIndex: "0",
          }}
        >
          {card ? (
            <BuisnessMap address={mapAddress} zoom={14} />
          ) : (
            /* "Tel Aviv Hashalom 2" */

            <Typography>loading...</Typography>
          )}
        </Box>
      </Card>
    </Container>
  );
}
