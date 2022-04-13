import {
  Box,
  ButtonGroup,
  Button,
  List,
  ListSubheader,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import Link from "next/link";
import React from "react";

const DrawerContent = (props) => {
  const { anchor, handleClose, catid, lang, categoriesList } = props;
  console.log("categoriesList", categoriesList);
  return (
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

        {/* <Link href={`/${lang}/read`} passHref>
          <ListItemButton href="#" component="a" selected={catid == ""}>
             <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon> 
            <ListItemText primary="All News" sx={{ color: "white", pl: 2 }} />
          </ListItemButton>
        </Link> */}
        {categoriesList?.map((item, index) => (
          <Link
            href={`/${lang}/read/${item?.category_name}`}
            passHref
            key={item?.id}
          >
            <ListItemButton component="a" selected={item?.id == catid}>
              {/* <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon> */}
              <ListItemText
                primary={item?.category_name ?? item}
                sx={{ color: "white", pl: 2 }}
              />
            </ListItemButton>
          </Link>
        ))}
      </List>
      <Divider />
    </Box>
  );
};

export default DrawerContent;
