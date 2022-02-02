import React from "react";
import StorefrontIcon from "@mui/icons-material/Storefront";
import InstallDesktopIcon from "@mui/icons-material/InstallDesktop";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import {
  Card,
  CardHeader,
  Container,
  Grid,
  Typography,
  CardActionArea,
  CardContent,
} from "@mui/material";
// styles
import { StyledCard } from "./styledCard";
import Link from "next/link";

//next

const NavsInfo = () => {
  const dumDesc =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque lectus dictumst luctus quam posuere et urna, egestas quam.";
  const navs = [
    {
      title: "Marketplace",
      icon: <StorefrontIcon />,
      desc: "",
      url: "#",
    },
    {
      title: "Drops",
      icon: <InstallDesktopIcon />,
      desc: "",
      url: "/drops",
    },
    {
      title: "Services",
      icon: <MiscellaneousServicesIcon />,
      desc: "",
      url: "#",
    },
    {
      title: "News",
      icon: <NewspaperIcon />,
      desc: "",
      url: "/news",
    },
  ];
  return (
    <Container maxWidth="lg">
      <Grid container spacing={5}>
        {navs.map((nav) => (
          <Grid item xs={3}>
            <Link href={nav.url}>
              <StyledCard>
                <CardActionArea>
                  <CardHeader
                    avatar={nav.icon}
                    title={nav.title}
                    titleTypographyProps={{
                      variant: "body1",
                      fontSize: "1.24rem",
                    }}
                  />
                  <CardContent>
                    <Typography variant="body1" gutterBottom>
                      {dumDesc}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </StyledCard>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default NavsInfo;
