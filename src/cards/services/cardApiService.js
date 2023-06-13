import axios from "axios";

const apiUrl = "http://localhost:8181";

export const getFromDatabase = async (getData, errorCatch) => {
  try {
    const { data } = await getData(); // call getData as a function
    return data;
  } catch (error) {
    console.log(errorCatch);
    return Promise.reject(error.message);
  }
};

export const getCards = () =>
  getFromDatabase(
    () => axios.get(`${apiUrl}/cards`), // wrap axios.get in a function
    "getCards error",
  );
export const getMyCards = () =>
  getFromDatabase(
    () => axios.get(`${apiUrl}/cards/my-cards`),
    "getMyCards error",
  );
export const deleteCard = (cardId) =>
  getFromDatabase(
    () => axios.delete(`${apiUrl}/cards/${cardId}`),
    "deleteCard error",
  );

export const createCard = (card) =>
  getFromDatabase(
    () => axios.post(`${apiUrl}/cards/`, card),
    "createCard error",
  );

export const editCard = (cardId, normalaizedCard) =>
  getFromDatabase(
    () => axios.put(`${apiUrl}/cards/${cardId}`, normalaizedCard),
    "editCard error",
  );

export const getCard = (cardId) =>
  getFromDatabase(
    () => axios.get(`${apiUrl}/cards/${cardId}`),
    "getCard error",
  );

//_________for the searchBar___________________
export const getSearchedCard = (cardIds) =>
  getFromDatabase(
    () => Promise.all(cardIds.map((id) => axios.get(`${apiUrl}/cards/${id}`))),
    "getCards error",
  );

export const changeLikeStatus = async (cardId) => {
  try {
    const { data } = await axios.patch(`${apiUrl}/cards/${cardId}`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
