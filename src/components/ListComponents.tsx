import { useEffect, useState } from "react";
import { createUUID } from "../helpers/uuid";
import ListElement from "./ListElement";
import ListForm from "./ListForm";
import Button from "./generics/Button";

export interface ListItemInterface {
  id: string;
  description: string;
}

const ListComponent: React.FC = () => {
  const listStyle: React.CSSProperties = {
    width: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  const ulStyle: React.CSSProperties = {
    listStyleType: "initial",
  };

  const [list, setList] = useState<ListItemInterface[]>([
    {
      id: createUUID(),
      description: "descendre les poubelles",
    },
    {
      id: createUUID(),
      description: "faire à manger",
    },
    {
      id: createUUID(),
      description: "laver le sol",
    },
    {
      id: createUUID(),
      description: "lebron james",
    },
  ]);

  useEffect(() => {}, [list]);

  const onDelete = (id: string) => {
    const newList = list.filter((element) => element.id !== id);
    setList(newList);
  };

  const onValidation = (value: string) => {
    const id = createUUID();
    const newListItem: ListItemInterface = {
      id,
      description: value,
    };
    const newList = [...list, newListItem];
    setList(newList);
  };

  const onClear = () => {
    setList([]);
  };

  return (
    <div style={listStyle}>
      <ul style={ulStyle}>
        {list.map((element: ListItemInterface) => (
          <ListElement element={element} onDelete={onDelete} />
        ))}
      </ul>

      <ListForm onValidation={onValidation} />
      <Button
        onClick={(e) => {
          e.preventDefault();
          onClear();
        }}
      >
        Vider la liste
      </Button>
    </div>
  );
};

export default ListComponent;
