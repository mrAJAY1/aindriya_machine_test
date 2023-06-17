import JobBar from "@/components/JobBar";
import JobPanel from "@/components/JobPanel";
import JobFilterBar from "@/components/JobFilterBar";
import { Stack } from "@mui/material";
import DataTable from "./DataTable";
import { AssemblyItem } from "@/types/types";

type Props = {
  assemblyList: AssemblyItem[];
  setAssemblyList: (assemblyList: AssemblyItem[]) => void;
};

const Part2 = (props: Props) => {
  return (
    <Stack padding="3rem 3rem 1rem 1rem" gap="1rem" width="100%">
      <JobBar />
      <JobPanel />
      <JobFilterBar />
      <DataTable {...props} />
    </Stack>
  );
};

export default Part2;
