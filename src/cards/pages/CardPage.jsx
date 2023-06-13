import { Container } from "@mui/material";
import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import useCards from "../hooks/useCards";
import CardsFeedback from "../components/CardsFeedback";

export default function CardPage() {
  const {
    value: { error, isLoading, filterCards },
    handleGetCards,
    handleDeleteCard,
  } = useCards();

  useEffect(() => {
    handleGetCards();
  }, []);

  const handleDelete = async (id) => {
    console.log(id);
    await handleDeleteCard(id);
    handleGetCards();
  };

  return (
    <div>
      <Container>
        <PageHeader
          title="Cards"
          subtitle="On this page you can find all bussines cards from all categories"
        />
        <CardsFeedback
          isLoading={isLoading}
          error={error}
          cards={filterCards}
          handleDelete={handleDelete}
        />
      </Container>
    </div>
  );
}
