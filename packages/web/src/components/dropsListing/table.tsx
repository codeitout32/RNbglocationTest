import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, IconButton, SvgIcon, Typography, Box } from "@mui/material";

import Linkm from "@mui/material/Link";

import Link from "next/link";
import { useSelector } from "react-redux";
import { dropsListSelector } from "@next/common/selectors";
import Image from "next/image";

import DiscordIcon from "public/images/discord.svg";
import LinkIcon from "public/images/link.svg";
import TwitterIcon from "public/images/twitter.svg";
import StyleTable from "./styles/styledTable";
import moment from "moment";

import TextLogo from "src/theme/textLogo";
import { handleImageError } from "@next/common/utils/handleImageError";

function createData(name, size, price, date, img) {
  return { name, size, price, date, img };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, "https://picsum.photos/100/100"),
  createData("Ice cream sandwich", 237, 9.0, 37, "https://picsum.photos/50/50"),
  createData("Eclair", 262, 16.0, 24, "https://picsum.photos/50/50"),
  createData("Cupcake", 305, 3.7, 67, "https://picsum.photos/50/50"),
  createData("Gingerbread", 356, 16.0, 49, "https://picsum.photos/50/50"),
];

const dateFunctn = (rawdate) => {
  const date = new Date(rawdate);

  const options = { day: "numeric", month: "long" };

  return date.toLocaleString("en-us", options);
};

export default function DropTable() {
  const dropsList = useSelector(dropsListSelector);
  console.log("dropslist", dropsList);
  return (
    <TableContainer component={"div"} sx={{ pb: 5 }}>
      <StyleTable aria-label="Drops List" sx={{ maxWidth: "xl", mx: "auto" }}>
        <TableBody>
          {Object.keys(dropsList)
            .slice(0, -1) // slice used to remove last element ie count
            .map((x, index) => (
              <>
                <TableRow>
                  <TableCell
                    align="center"
                    component="td"
                    colSpan={6}
                    variant="head"
                  >
                    <Typography
                      variant="h5"
                      textAlign="center"
                      color="grey.500"
                    >
                      {dateFunctn(x)}
                    </Typography>
                  </TableCell>
                </TableRow>

                {index == 0 && (
                  <TableRow
                    sx={{
                      "& th": { color: "text.secondary", fontSize: "10" },
                      "& td": { fontSize: "1.5 rem", color: "text.secondary" },
                    }}
                  >
                    <TableCell variant="head">Project</TableCell>
                    <TableCell align="left" variant="head">
                      Links
                    </TableCell>
                    <TableCell align="left" variant="head">
                      Time
                    </TableCell>
                    <TableCell align="left" variant="head">
                      Count
                    </TableCell>
                    <TableCell align="left" variant="head">
                      Price
                    </TableCell>
                    <TableCell align="left" variant="head">
                      YNH Score
                    </TableCell>
                  </TableRow>
                )}

                {dropsList[x].map?.((row) => (
                  <TableRow
                    key={row.id}
                    sx={{
                      // "&:last-child td, &:last-child th": { border: 0 },
                      "& td": {
                        color: "text.secondary",
                        fontSize: (theme) => theme.typography.h6.fontSize,
                      },
                    }}
                  >
                    <TableCell
                      align="center"
                      component="td"
                      className="trstart"
                    >
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Avatar
                          alt="Remy Sharp"
                          src={row.image}
                          sx={{ width: 56, height: 56 }}
                          imgProps={{ onError: handleImageError }}
                        >
                          <img
                            src="https://picsum.photos/200"
                            alt="fallback image"
                          />
                        </Avatar>
                        <Link href={`drops/${row.id}`}>
                          <Linkm href="#">
                            <Typography
                              variant="h5"
                              textAlign="center"
                              color="text.primary"
                              pl={3}
                            >
                              {row.title}
                            </Typography>
                          </Linkm>
                        </Link>
                      </Box>
                    </TableCell>
                    <TableCell align="left">
                      {/* Conditional social links  */}
                      {row.social_link_1 && (
                        <IconButton
                          aria-label="discord"
                          href={row.social_link_1}
                          target="_blank"
                        >
                          <Image src={TwitterIcon} alt="" width={24} />
                        </IconButton>
                      )}
                      {row.social_link_2 && (
                        <IconButton
                          aria-label="discord"
                          href={row.social_link_2}
                          target="_blank"
                        >
                          <Image src={DiscordIcon} alt="" width={24} />
                        </IconButton>
                      )}
                      {row.social_link_3 && (
                        <IconButton
                          aria-label="discord"
                          href={row.social_link_3}
                          target="_blank"
                        >
                          <Image src={LinkIcon} alt="" width={26} />
                        </IconButton>
                      )}
                      {/* Conditional social links ends */}
                    </TableCell>
                    <TableCell align="left">
                      {moment(row.created_at).format("hh:mm A")} UTC
                    </TableCell>
                    <TableCell align="left">{row.supply_content}</TableCell>
                    <TableCell align="left">{row.mint_price}</TableCell>
                    <TableCell align="left" className="trend">
                      <TextLogo
                        fontSize="small"
                        sx={{ verticalAlign: "sub", mr: 1 }}
                        mr={1}
                      />
                      {row.overall_score}
                    </TableCell>
                  </TableRow>
                ))}
              </>
            ))}
        </TableBody>
      </StyleTable>
    </TableContainer>
  );
}

// Old table header

{
  /* <TableHead>
          <TableRow
            sx={{
              "& th": { color: "text.secondary", fontSize: "10" },
              "& td": { fontSize: "1.5 rem", color: "text.secondary" },
            }}
          >
            <TableCell>Project</TableCell>
            <TableCell align="left">Links</TableCell>
            <TableCell align="left">Time</TableCell>
            <TableCell align="left">Count</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">YNH Score</TableCell>
          </TableRow>
        </TableHead> */
}
// Old listing table
{
  /* {dropsList?.map?.((row) => (
  <TableRow
    key={row.id}
    sx={{
      "&:last-child td, &:last-child th": { border: 0 },
      "& td": { fontSize: "1.5 rem", color: "text.secondary" },
    }}
  >
    <TableCell align="center" component="td">
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Avatar
          alt="Remy Sharp"
          src={row.image}
          sx={{ width: 56, height: 56 }}
        />
        <Link href={`drops/${row.id}`}>
          <Linkm href="#">
            <Typography
              variant="h5"
              textAlign="center"
              color="text.primary"
              pl={3}
            >
              {row.title}
            </Typography>
          </Linkm>
        </Link>
      </Box>
    </TableCell>
    <TableCell align="left">
      <IconButton aria-label="discord" href={row.social_link_1}>
        <Image src={TwitterIcon} alt="" width={24} />
      </IconButton>
      <IconButton aria-label="discord" href={row.social_link_2}>
        <Image src={DiscordIcon} alt="" width={24} />
      </IconButton>
      <IconButton aria-label="discord" href={row.social_link_3}>
        <Image src={LinkIcon} alt="" width={26} />
      </IconButton>
    </TableCell>
    <TableCell align="left">{row.size}</TableCell>
    <TableCell align="left">{row.supply_content}</TableCell>
    <TableCell align="left">{row.mint_price}</TableCell>
    <TableCell align="left">{row.likes}</TableCell>
  </TableRow>
))} */
}
