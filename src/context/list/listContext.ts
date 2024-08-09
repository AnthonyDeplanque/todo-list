import { createContext } from "react";
import { ListItemInterface } from "../../components/ListComponents";

export interface ListContextType {
  todoList: ListItemInterface[];
  addItem: (item: ListItemInterface) => void;
  removeItem: (id: string) => void;
  clearList: () => void;
}

export const ListContext = createContext<ListContextType | undefined>(
  undefined
);
