import { Card } from "@mui/material";
import { styled } from "@mui/system";

export const StyledCard = styled(Card)`
  background-color: black;
  border: 5px solid white;
  border-radius: 12px;

  & .MuiTypography-root {
    text-align: left;
    overflow: hidden;
  }
  & .MuiCardContent-root {
    height: 12vh;
    overflow: hidden;
  }
`;
