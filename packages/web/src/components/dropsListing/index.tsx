import {
  createTheme,
  Paper,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import React, { Fragment, useEffect } from "react";
import ButtonWhite from "src/theme/buttonWhite";
import DropTable from "./table";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ApplyCard from "./applyCard";
import { useDispatch, useSelector } from "react-redux";
import { dropsListSelector } from "@next/common/selectors";
import StyledTabs from "./styles/styledTabs";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

import { fetchDropsStart } from "@next/common/slices/drops.slice";

const Drops = () => {
  const [isUpcoming, setUpcoming] = React.useState("1");
  const [search, setSearch] = React.useState("");
  const dispatch = useDispatch();
  const dropCount = useSelector(dropsListSelector).count;

  const handleTabChange = (event, newValue) => {
    setUpcoming(newValue);
    console.log("tabchange", newValue, isUpcoming);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    dispatch(
      fetchDropsStart({
        type: isUpcoming === "1" ? "upcoming" : "launched",
      })
    );
  }, [isUpcoming]);
  return (
    <Fragment>
      <Stack alignItems="center" spacing={3}>
        <StyledTabs
          value={isUpcoming}
          onChange={handleTabChange}
          centered
          textColor="white"
          sx={{ width: "100%" }}
        >
          <Tab label="Upcoming" value="1" />
          <Tab label="Launched" value="0" />
        </StyledTabs>
        <TextField
          placeholder="Enter Project Name"
          name="search"
          onChange={handleChange}
          value={search}
          sx={{ bgcolor: "grey.900", width: "40%", color: "grey" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="secondary" />
              </InputAdornment>
            ),
          }}
        />
        <Typography color="secondary"> Total Projects: {dropCount}</Typography>
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
          <Typography variant="h5" textAlign="center" color="grey.500">
            January 1st dum
          </Typography>
          <DropTable />
          <ButtonWhite sx={{ textTransform: "capitalize", mx: "auto" }}>
            Explore
          </ButtonWhite>
        </Paper>
        <ApplyCard sx={{ width: "100%" }} />
      </Stack>
    </Fragment>
  );
};

export default Drops;
