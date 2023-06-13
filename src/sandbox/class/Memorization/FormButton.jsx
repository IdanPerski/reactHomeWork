import React, { memo } from "react";
import Button from "@mui/material/Button";

function FormButton({
  varient,
  component,
  size,
  color,
  onClick,
  disabled,
  node,
  children,
}) {
  return (
    <>
      <Button
        onClick={onClick}
        variant="contained"
        component="button"
        size="medium"
        color="primary"
        disabled={false}
        sx={{ mt: 1 }}
      >
        {children}
      </Button>
    </>
  );
}

FormButton.defaultProps = {
  variant: "contained",
  component: "button",
  size: "medium",
  color: "primary",
  disabled: false,
};

export default memo(FormButton);
