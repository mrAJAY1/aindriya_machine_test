import { DehazeSharp } from "@mui/icons-material";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import { useState } from "react";

type Props = { data: string[] };

const Sidebar = ({ data }: Props) => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("Take off");
  return (
    <Stack width="75px" height="100%" bgcolor="secondary.main">
      <Box
        width="100%"
        bgcolor={palette.primary.light}
        display="flex"
        flexDirection="column"
        alignItems="center">
        <Box width="30px">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="#fff"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
            />
          </svg>
        </Box>
        <Typography variant="subtitle2" color={palette.secondary.main}>
          back to Jobs
        </Typography>
      </Box>
      {data.map(item => (
        <Box
          padding="1rem 1rem"
          display="flex"
          sx={{
            maxHeight: "50px",
            position: "relative",
            ...(selected === item && {
              "&::before": {
                content: "''",
                width: "5px",
                height: "100%",
                position: "absolute",
                left: 0,
                top: 0,
                background:
                  "linear-gradient(174.04deg, #FF512F 21.32%, #F09819 78.98%)",
              },
            }),
          }}
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
          bgcolor={
            selected === item ? palette.secondary.light : palette.secondary.main
          }>
          <DehazeSharp sx={{ border: "1px solid" }} />
          <Typography variant="subtitle2" color={palette.text.secondary}>
            {item}
          </Typography>
        </Box>
      ))}
    </Stack>
  );
};

export default Sidebar;
