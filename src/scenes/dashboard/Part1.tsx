import FlexBetween from "@/components/FlexBetween";
import backArrow from "@/assets/backArrow.png";
import {
  Box,
  FormControl,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import DataTable from "@/components/DataTable";
import { useState } from "react";
import { data } from "@/data/data";
import { Assemblies, SubCategory } from "@/types";



const SearchIcon = (props: { width?: string | number; stroke: string }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      className="w-6 h-6">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  );
};

const Part1 = () => {
  const [currentNav, setCurrentNav] = useState<
    "category" | "subcategory" | "assemblies"
  >("category");

  const [subCategories, setSubCategories] = useState<SubCategory[]>(
    [] as SubCategory[]
  );
  const [assemblies, setAssemblies] = useState<Assemblies[]>(
    [] as Assemblies[]
  );

  const handleChange = (id: string) => {
    if (currentNav === "category") {
      const filtered = data.categories.find(
        item => item.name === id
      )?.subcategories;
      setSubCategories(filtered ? filtered : subCategories);
      setCurrentNav("subcategory");
    } else if (currentNav === "subcategory") {
      const filtered = subCategories.find(item => item.name === id)?.assemblies;
      setAssemblies(filtered ? filtered : assemblies);
      setCurrentNav("assemblies");
    }
  };
  const handleBack = () => {
    if (currentNav === "subcategory") setCurrentNav("category");
    else if (currentNav === "assemblies") setCurrentNav("subcategory");
    else return;
  };
  return (
    <Stack width="40%" padding="2rem 1rem">
      <FlexBetween>
        <FlexBetween gap="0.75rem">
          <Box
            component="button"
            sx={{
              backgroundColor: "transparent",
              border: "none",
              padding: "0",
              margin: "0",
            }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            onClick={handleBack}>
            <img src={backArrow} alt="back" />
          </Box>
          <Typography variant="h4" fontWeight="900" color="text.primary">
            {currentNav}
          </Typography>
        </FlexBetween>
        <FormControl>
          <TextField
            placeholder="Search Categories"
            InputProps={{
              style: {
                boxShadow: "inset 0px 1px 2px rgba(0, 0, 0, 0.15)",
                height: "30px",
                padding: "0.2rem",
                backgroundColor: "#fff",
              },
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon width="16px" stroke="#919191" />
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
      </FlexBetween>
      <DataTable
        handleChange={handleChange}
        currentData={
          currentNav === "category"
            ? data.categories
            : currentNav === "subcategory"
            ? subCategories
            : assemblies
        }
      />
    </Stack>
  );
};

export default Part1;
