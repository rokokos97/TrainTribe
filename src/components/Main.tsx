import React from "react";
import { ButtonGroup, Button } from "@mui/material";

const Main: React.FC = () => {
  return (
    <ButtonGroup
      size="large"
      variant="text"
    >
      <Button>create session</Button>
      <Button>join session</Button>
    </ButtonGroup>
  );
};

export default Main;
