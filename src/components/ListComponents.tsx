import { createUUID } from "../helpers/uuid";
import ListElement from "./ListElement";
import ListForm from "./ListForm";
import Button from "./generics/Button";
import { useList } from "../context/list/useList";

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

  const { todoList, addItem, removeItem, clearList } = useList();

  const onValidation = (value: string) => {
    const id = createUUID();
    const newListItem: ListItemInterface = {
      id,
      description: value,
    };
    addItem(newListItem);
  };

  return (
    <div style={listStyle}>
      {todoList.length ? (
        <ul style={ulStyle}>
          {todoList.map((element: ListItemInterface) => (
            <ListElement element={element} onDelete={removeItem} />
          ))}
        </ul>
      ) : (
        <p>Pas d'éléments dans la liste pour le moment</p>
      )}

      <ListForm onValidation={onValidation} />

      <Button
        onClick={(e) => {
          e.preventDefault();
          clearList();
        }}
      >
        Vider la liste
      </Button>
    </div>
  );
};

export default ListComponent;
