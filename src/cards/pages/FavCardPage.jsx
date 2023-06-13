import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";

import { Container } from "@mui/material";
import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";

import PageHeader from "../../components/PageHeader";
import Spinner from "../../components/Spinner";

export default function FavCardPage() {
  const {
    value: { cards, error, isLoading, filterCards },
    handleGetFavCards,
    handleDeleteCard,
  } = useCards();

  const [showSpinner, setShowSpinner] = useState(true);

  const handleDelete = async (id) => {
    await handleDeleteCard(id);
    await handleGetFavCards();
  };
  useEffect(() => {
    handleGetFavCards();
    setShowSpinner(false);
  }, []);

  if (showSpinner) {
    return <Spinner />;
  }

  if (cards == null) {
    return <Typography variant="h5">Can't find cards!</Typography>;
  }

  return (
    <div>
      <Container>
        <PageHeader
          title="Favorite Cards"
          subtitle="On this page, you can find all the business's favorite cards from all categories"
        />

        <CardsFeedback
          isLoading={isLoading}
          error={error}
          cards={filterCards || cards}
          handleDelete={handleDelete}
        />
      </Container>
    </div>
  );
}
