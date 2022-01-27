import React from "react";
import { Table } from "@mui/material";
import { styled } from "@mui/system";

const StyleTable = styled(Table)`
  & .MuiTableRow-root {
    borderbottom: "solid 1px #5c5c5c";
    border: 2px solid #27272a;
  }

  .MuiTableCell-root {
    border-top: 2px solid #27272a;
    border-bottom: 2px solid #27272a;
  }

  .MuiTableCell-head {
    border: 0;
  }
  .trstart {
    border-left: 2px solid #27272a;
  }
  .trend {
    border-right: 2px solid #27272a;
  }

  border-collapse: separate;
  border-spacing: 0 1em;
`;

export default StyleTable;
