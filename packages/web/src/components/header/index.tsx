import React, { Fragment } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ButtonWhite from "src/theme/buttonWhite";
import { Grid, Link as Linkm } from "@mui/material";

import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "./logo";
import TextLogo from "src/theme/textLogo";
import LogoIcon from "src/theme/logo";
import MenuDrawer from "./drawer";

import MyMenu from "./myMenu";
const Header = ({ pages = [], collapseMenuAfter = 5 }) => {
  // const pages = ["Marketplace", "News", "Drops", "Feed"];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  const linkRouter = useRouter();

  const isActive = (url) => {
    // console.log("linkrouter", linkRouter.asPath);
    //used pathname before news category page.
    return linkRouter.asPath.includes(url);
  };
  const [toggleDrawer, setDrawer] = React.useState(false);

  //Menu's state and functions
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    return;
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDrawer = () => {
    setDrawer((state) => !state);
  };
  //Menu's state and functions end

  const mainPages = [...pages];

  const mobilePages = [...pages];

  const restPages = mainPages.splice(collapseMenuAfter);

  console.log("headerpages", mainPages, restPages, pages);

  React.useEffect(() => {
    console.log("drawer state header", toggleDrawer);
  }, [toggleDrawer]);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={3}
        sx={{
          // background:
          //   "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.61220238095238093) 20%)",
          pt: 1,
        }}
      >
        <Container maxWidth={false}>
          <Toolbar disableGutters>
            {/* <Logo sx={{ fontSize: 10 }} /> */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "flex" },
                alignItems: "center",
                color: "text.primary",
              }}
            >
              <a onClick={() => setDrawer(true)}>
                <IconButton
                  size="medium"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  // onClick={handleOpenNavMenu}
                  onClick={() => setDrawer(true)}
                  color="default"
                >
                  <MenuIcon fontSize="large" />
                </IconButton>
                Menu
              </a>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {mobilePages?.map((page) => (
                  <Link href={page.url} key={page.title}>
                    <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page.title}</Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>

            <Box
              sx={{ mr: 0, flexGrow: 1, display: { xs: "flex", md: "flex" } }}
            >
              {/* <Logo /> */}
              <Link href="/" passHref>
                <a>
                  <img src="/svg/logo_text.svg" alt="" width={170} />
                </a>
              </Link>
            </Box>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", md: "none" } }}
            >
              <Link href="/" passHref>
                <IconButton sx={{ ml: "-10px" }}>
                  <LogoIcon fontSize="large" />
                </IconButton>
              </Link>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "none" } }}>
              {mainPages?.map((page, index) => (
                <Link href={`${page.url}`} key={page.title} passHref>
                  <Button
                    key={page.title}
                    size="small"
                    onClick={handleCloseNavMenu}
                    sx={{
                      mx: 1,
                      my: 2,
                      fontSize: "1.125rem",
                      color: "text.secondary",
                      textTransform: "capitalize",
                      position: "relative",
                      "&:hover": {
                        color: "white",
                      },
                      "&.active": {
                        color: "white",
                      },
                      "&.active > .navIcon": {
                        opacity: "1",
                      },
                      "&:hover > .navIcon": {
                        opacity: "1",
                      },
                    }}
                    className={isActive(page.url) ? "active" : ""}
                    // startIcon={
                    //   <TextLogo
                    //     // fontSize="small"
                    //     sx={{ verticalAlign: "sub", visibility: "hidden" }}
                    //   />
                    // }
                  >
                    <TextLogo
                      fontSize="small"
                      sx={{
                        verticalAlign: "sub",
                        position: "absolute",
                        // display: "none",
                        opacity: "0",
                        outline: " 1px solid transparent",
                        left: "5px",
                        mb: "2px",
                        transition: "all .25s ease",
                      }}
                      className="navIcon"
                    />
                    &nbsp; &nbsp; &nbsp;
                    {`${page.title}`}
                  </Button>
                </Link>
              ))}

              {/* Menu for more navs button */}
              {Boolean(restPages.length) && (
                <MyMenu
                  title="more"
                  buttonSx={{
                    mx: 1,
                    my: 2,
                    fontSize: "1.125rem",
                    color: "text.secondary",
                    textTransform: "capitalize",

                    "&:hover": {
                      color: "white",
                    },
                  }}
                  buttonProps={{ size: "small" }} // This prop may be not working
                  menuList={restPages}
                  activeFunc={isActive}
                />
              )}
            </Box>

            {/* right Side menu, make md on display to block, to enable it */}
            <Box
              sx={{ flexGrow: 0, display: { xs: "none", md: "block" } }}
              color="white"
            >
              {/* <Tooltip title="Search">
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ p: 2 }}
                  color="inherit"
                >
                  <SearchIcon />
                </IconButton>
              </Tooltip> */}
              {!isActive("/news") && (
                <>
                  {/* <Tooltip title="Open settings">
                    <IconButton
                      onClick={handleOpenUserMenu}
                      sx={{ px: 2 }}
                      color="inherit"
                    >
                      <AccountCircleOutlinedIcon />
                    </IconButton>
                  </Tooltip> */}
                  {/* <Tooltip title="More">
                    <IconButton
                      onClick={handleOpenUserMenu}
                      sx={{ p: 2 }}
                      color="inherit"
                    >
                      <MoreHorizIcon />
                    </IconButton>
                  </Tooltip> */}
                </>
              )}

              {/* Button back and select wallet */}

              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting, index) => (
                  <MenuItem key={setting} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
          <MenuDrawer toggle={toggleDrawer} handleDrawer={handleDrawer} />
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
