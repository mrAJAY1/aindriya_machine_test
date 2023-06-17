import FlexBetween from "@/components/FlexBetween";
import { Stack } from "@mui/material";
import DataTable from "@/scenes/dashboard/part1/DataTable";
import { useState } from "react";
import { data } from "@/data/data";
import { Assemblies, SubCategories } from "@/types/types";
import CurrentTab from "@/components/CurrentTab";
import SearchBar from "@/components/SearchBar";

type Props = {
  setIsModalOpen: (isModalOpen: boolean) => void;
  setAssemblyName: (assemblyName: string) => void;
  assemblyName: string;
};

const Part1 = ({ setIsModalOpen, setAssemblyName, assemblyName }: Props) => {
  const [currentTab, setCurrentTab] = useState<
    "categories" | "subcategories" | "assemblies"
  >("categories");

  const [subCategories, setSubCategories] = useState<SubCategories[]>(
    [] as SubCategories[]
  );
  const [assemblies, setAssemblies] = useState<Assemblies[]>(
    [] as Assemblies[]
  );

  const handleChange = (id: string) => {
    if (currentTab === "categories") {
      const filtered = data.categories.find(
        item => item.name === id
      )?.subcategories;
      setSubCategories(filtered ? filtered : subCategories);
      setCurrentTab("subcategories");
    } else if (currentTab === "subcategories") {
      const filtered = subCategories.find(item => item.name === id)?.assemblies;
      setAssemblies(filtered ? filtered : assemblies);
      setCurrentTab("assemblies");
    } else if (currentTab === "assemblies") {
      const filtered = assemblies.find(item => item.name === id)?.name;
      setAssemblyName(filtered ? filtered : assemblyName);
      setIsModalOpen(true);
    }
  };
  const handleBack = () => {
    if (currentTab === "subcategories") setCurrentTab("categories");
    else if (currentTab === "assemblies") setCurrentTab("subcategories");
    else return;
  };

  return (
    <>
      <Stack width="40%" padding="2rem 1rem 1rem 1rem" gap="1rem">
        <FlexBetween>
          <CurrentTab handleBack={handleBack} currentTab={currentTab} />
          <SearchBar width="150px" text="Category" />
        </FlexBetween>
        <DataTable
          handleChange={handleChange}
          currentTab={currentTab}
          currentData={
            currentTab === "categories"
              ? data.categories
              : currentTab === "subcategories"
              ? subCategories
              : assemblies
          }
        />
      </Stack>
    </>
  );
};

export default Part1;
