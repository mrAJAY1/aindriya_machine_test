import backArrow from "@/assets/backArrow.png";
import FlexBetween from "./FlexBetween";
import { Box, Typography } from "@mui/material";

type Props = { handleBack(): void; currentTab: string };

const CurrentTab = ({ handleBack, currentTab }: Props) => {
  return (
    <FlexBetween gap="0.75rem">
      <Box
        component="button"
        sx={{
          backgroundColor: "transparent",
          border: "none",
          padding: "0",
          margin: "0",
          "&:hover": {
            cursor: "pointer",
          },
        }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        onClick={handleBack}>
        <img src={backArrow} alt="back" />
      </Box>
      <Typography variant="h4" color="text.primary">
        {`${currentTab[0].toUpperCase()}${currentTab.slice(1)}`}
      </Typography>
    </FlexBetween>
  );
};

export default CurrentTab;
