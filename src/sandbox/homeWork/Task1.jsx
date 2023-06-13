import React, { useState } from "react";

import { FormControlLabel, Switch } from "@mui/material";

export default function Task1() {
  const [label, setlabel] = useState("off");
  const [checked, setchecked] = useState(false);

  const handleSwitchClick = () => {
    if (!checked) {
      setchecked(true);
      setlabel("On");
    } else {
      setchecked(false);
      setlabel("Off");
    }
  };

  return (
    <div>
      <FormControlLabel
        control={
          <Switch
            checked={checked}
            onClick={handleSwitchClick}
            color="secondary"
          />
        }
        label={label}
      />
    </div>
  );
}
