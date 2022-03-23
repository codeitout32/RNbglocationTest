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

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 200,
        bgcolor: "#303036",
        px: 1,
        "&& 	.MuiListItemButton-root.Mui-selected": {
          bgcolor: "#808290",
        },
      }}
      role="presentation"
      onClick={handleClose}
      onKeyDown={handleClose}
    >
      <Box
        sx={{
          p: 2,
          marginBottom: 1,
          ".selected": { bgcolor: "#808290", color: "#303036" },
        }}
      >
        <ButtonGroup variant="outlined">
          <Button className={"selected"}>English</Button>
          <Button>Hindi</Button>
        </ButtonGroup>
      </Box>
      <List
        subheader={
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            sx={{ bgcolor: "transparent" }}
          >
            Categories
          </ListSubheader>
        }
      >
        {/* All news button */}

        <Link href={`/${lang}/read`} passHref>
          <ListItemButton href="#" component="a" selected={catid == ""}>
            {/* <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon> */}
            <ListItemText primary="All News" sx={{ color: "white", pl: 2 }} />
          </ListItemButton>
        </Link>
        {categoriesList?.map((item, index) => (
          <Link href={`/${lang}/read/${item?.category_name}`} passHref>
            <ListItemButton
              key={item.id ?? item}
              component="a"
              selected={item.id == catid}
            >
              {/* <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon> */}
              <ListItemText
                primary={item.category_name ?? item}
                sx={{ color: "white", pl: 2 }}
              />
            </ListItemButton>
          </Link>
        ))}
      </List>
      <Divider />
      {/* <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

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
        {list("left")}
      </SwipeableDrawer>
    </>
  );
}
