import FlexBetween from "@/components/FlexBetween";
import { Avatar, Badge, Box, Typography, useTheme } from "@mui/material";
import {
  ExpandMore as ExpandMoreIcon,
  NotificationsNoneOutlined as NotificationsNoneOutlinedIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
type Props = {};

function Navbar({}: Props) {
  const { palette } = useTheme();
  return (
    <FlexBetween padding="1rem 2rem" bgcolor={palette.primary.main}>
      {/* LEFT SIDE */}
      <FlexBetween gap="0.75rem">
        <Box width="50px" height="50px">
          <img src={logo} width="100%" height="100%" alt="logo" />
        </Box>
        <Box sx={{ border: "1px solid #ffff", padding: "0 0.1rem" }}>
          <Typography variant="h6" fontWeight={900} color="#ffff">
            BID WINNER
          </Typography>
        </Box>
      </FlexBetween>
      <FlexBetween gap="2.5rem">
        <Link
          to="/"
          style={{ textDecoration: "inherit", color: palette.secondary.main }}>
          Dashboard
        </Link>
        <Link
          to="/"
          style={{ textDecoration: "inherit", color: palette.secondary.main }}>
          Jobs
        </Link>
        <Link
          to="/"
          style={{ textDecoration: "inherit", color: palette.secondary.main }}>
          Calendar
        </Link>
        <Link
          to="/"
          style={{ textDecoration: "inherit", color: palette.secondary.main }}>
          Cost Catalog
        </Link>
        <Link
          to="/"
          style={{ textDecoration: "inherit", color: palette.secondary.main }}>
          Database
        </Link>
        <Link
          to="/"
          style={{ textDecoration: "inherit", color: palette.secondary.main }}>
          Tutorials
        </Link>
      </FlexBetween>
      <FlexBetween gap="1.25rem">
        <Box
          sx={{
            border: `1px solid ${palette.secondary.main}`,
            padding: "0 0.5rem",
            borderRadius: "5px",
          }}
          display="flex"
          alignItems="center"
          justifyContent="flex-between"
          gap="1.2rem">
          <Box>
            <Typography color={palette.secondary.main}>Jane Cooper</Typography>
            <Typography variant="subtitle2" color={palette.secondary.main}>
              janecooper@gmail.com
            </Typography>
          </Box>
          <Avatar src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" />
          <ExpandMoreIcon
            sx={{ fontSize: "30px", color: palette.secondary.main }}
          />
        </Box>
        <Badge
          badgeContent={2}
          color="error"
          sx={{
            "& .MuiBadge-badge": {
              width: "10px",
              minWidth: "unset",
              right: "8px",
              top: "7px",
              height: "10px",
              padding: "0 px",
              borderRadius: "50%",
            },
          }}>
          <NotificationsNoneOutlinedIcon
            sx={{ fontSize: "30px", color: palette.secondary.main }}
          />
        </Badge>
      </FlexBetween>
    </FlexBetween>
  );
}

export default Navbar;
