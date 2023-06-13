import React from "react";
import useForm from "../../forms/hooks/useForm";
import CardForm from "../components/card/CardForm";
import initialCardForm from "../helpers/initialForms/initialCardForm";
import cardSchema from "../models/joi-scheme/cardSchema";
import useCards from "../hooks/useCards";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import normalizeCard from "../helpers/normalization/normalizeCard";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../../user/providers/UseProvider";

export default function CreateCardPage() {
  const { handleCreateCard } = useCards();
  const navigate = useNavigate();
  const { user } = useUser();

  const { value, ...rest } = useForm(initialCardForm, cardSchema, () => {
    const newCard = {
      ...normalizeCard(value.data),
      bizNumber: Number(value.data.phone), //what is BizNumber?
      user_id: user.id,
    };
    handleCreateCard(newCard);
    setTimeout(() => navigate(ROUTES.MY_CARDS), 3000);
  });

  return (
    <>
      <Container>
        <CardForm
          title={"Create Card"}
          onSubmit={rest.onSubmit}
          onReset={rest.handleReset}
          errors={value.errors}
          onFormChange={rest.validateForm}
          onInputChange={rest.handleChange}
          data={value.data}
        />
      </Container>
    </>
  );
}
