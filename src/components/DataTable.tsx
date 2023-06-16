import { Assemblies } from "@/types";
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
};

const CustomTable = styled(Table)({
  borderCollapse: "separate",
  borderSpacing: "0",
});

const CustomTableCell = styled(TableCell)({
  borderBottom: "none",
  textAlign: "start",
});
const DataTable = ({ currentData, handleChange }: Props) => {
  return (
    <TableContainer
      sx={{
        backgroundColor: "#ffff",
        marginTop: "1rem",
        borderRadius: "10px",
      }}>
      <CustomTable sx={{ minWidth: 500 }} aria-label="simple table">
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
              sx={{"&:hover":{cursor:"pointer"}}}
              onClick={() => handleChange(item.name)}>
              <TableCell>
                <Typography>{index + 1}</Typography>
              </TableCell>
              <TableCell>
                <Typography>{item.name}</Typography>
              </TableCell>
              <TableCell>
                <Typography>{item.type}</Typography>
              </TableCell>
              <TableCell>
                <Typography>{index + 1}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </CustomTable>
    </TableContainer>
  );
};

export default DataTable;
