import {
  Box,
  Button,
  MenuItem,
  Select,
  Stack,
  Switch,
  SwitchProps,
  Typography,
  styled,
} from "@mui/material";
import FlexBetween from "./FlexBetween";
const CustomSelect = styled(Select)({
  border: "1px solid",
  padding: "0",
  "& div[role='button']": {
    padding: "0.2rem 1rem",
  },
});
const CustomSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 100,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 3,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(45px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#FFFF",
        opacity: 1,
        border: 0,
      },
      "& + .MuiSwitch-track:after": {
        content: "'Metric'",
        position: "absolute",
        fontSize: "12px",
        left: "5px",
        top: "50%",
        transform: " translate(0%,-50%)",
        width: "100%",
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
    "& .MuiSwitch-thumb:after": {
      content: "'OS'",
      position: "absolute",
      fontSize: "12px",
      left: "50%",
      top: "50%",
      transform: " translate(-50%, -50%)",
      width: "100%",
      textAlign: "center",
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: "50px",
    height: 20,
    backgroundColor: theme.palette.primary.light,
    borderRadius: "10px",
  },

  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "#ffff",
    boxShadow: "inset 0px 1px 4px rgba(0, 0, 0, 0.25)",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));
const JobPanel = () => {
  return (
    <Stack bgcolor="#ffff" padding="1rem" borderRadius="10px" gap="1rem">
      <FlexBetween>
        <FlexBetween gap="2.5rem">
          <Box width={90}>
            <Typography>Job Name</Typography>
          </Box>

          <Typography fontWeight="bold">Test Project 1</Typography>
        </FlexBetween>
        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            backgroundColor: "primary.light",
            borderRadius: "8px",
            padding: "0.2rem 1.5rem",
          }}>
          Job Details
        </Button>
      </FlexBetween>
      <FlexBetween>
        <FlexBetween gap="2.5rem">
          <Box width={90}>
            {" "}
            <Typography>Job Number</Typography>
          </Box>
          <Typography fontWeight="bold">#ABV3265413</Typography>
        </FlexBetween>
        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            backgroundColor: "primary.light",
            borderRadius: "8px",
            padding: "0.2rem 1.5rem",
          }}>
          Button 2
        </Button>
      </FlexBetween>
      <FlexBetween>
        <FlexBetween gap="2.5rem">
          <Box width={90}>
            {" "}
            <Typography>Unit</Typography>
          </Box>
          <CustomSwitch checked />
        </FlexBetween>
        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            backgroundColor: "primary.light",
            borderRadius: "8px",
            padding: "0.2rem 1.5rem",
          }}>
          Job Details
        </Button>
      </FlexBetween>
      <FlexBetween>
        <FlexBetween gap="2.5rem">
          <Box width={90}>
            {" "}
            <Typography>Difficulty Level</Typography>
          </Box>
          <Box width={150}>
            <CustomSelect fullWidth value="High" size="small" color="secondary">
              <MenuItem value="High">High</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="Low">Low</MenuItem>
            </CustomSelect>
          </Box>
        </FlexBetween>
      </FlexBetween>
    </Stack>
  );
};

export default JobPanel;
