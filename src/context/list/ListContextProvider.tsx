import { ReactNode, useEffect, useState } from "react";
import { ListItemInterface } from "../../components/ListComponents";
import { ListContext, ListContextType } from "./listContext";

const SAVED_LIST = "savedList";

export const ListContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [todoList, setTodoList] = useState<ListItemInterface[]>(() => {
    const savedList = localStorage.getItem(SAVED_LIST);
    return savedList ? JSON.parse(savedList) : [];
  });

  useEffect(() => {
    localStorage.setItem(SAVED_LIST, JSON.stringify(todoList));
  }, [todoList]);

  const addItem = (item: ListItemInterface) => {
    const newList = [...todoList, item];
    setTodoList(newList);
  };

  const removeItem = (id: string) => {
    const newList = todoList.filter((el) => el.id !== id);
    setTodoList(newList);
  };

  const clearList = () => setTodoList([]);

  const contextValue: ListContextType = {
    addItem,
    removeItem,
    clearList,
    todoList,
  };

  return (
    <ListContext.Provider value={contextValue}>{children}</ListContext.Provider>
  );
};
