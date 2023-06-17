import { FormControl, InputAdornment, TextField } from "@mui/material";

type Props = {
  text: string;
  width: string;
};

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

const SearchBar = ({ text, width }: Props) => {
  return (
    <FormControl>
      <TextField
        placeholder={`Search ${text}`}
        InputProps={{
          style: {
            boxShadow: "inset 0px 1px 2px rgba(0, 0, 0, 0.15)",
            height: "30px",
            ...(width && { width }),
            padding: "0.2rem",
            fontSize: "10px",
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
  );
};

export default SearchBar;
