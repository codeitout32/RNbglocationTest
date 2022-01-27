import { styled } from "@mui/system";

export const StyledPaper = styled("div")(
  ({ theme }) => `
  .MuiButton-contained {
    background: ${theme.palette.secondary.main};
    color: ${theme.palette.text.secondary};
    margin: 0 5px;
  }

  & > .MuiGrid-container {
    position: relative;
    top: -60px;
  }
  .MuiAvatar-circular {
    box-shadow: 0px 0px 64px -30px #ffffff;
  }
  .MuiGrid-item {
    display: flex;
    flex-direction: column;
    .MuiSvgIcon-root {
      margin: auto;
      color: grey;
    }
  }
`
);
