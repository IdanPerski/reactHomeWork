import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import { Navigate, useParams } from "react-router-dom";
import useCards from "../hooks/useCards";
import { useUser } from "../../user/providers/UseProvider";
import useForm from "../../forms/hooks/useForm";
import initialCardForm from "../helpers/initialForms/initialCardForm";
import cardSchema from "../models/joi-scheme/cardSchema";
import mapCardToModel from "../helpers/normalization/mapToModel";
import ROUTES from "../../routes/routesModel";
import CardForm from "../components/card/CardForm";
import normalizeCard from "../helpers/normalization/normalizeCard";

export default function EditCardPage() {
  //id of the card - useParams
  const { id } = useParams();

  const {
    handleUpdateCard,
    handleGetCard,
    value: { card },
  } = useCards();
  //user - useUser (provider)
  const { user } = useUser();
  //useForm (initialForm,schema,onSubmit)
  const { value, ...rest } = useForm(initialCardForm, cardSchema, () => {
    handleUpdateCard(card._id, {
      ...normalizeCard({ ...value.data }),
      bizNumber: card.bizNumber,
      user_id: card.user_id,
    });
  });
  //useEffect - update the form data to this card data
  useEffect(() => {
    handleGetCard(id).then((data) => {
      const modelCard = mapCardToModel(data);
      rest.setData(modelCard);
    });
  });
  if (!user) return <Navigate replace to={ROUTES.CARDS} />;
  return (
    <div>
      <Container maxWidth="lg">
        <CardForm
          title="Edit card"
          onSubmit={rest.onSubmit}
          onReset={rest.handleReset}
          errors={value.errors}
          onFormChange={rest.validateForm}
          onInputChange={rest.handleChange}
          data={value.data}
        />
      </Container>
    </div>
  );
}
