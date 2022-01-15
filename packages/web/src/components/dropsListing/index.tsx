import { Paper, Stack, Tab, Tabs, TextField, Typography } from "@mui/material";
import React, { Fragment } from "react";
import ButtonWhite from "src/theme/buttonWhite";
import DropTable from "./table";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ApplyCard from "./applyCard";
import { useSelector } from "react-redux";
import { dropsListSelector } from "@next/common/selectors";

const Drops = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Fragment>
      <Stack>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Item One" />
          <Tab label="Item Two" />
        </Tabs>
        <TextField
          placeholder="Enter Project Name"
          sx={{ bgcolor: "grey.900", width: "40%" }}
        />
        <Paper
          sx={{
            borderRadius: 10,
            mt: 5,
            pt: 5,
            display: "flex",
            flexDirection: "column",
            width: "100%",
            background:
              "linear-gradient(180deg, rgb(100 100 100) 0%, rgba(0,0,0,1) 18%)",
          }}
        >
          <Typography
            variant="h3"
            textAlign="center"
            component="span"
            color="grey.500"
          >
            January 1st
          </Typography>
          <DropTable />
          <ButtonWhite sx={{ textTransform: "capitalize", mx: "auto" }}>
            Explore
          </ButtonWhite>
        </Paper>
        <ApplyCard />
      </Stack>
    </Fragment>
  );
};

export default Drops;
