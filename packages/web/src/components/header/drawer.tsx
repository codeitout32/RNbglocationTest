import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { ButtonGroup, ListItemButton, ListSubheader } from "@mui/material";
import { fetchCategoriesStart } from "@next/common/slices/assets.slice";
import { useDispatch, useSelector } from "react-redux";
import { categoriesSelector, newsListSelector } from "@next/common/selectors";
import Link from "next/link";
import DrawerContent from "./DrawerContent";

export default function MenuDrawer({ toggle, handleDrawer }) {
  const [state, setState] = React.useState({
    left: false,
  });

  const dumCategories = [
    "All News",
    "India",
    "Business",
    "Sports",
    "World",
    "Politics",
    "Entertainment",
  ];

  const lang = "en";
  const dispatch = useDispatch();
  const categoriesList = useSelector(categoriesSelector)?.rows ?? dumCategories;
  const pagination = useSelector(newsListSelector)?.pagination;
  const catid = pagination.category_id;

  React.useEffect(() => {
    console.log("drawer state", state);
  }, [state]);

  React.useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);

  const toggleDrawer = (anchor, open) => {
    console.log("hello from toggler");
    setState({ [anchor]: open });
  };

  React.useEffect(() => {
    //this effect can be removed check in future devlopment.
    if (toggle) {
      if (!state.left) {
        console.log("hello from toggle");
        toggleDrawer("left", true);
      }
    }
  }, [toggle]);

  const handleClose = () => {
    console.log("hello drawer closed");
    toggleDrawer("left", false);
    handleDrawer();
  };

  return (
    <>
      <SwipeableDrawer
        anchor="left"
        open={state["left"]}
        onClose={handleClose}
        onOpen={() => toggleDrawer("left", true)}
        PaperProps={{ sx: { bgcolor: "#303036" } }}
      >
        {
          <DrawerContent
            anchor="left"
            handleClose={handleClose}
            catid={catid}
            lang={lang}
            categoriesList={categoriesList}
          />
        }
      </SwipeableDrawer>
    </>
  );
}
