import { useCallback, useEffect, useMemo, useState } from "react";
// import { useSnack } from "../../providers/SnackBarProvider";

import useAxios from "../../hooks/useAxios";
import {
  changeLikeStatus,
  createCard,
  deleteCard,
  editCard,
  getCard,
  getCards,
  getMyCards,
} from "../services/cardApiService";
import { useSearchParams } from "react-router-dom";
import { getUser } from "../../user/services/localStorageService";
import { useSnack } from "../../providers/SnackBarProvider";
export default function useCards() {
  const [cards, setCards] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const snack = useSnack();
  const [card, setCard] = useState(null);
  const [query, setQuery] = useState("");
  const [searchParams] = useSearchParams();
  const [filterCards, setFilter] = useState();

  useEffect(() => setQuery(searchParams.get("q") ?? ""), [searchParams]);
  useEffect(() => {
    if (cards) {
      setFilter(
        cards.filter(
          (card) =>
            card.title.includes(query) ||
            String(card.bizNumber).includes(query),
        ),
      );
    }
  }, [cards, query]);
  useAxios();

  const requestStatus = (loading, errorMessage, cards, card = null) => {
    setLoading(loading);
    setError(errorMessage);
    setCards(cards);
    setCard(card);
  };

  const handleGetCards = async () => {
    setLoading(true);
    try {
      const data = await getCards();
      requestStatus(false, null, data);
      snack("success", "cards uploaded succsesfuly!");
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  const handleGetMyCards = async () => {
    setLoading(true);
    try {
      const data = await getMyCards();
      requestStatus(false, null, data);
      snack("success", "Your cards uploaded succsesfuly!");
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  const handleDeleteCard = async (cardId) => {
    try {
      setLoading(true);
      await deleteCard(cardId);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const handleGetCard = useCallback(async (cardId) => {
    setLoading(true);
    try {
      const data = await getCard(cardId);

      requestStatus(false, error, null, data);
      snack("success", "card uploaded succsesfuly!");
      return data;
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  //handleUpdateCard
  const handleUpdateCard = useCallback(async (cardId, cardFromClient) => {
    try {
      setLoading(true);
      const card = await editCard(cardId, cardFromClient);
      requestStatus(false, null, null, card);
      snack("success", "The business card has been successfully updated");
    } catch (error) {
      requestStatus(false, error, null);
      snack("failed", "business didn't updated");
    }
  }, []);

  //handleCreateCard
  const handleCreateCard = useCallback(async (cardFromClient) => {
    try {
      setLoading(true);
      const card = await createCard(cardFromClient);

      requestStatus(false, null, null, card);
      snack("success", "A new business card has been created");
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  //handleGetFavCards
  const handleGetFavCards = useCallback(async () => {
    try {
      setLoading(true);
      const cards = await getCards();
      const user = await getUser();
      const favCards = cards.filter((card) => card.likes.includes(user.id));
      requestStatus(false, null, favCards);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  //handleLikeCard
  const handleLikeCard = useCallback(async (cardId) => {
    try {
      const card = await changeLikeStatus(cardId);
      const { updatedCard, LikesBeforeUpdate, LikesAfterUpdate } = card;
      await handleGetFavCards();
      requestStatus(false, null, cards, updatedCard);
      if (LikesBeforeUpdate < LikesAfterUpdate) {
        snack("success", "The business card has been Liked");
      } else {
        snack("success", "like Card removed");
      }
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const value = useMemo(() => {
    return { isLoading, cards, card, error, filterCards };
  }, [isLoading, cards, card, error, filterCards]);

  return {
    value,
    handleGetCards,
    handleGetMyCards,
    handleDeleteCard,
    handleGetCard,
    handleUpdateCard,
    handleCreateCard,
    handleGetFavCards,
    handleLikeCard,
  };
}
