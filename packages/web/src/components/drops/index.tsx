import { Paper, Typography } from "@mui/material";
import React, { Fragment } from "react";
import ButtonWhite from "src/theme/buttonWhite";
import DropTable from "./table";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Drops = () => {
  return (
    <Fragment>
      <Paper
        sx={{
          borderRadius: 10,
          mt: 5,
          pt: 5,
          display: "flex",
          flexDirection: "column",
          background:
            "linear-gradient(180deg, rgb(100 100 100) 0%, rgba(0,0,0,1) 18%)",
        }}
      >
        <Typography variant="h3" textAlign="center" component="span">
          Drops{"   "}
          <Typography variant="h3" component="span" color="grey.500">
            Upcoming
            <KeyboardArrowDownIcon sx={{ fontSize: 50 }} />
          </Typography>
        </Typography>
        <DropTable />
        <ButtonWhite sx={{ textTransform: "capitalize", mx: "auto" }}>
          Explore
        </ButtonWhite>
      </Paper>
    </Fragment>
  );
};

export default Drops;
