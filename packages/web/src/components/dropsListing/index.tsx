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
import {
  dropsListSelector,
  dropsPaginationSelector,
} from "@next/common/selectors";
import StyledTabs from "./styles/styledTabs";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

import { fetchDropsStart } from "@next/common/slices/drops.slice";

const Drops = () => {
  const [isUpcoming, setUpcoming] = React.useState("1");
  const [search, setSearch] = React.useState("");
  const [dropsList, setdropsList] = React.useState({});
  const dispatch = useDispatch();
  const dropCount = useSelector(dropsListSelector)?.count;
  const pagination = useSelector(dropsPaginationSelector);

  const handleTabChange = (event, newValue) => {
    // setdropsList({});
    setUpcoming(newValue);
  };

  // let dropsList = {};
  const dropsListraw = useSelector(dropsListSelector);
  console.log("dropslist", dropsList);
  const handleChange = (e) => {
    setSearch(e.target.value);
    dispatch(
      fetchDropsStart({
        group_by: "date",
        type: isUpcoming === "1" ? "upcoming" : "launched",
        title: e.target.value,
        row_per_page: "5",
        page_num: 1,
      })
    );
  };

  // reducer function for adding list to end of droplist
  const getReducer = (obj) => {
    console.log("object passed", obj);
    const obj2 = { ...obj };
    const reducer = (x, y) => {
      console.log("obj2", obj2, "x", x);
      if (x.hasOwnProperty(y)) {
        console.log("reducer", x, y);
        if (y == "count") return x;
        x[y] = [...x[y], ...obj2[y]];
        return x;
      } else {
        /*  {...x, [y]: obj2[y]} */
        x[y] = obj2[y];
        return x;
      }
    };
    return reducer;
  };

  useEffect(() => {
    const temp = Object.keys(dropsListraw).reduce(
      getReducer(dropsListraw),
      dropsList
    );
    setdropsList(temp);
  }, [dropsListraw]);

  console.log("dropslist2", dropsList);

  const handleLoadmore = (e) => {
    dispatch(
      fetchDropsStart({
        ...pagination,
        page_num: pagination.page_num + 1,
      })
    );
  };

  useEffect(() => {
    console.log("fetch started drops");

    dispatch(
      fetchDropsStart({
        row_per_page: "5",
        group_by: "date",
        type: isUpcoming === "1" ? "upcoming" : "launched",
        page_num: 1,
      })
    );
    setSearch("");
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
          sx={{
            bgcolor: "grey.900",
            width: { md: "40%", xs: "90%" },
            color: "grey",
          }}
          InputProps={{
            type: "search",
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "text.secondary" }} />
              </InputAdornment>
            ),
          }}
        />
        <Typography color="text.secondary">
          Total Projects: {dropCount}
        </Typography>
        <Paper
          sx={{
            borderRadius: 10,
            mt: 5,
            pt: 1,
            display: "flex",
            flexDirection: "column",
            width: "100%",
            background:
              "linear-gradient(180deg, rgb(100 100 100) 0%, rgba(0,0,0,1) 8%)",
          }}
        >
          {/* <Typography variant="h5" textAlign="center" color="grey.500">
            January 1st dum
          </Typography> */}
          <DropTable dropsList={dropsList} />
          {/* Pending Button */}
          <ButtonWhite
            sx={{ textTransform: "capitalize", mx: "auto" }}
            onClick={handleLoadmore}
          >
            Load more
          </ButtonWhite>
        </Paper>
        <ApplyCard sx={{ width: "100%" }} />
      </Stack>
    </Fragment>
  );
};

export default Drops;
