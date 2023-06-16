import { Divider, Stack } from "@mui/material";
import Sidebar from "@/components/Sidebar";
import { sidebarData } from "@/data/data";
import Part1 from "./Part1";
import Part2 from "./Part2";

const Dashboard = () => {
  return (
    <Stack direction="row" height="100%">
      <Sidebar data={sidebarData} />
      <Stack direction="row" width="100%">
        <Part1 />
        <Divider orientation="vertical" sx={{ padding: "0 1rem" }} />
        <Part2 />
      </Stack>
    </Stack>
  );
};

export default Dashboard;
