import { Assemblies } from "@/types/types";
import { AddCircle, ArrowForward } from "@mui/icons-material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  styled,
} from "@mui/material";

type Props = {
  handleChange(id: string): void;
  currentData: Assemblies[];
  currentTab: string;
};

const CustomTable = styled(Table)({
  borderCollapse: "separate",
  borderSpacing: "0",
});

const CustomTableCell = styled(TableCell)({
  borderBottom: "none",
  textAlign: "start",
  fontWeight: "700",
  fontSize: 12,
  opacity: "40%",
  padding: "0.65rem",
});
const DataTable = ({ currentData, handleChange, currentTab }: Props) => {
  return (
    <TableContainer
      sx={{
        backgroundColor: "#ffff",
        borderRadius: "10px",
        height: "100%",
        minHeight: "calc(100% - (58px + 2rem))",
        padding: "0 1rem",
      }}>
      <CustomTable sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <CustomTableCell sx={{ width: "10ch" }}>SI No</CustomTableCell>
            <CustomTableCell>Name</CustomTableCell>
            <CustomTableCell sx={{ width: "10ch" }}>Type</CustomTableCell>
            <CustomTableCell sx={{ width: "10ch" }}> </CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentData.map((item, index) => (
            <TableRow
              key={index}
              component="a"
              sx={{ "&:hover": { cursor: "pointer" } }}
              onClick={() => handleChange(item.name)}>
              <TableCell sx={{ padding: "0.65rem" }}>
                <Typography>{index + 1}</Typography>
              </TableCell>
              <TableCell sx={{ padding: "0.65rem" }}>
                <Typography>{item.name}</Typography>
              </TableCell>
              <TableCell sx={{ padding: "0.65rem" }}>
                <Typography>{item.type}</Typography>
              </TableCell>
              <TableCell sx={{ padding: "0.65rem" }}>
                {currentTab === "assemblies" ? (
                  <AddCircle sx={{ color: "#009812" }} />
                ) : (
                  <ArrowForward sx={{ color: "primary.light" }} />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </CustomTable>
    </TableContainer>
  );
};

export default DataTable;
