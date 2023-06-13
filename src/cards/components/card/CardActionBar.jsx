import { Box, CardActions, IconButton } from "@mui/material";
import React, { useState } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { array, func, string } from "prop-types";
import CardDeleteDialog from "./CardDeleteDialog";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";
import useCards from "../../hooks/useCards";
import { useUser } from "../../../user/providers/UseProvider";

export default function CardActionBar({
  handleDelete,
  // handleEdit,
  // handleLike,
  id,
  user_id,
  likes,
  onLike,
}) {
  const { handleLikeCard } = useCards();
  const { user } = useUser();

  const [isDialogOpen, setDialog] = useState(false);
  const handleDeleteCard = () => {
    handleDelete(id);
    setDialog(false);
  };

  const [isLiked, setLiked] = useState(() => {
    if (user) {
      return likes?.includes(user.id) ? true : false;
    } else {
      return false;
    }
  });

  const handleLike = async () => {
    setLiked((prev) => !prev);
    await handleLikeCard(id);
    onLike();
  };

  // useEffect(() => {
  //   handleGetCards();
  // }, [isLiked]);

  const navigate = useNavigate();
  const handleEditCard = () => navigate(`${ROUTES.EDIT_CARD}/${id}`);

  return (
    <>
      <CardActions sx={{ paddingTop: 0, justifyContent: "space-between" }}>
        <Box>
          {user?.isAdmin || user?.id === user_id ? (
            <>
              <IconButton
                aria-label="Delete Card"
                onClick={() => setDialog(true)}
              >
                <DeleteIcon />
              </IconButton>
              <IconButton aria-label="Edit Card" onClick={handleEditCard}>
                <ModeEditIcon />
              </IconButton>
            </>
          ) : null}
        </Box>
        <Box>
          <IconButton aria-label="Call">
            <CallIcon />
          </IconButton>
          {user && (
            <IconButton aria-label="Add to favorite" onClick={handleLike}>
              <FavoriteIcon
                sx={{
                  color: isLiked ? "red" : "inherit",
                }}
              />
            </IconButton>
          )}
        </Box>
      </CardActions>

      <CardDeleteDialog
        isDialogOpen={isDialogOpen}
        onChangeDialog={() => setDialog(false)}
        onDelete={handleDeleteCard}
      />
    </>
  );
}

CardActionBar.propTypes = {
  handleDelete: func.isRequired,
  handleEdit: func.isRequired,
  onLike: func.isRequired,
  id: string.isRequired,
  likes: array.isRequired,
};
