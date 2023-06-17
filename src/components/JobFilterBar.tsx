import { ArrowDownward } from "@mui/icons-material";
import SearchBar from "./SearchBar";
import {
  Button,
  FormControl,
  FormLabel,
  MenuItem,
  Select,
  Stack,
  styled,
} from "@mui/material";
const CustomSelect = styled(Select)({
  backgroundColor: "#ffff",
  "& div[role='button']": {
    padding: "0.4rem 2rem",
  },
});
const JobFilterBar = () => {
  return (
    <Stack direction="row" spacing="2rem">
      <SearchBar text="Projects" width="300px" />
      <FormLabel sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        Sort By
        <FormControl>
          <CustomSelect id="demo-simple-select" value={"Name"}>
            <MenuItem value="Name">Name</MenuItem>
          </CustomSelect>
        </FormControl>
      </FormLabel>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "secondary.main",
          color: "primary.light",
          padding: "0 2rem",
          "&:hover":{
            color:"secondary.main",
            backgroundColor:"primary.light"
          }
        }}
        endIcon={<ArrowDownward />}>
        Import
      </Button>
    </Stack>
  );
};

export default JobFilterBar;
