import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { dropsListSelector } from "@next/common/selectors";

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
            <TableCell align="left">Size</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">YNH Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
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
                  src={row.img}
                  sx={{ width: 56, height: 56 }}
                />
                <Typography
                  variant="h5"
                  textAlign="center"
                  color="text.primary"
                  pl={3}
                >
                  {row.name}
                </Typography>
              </TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left">{row.size}</TableCell>
              <TableCell align="left">{row.price}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">999</TableCell>
            </TableRow>
          ))}
          {dropsList.map((row) => (
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
                <Typography
                  variant="h5"
                  textAlign="center"
                  color="text.primary"
                  pl={3}
                >
                  {row.title}
                </Typography>
              </TableCell>
              <TableCell align="left"></TableCell>
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
