import { IconButton, Menu, MenuItem, Paper, Typography } from "@mui/material";
import React, { Fragment } from "react";
import ButtonWhite from "src/theme/buttonWhite";
import DropTable from "./table";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useDispatch } from "react-redux";
import { fetchNewsStart } from "@next/common/slices/news.slice";
import Link from "next/link";
import { fetchDropsStart } from "@next/common/slices/drops.slice";

const HomeDropsList = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [dropType, setDtype] = React.useState(1);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (type: number | undefined) => {
    setAnchorEl(null);
    if (type) setDtype(type);
  };
  React.useEffect(() => {
    dispatch(
      fetchDropsStart({
        type: dropType == 1 ? "upcoming" : "launched",
        sort_type: "ASC",
      })
    );
  }, [dropType]);
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
            {dropType == 1 ? "Upcoming" : "Launched"}
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <KeyboardArrowDownIcon sx={{ fontSize: 50 }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem divider onClick={() => handleClose(1)}>
                Upcoming
              </MenuItem>
              <MenuItem onClick={() => handleClose(2)}>Launched</MenuItem>
            </Menu>
          </Typography>
        </Typography>
        <DropTable />
        <Link href="/drops">
          <ButtonWhite sx={{ textTransform: "capitalize", mx: "auto", mt: 1 }}>
            Explore
          </ButtonWhite>
        </Link>
      </Paper>
    </Fragment>
  );
};

export default HomeDropsList;
