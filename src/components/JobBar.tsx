import FlexBetween from "./FlexBetween";
import { Button, Typography } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

const JobBar = () => {
  return (
    <FlexBetween>
      <Typography variant="h4" color="text.primary">
        Job
      </Typography>
      <FlexBetween gap="1.5rem">
        <Typography fontWeight="light">Quote Status</Typography>
        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            backgroundColor: "#009812",
            borderRadius: "20px",
            padding: "0.2rem 1.5rem",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#007c0e",
              boxShadow: "none",
            },
          }}
          endIcon={<ExpandMore />}>
          Accepted
        </Button>
      </FlexBetween>
    </FlexBetween>
  );
};

export default JobBar;
