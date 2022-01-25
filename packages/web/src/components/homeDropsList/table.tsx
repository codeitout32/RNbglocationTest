import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, Typography } from "@mui/material";

import { dropsListSelector } from "@next/common/selectors";
import { useSelector } from "react-redux";

import Linkm from "@mui/material/Link";
import Link from "next/link";

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
  return (
    <TableContainer component={"div"} sx={{ pb: 5 }}>
      <Table
        aria-label="simple table"
        sx={{ maxWidth: "md", mx: "auto", minWidth: "70%" }}
      >
        <TableHead>
          <TableRow
            sx={{
              "& th": { color: "text.secondary", fontSize: "10" },
              "& td": { fontSize: "1.5 rem", color: "text.secondary" },
            }}
          >
            <TableCell>Project</TableCell>
            <TableCell align="left">Size</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">YNH Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dropsList?.map((row, index) => {
            if (index > 10) return;
            return (
              <TableRow
                key={row.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  "& td": { fontSize: "1.1rem", color: "text.secondary" },
                }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ display: "flex", alignItems: "center" }}
                >
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
                </TableCell>
                <TableCell align="left">{row.supply_content}</TableCell>
                <TableCell align="left">{row.mint_price} SOL</TableCell>
                <TableCell align="left">{row.launch_date}</TableCell>
                <TableCell align="left">{row.overall_score}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
