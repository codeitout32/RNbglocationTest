import zIndex from "@mui/material/styles/zIndex";
import React from "react";
import Lightbox from "react-image-lightbox";

const ImgLgtbox = ({ imgUrl, setOpen, news }) => {
  //   const [isOpen, setIsOpen] = React.useState(false);

  const titleNode = (
    <>
      {`By ${news.author}`}{" "}
      {news?.external_url && (
        <a
          href={news?.external_url}
          style={{ color: "lightgreen", fontWeight: 500 }}
        >
          Source
        </a>
      )}
    </>
  );

  return (
    <>
      <Lightbox
        mainSrc={imgUrl}
        onCloseRequest={() => {
          console.log("closerequest");
          setOpen(false);
        }}
        reactModalStyle={{
          overlay: {
            zIndex: 1200,
          },
        }}
        closeLabel="Close Image"
        imageTitle={titleNode}
      />
    </>
  );
};

export default ImgLgtbox;
