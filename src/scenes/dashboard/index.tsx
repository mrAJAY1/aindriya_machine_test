import { Divider, Stack } from "@mui/material";
import Sidebar from "@/components/Sidebar";
import { sidebarData } from "@/data/data";
import Part1 from "./part1/Part1";
import Part2 from "./part2/Part2";
import { useEffect, useState } from "react";
import AssemblyModal from "../modal";
import { AssemblyItem } from "@/types/types";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleClose = () => setIsModalOpen(!isModalOpen);
  const [assemblyName, setAssemblyName] = useState<string>("");
  const [assemblyList, setAssemblyList] = useState<AssemblyItem[]>(
    [] as AssemblyItem[]
  );

  useEffect(() => {
    console.log({ assemblyList });
  }, [assemblyList]);
  return (
    <Stack direction="row" height="100%">
      <Sidebar data={sidebarData} />
      <Stack direction="row" width="100%">
        <Part1
          setIsModalOpen={setIsModalOpen}
          setAssemblyName={setAssemblyName}
          assemblyName={assemblyName}
        />
        <Divider
          orientation="vertical"
          sx={{ padding: "0 0.5rem", marginRight: "0.5rem" }}
        />
        <Part2 assemblyList={assemblyList} setAssemblyList={setAssemblyList} />
      </Stack>
      <AssemblyModal
        assemblyName={assemblyName}
        setIsOpen={setIsModalOpen}
        assemblyList={assemblyList}
        setAssemblyList={setAssemblyList}
        isOpen={isModalOpen}
        handleClose={handleClose}
      />
    </Stack>
  );
};

export default Dashboard;
