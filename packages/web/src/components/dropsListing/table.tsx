import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, IconButton, SvgIcon, Typography } from "@mui/material";

import Linkm from "@mui/material/Link";

import Link from "next/link";
import { useSelector } from "react-redux";
import { dropsListSelector } from "@next/common/selectors";
import Image from "next/image";

import DiscordIcon from "public/images/discord.svg";
import LinkIcon from "public/images/link.svg";
import TwitterIcon from "public/images/twitter.svg";

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

export default function DropTable() {
  const dropsList = useSelector(dropsListSelector).rows;
  console.log("dropslist", dropsList);
  return (
    <TableContainer component={"div"} sx={{ pb: 5 }}>
      <Table aria-label="simple table" sx={{ maxWidth: "xl", mx: "auto" }}>
        <TableHead>
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
        </TableHead>
        <TableBody>
          {dropsList?.map((row) => (
            <TableRow
              key={row.id}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                "& td": { fontSize: "1.5 rem", color: "text.secondary" },
              }}
            >
              <TableCell
                align="center"
                component="td"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="https://picsum.photos/50/50"
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
              <TableCell align="left">{row.user_score}</TableCell>
              <TableCell align="left">{row.price}</TableCell>
              <TableCell align="left">{row.likes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
