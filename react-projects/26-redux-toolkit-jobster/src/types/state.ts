import { IUser } from "./user";

export interface IState {
  isLoading: boolean,
  isSidebarOpen: boolean,
  user: IUser | null;
}