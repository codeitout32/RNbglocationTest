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
} from "@mui/material";
import ButtonWhite from "src/theme/buttonWhite";
import { url } from "inspector";
import ArticleItem from "./articleItem";
import {
  newsListSelector,
  recentNewsPaginationSelector,
} from "@next/common/selectors";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewsStart } from "@next/common/slices/news.slice";
import { duplicateRemover } from "./utils";

// taken from latest news

const NewsList = ({ category }) => {
  const [resultList, setResultList] = React.useState([]);
  const dispatch = useDispatch();

  const divStyle = {
    position: "relative",
    top: "-200px",

    height: "270px",
    background: "linear-gradient(180deg, #000 0%, #3F3F46 100%)",
    marginBottom: "-200px",
  };

  const newsListRaw = useSelector(newsListSelector);
  const newsList = newsListRaw?.res?.rows ?? [];

  console.log("newsList", newsList);

  const handleLoadmore = (e) => {
    dispatch(
      fetchNewsStart({
        ...newsList?.pagination,
        page_num: newsList?.pagination?.page_num + 1,
      })
    );
  };

  React.useEffect(() => {
    console.log("resulList", resultList);
  }, [resultList]);

  React.useEffect(() => {
    if (!newsList?.length) return;
    console.log("useEffect1", resultList, newsList);
    const tempNews = [...resultList, ...newsList];
    setResultList(() => duplicateRemover(tempNews));
  }, [newsList]);

  React.useEffect(() => {
    console.log("useEffect2", category, resultList);
    setResultList([]);
    dispatch(
      fetchNewsStart({
        row_per_page: 10,
        page_num: 1,
        category_id: category ? category : "",
      })
    );
  }, [category]);
  return (
    <Fragment>
      <Box
        sx={{
          // borderRadius: 10,
          mt: 5,
          // pt: 5,
          // overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          // background: "linear-gradient(180deg, #3F3F46 0%, #000000 15%);",
        }}
      >
        {/* <Typography
          variant="h3"
          textAlign="center"
          component="div"
          sx={{ my: 7 }}
        >
          Recent Articles
        </Typography> */}

        {resultList?.map((news, index) => (
          <ArticleItem key={index} news={news} />
        ))}

        {!resultList?.length && (
          <Typography
            variant="h5"
            textAlign="center"
            component="div"
            sx={{
              my: 7,
            }}
          >
            No News Found...
          </Typography>
        )}
        {/* <ArticleItem />
          <ArticleItem /> */}

        {newsList?.length ? (
          <ButtonWhite
            sx={{
              textTransform: "capitalize",
              mx: "auto",
              display: "block",
              mt: 3,
            }}
            onClick={handleLoadmore}
          >
            Load more
          </ButtonWhite>
        ) : (
          <Typography color="text.secondary" align="center">
            End of List
          </Typography>
        )}
        {/* <div style={divStyle}></div> */}
      </Box>
    </Fragment>
  );
};

export default NewsList;
