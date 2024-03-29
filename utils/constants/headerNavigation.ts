import { navigationMenu } from "./nagiationLink";

export interface HeaderList {
  label: string;
  path: string;
}

export const headerList: Array<HeaderList> = [
  {
    label: "Home",
    path: navigationMenu.home,
  },
  {
    label: "About",
    path: navigationMenu.about,
  },
];
