import React, { Fragment } from "react";
import SliderItem from "./sliderItem";
import Carousel from "react-material-ui-carousel";
import {
  CardMedia,
  Container,
  Grid,
  Paper,
  Typography,
  Card,
  Box,
  Stack
} from "@mui/material";
import ButtonWhite from "src/theme/buttonWhite";
import { url } from "inspector";
import LatestItem from "./latestItem";

const NewsLatest = () => {
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
            "linear-gradient(180deg, #3F3F46 0%, #000000 25%)",
            '& img': {borderRadius: '20px'},
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            textAlign="center"
            component="div"
            sx={{ my: 7 }}
          >
            The Latest
          </Typography>
          <Grid container spacing={3}  sx={{minheight: "500px",}}>
            <Grid item md={6} xs={12} >
            
                <Paper
                  sx={{
                    backgroundImage: `url(https://picsum.photos/600/600)`,
                    
                    borderRadius: '20px',
                    height: '100%'
                  }}
                >
                  <div
                    style={{
                      height: "inherit",
                      background:
                        "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 79.59%)",
                    }}
                  >
                    <Stack sx={{ p: 5, flexDirection: 'column', alignItems: 'flex-start',justifyContent: 'flex-end', height: 'inherit'}}>
                      <Typography variant="h4">
                        NFTs in 2021 by the Numbers
                      </Typography>
                      {/* <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ mt: 1 }}
                      >
                        NFTs are much easier to understand than most people
                        think. This guide aims to demystify NFTs and give you a
                        basic understanding of what they are, what they do, and
                        most importantly, why they matter.
                      </Typography> */}
                      <ButtonWhite
                        sx={{
                          textTransform: "capitalize",
                          mt: 3,
                          fontSize: ".7rem",
                          px: 4,
                          py: 2,
                        }}
                      >
                        read more ->
                      </ButtonWhite>
                    </Stack>
                  </div>
                </Paper>
              
            </Grid>
            <Grid item md={6} xs={12} >
              <Paper
                sx={{
                  
                  overflow: "hidden",
                  bgcolor: "primary.main",
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                
                <LatestItem key='1'/>
                <LatestItem key='02'/>
                <LatestItem key='11'/>
                <LatestItem key='021'/>
                
                
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </Fragment>
  );
};

export default NewsLatest;
