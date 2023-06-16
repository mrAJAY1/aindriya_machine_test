export interface Assemblies {
  name: string;
  type: string;
}
export interface SubCategory extends Assemblies {
  assemblies: {
    name: string;
    type: string;
  }[];
}
