import { AssemblyItem } from "@/types/types";
import { Create } from "@mui/icons-material";
import {
  Button,
  FormControl,
  FormLabel,
  Modal,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";

type Props = {
  handleClose: () => void;
  isOpen: boolean;
  assemblyList: AssemblyItem[];
  assemblyName: string;
  setIsOpen: (isOpen: boolean) => void;
  setAssemblyList: (AssemblyList: AssemblyItem[]) => void;
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: "400px",
  minHeight: "400px",
  width: "60vw",
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  gap: "3rem",
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

const AssemblyModal = ({
  handleClose,
  isOpen,
  setIsOpen,
  setAssemblyList,
  assemblyList,
  assemblyName,
}: Props) => {
  const [quantity, setQuantity] = useState<number | null>(null);
  const [length, setLength] = useState<number | null>(null);

  const handleSubmit = () => {
    setAssemblyList([
      ...assemblyList,
      { name: assemblyName, quantity, length },
    ]);
    setIsOpen(false);
    setQuantity(null);
    setLength(null);
  };
  return (
    <Modal
      slotProps={{ backdrop: { onClick: e => e.stopPropagation } }}
      open={isOpen}
      onClose={handleClose}
      sx={{ backdropFilter: "blur(2px)" }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Stack flexDirection="column" sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h4"
          component="h4"
          textAlign="center"
          color="text.primary">
          Add Assembly to the project
        </Typography>
        <Stack gap="2rem">
          <Stack direction="row" gap="2.5rem">
            <Typography variant="h6" color="text.primary" fontWeight="light">
              Assembly Name
            </Typography>{" "}
            <Typography variant="h6" color="text.primary" fontWeight="bold">
              {assemblyName}
            </Typography>
          </Stack>
          <Stack direction="row" gap="5rem" alignItems="center">
            <FormLabel sx={{ display: "flex", gap: "2rem" }}>
              <Typography variant="h6" color="text.primary" fontWeight="light">
                Count
              </Typography>
              <FormControl>
                <TextField
                  type="number"
                  size="small"
                  value={quantity}
                  onChange={e => setQuantity(parseInt(e.target.value))}
                />
              </FormControl>
            </FormLabel>
            <FormLabel sx={{ display: "flex", gap: "2rem" }}>
              <Typography variant="h6" color="text.primary" fontWeight="light">
                Length in M
              </Typography>
              <FormControl>
                <TextField
                  type="number"
                  size="small"
                  value={length}
                  onChange={e => setLength(parseInt(e.target.value))}
                />
              </FormControl>
            </FormLabel>
          </Stack>
          <Stack gap="1rem">
            <Typography variant="h6" color="text.primary" fontWeight="light">
              Assembly Description
            </Typography>
            <TableContainer
              sx={{ borderRadius: "10px", backgroundColor: "#F2F6F9" }}>
              <CustomTable>
                <TableHead>
                  <TableRow>
                    <CustomTableCell>SI No</CustomTableCell>
                    <CustomTableCell>Quantity</CustomTableCell>
                    <CustomTableCell>Fct 1</CustomTableCell>
                    <CustomTableCell>Fct 2</CustomTableCell>
                    <CustomTableCell>Catalog Number</CustomTableCell>
                    <CustomTableCell> </CustomTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>4x1 1/2” SQ Box 1/2” KO</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>32321AA15</TableCell>
                    <TableCell>
                      <Create />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2</TableCell>
                    <TableCell>4” SQ Blank Cover</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>455641JJH</TableCell>
                    <TableCell>
                      <Create />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </CustomTable>
            </TableContainer>
          </Stack>
          <Stack
            direction="row"
            width="100%"
            justifyContent="center"
            gap="2rem">
            <Button
              variant="outlined"
              sx={{
                width: "150px",
                padding: "0.5rem",
                color: "primary.light",
              }}
              onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={{ width: "150px", backgroundColor: "primary.light" }}>
              Add
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Modal>
  );
};

export default AssemblyModal;
