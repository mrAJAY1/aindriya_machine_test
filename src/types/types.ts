export interface Assemblies {
  name: string;
  type: string;
}
export interface SubCategories extends Assemblies {
  assemblies: {
    name: string;
    type: string;
  }[];
}
export type AssemblyItem = {
  name: string;
  length: number | null;
  quantity: number | null;
};
