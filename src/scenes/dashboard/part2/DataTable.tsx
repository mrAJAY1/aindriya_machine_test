import { AssemblyItem } from "@/types/types";
import { Delete } from "@mui/icons-material";
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
  assemblyList: AssemblyItem[];
  setAssemblyList: (assemblyList: AssemblyItem[]) => void;
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
const DataTable = ({ assemblyList, setAssemblyList }: Props) => {
  const handleDelete = (id: number) => {
    const filtered = assemblyList.filter((_item, index) => id !== index);
    setAssemblyList(filtered);
  };
  return (
    <TableContainer
      sx={{
        backgroundColor: "#ffff",
        borderRadius: "10px",
        height: "100%",
        padding: "0 1rem",
      }}>
      <CustomTable sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <CustomTableCell sx={{ width: "10ch" }}>SI No</CustomTableCell>
            <CustomTableCell>Assembly Name</CustomTableCell>
            <CustomTableCell sx={{ width: "20ch", textAlign: "center" }}>
              Length
            </CustomTableCell>
            <CustomTableCell sx={{ textAlign: "center" }}>
              Quantity{" "}
            </CustomTableCell>
            <CustomTableCell sx={{ width: "10ch" }}> </CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {assemblyList.map((item, index) => (
            <TableRow
              key={index}
              component="a"
              sx={{ "&:hover": { cursor: "pointer" } }}>
              <TableCell sx={{ padding: "0.65rem" }}>
                <Typography>{index + 1}</Typography>
              </TableCell>
              <TableCell sx={{ padding: "0.65rem" }}>
                <Typography>{item.name}</Typography>
              </TableCell>
              <TableCell sx={{ padding: "0.65rem" }}>
                <Typography
                  textAlign="center"
                  fontWeight="bold"
                  color="primary.light">
                  {item.length ? `${item.length} M` : "_"}
                </Typography>
              </TableCell>
              <TableCell sx={{ padding: "0.65rem" }}>
                <Typography
                  textAlign="center"
                  fontWeight="bold"
                  color="primary.light">
                  {item.quantity ?? "_"}
                </Typography>
              </TableCell>
              <TableCell
                sx={{ padding: "0.65rem" }}
                onClick={() => handleDelete(index)}>
                <Delete sx={{ color: "primary.light" }} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </CustomTable>
    </TableContainer>
  );
};

export default DataTable;
