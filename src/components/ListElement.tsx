import Button from "./generics/Button";
import { ListItemInterface } from "./ListComponents";

export interface ListElementProps {
  element: ListItemInterface;
  onDelete: (id: string) => void;
}

const ListElement: React.FC<ListElementProps> = (props: ListElementProps) => {
  const { element, onDelete } = props;
  const liStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 2,
    alignContent: "center",
    border: "solid 2px",
    margin: ".5rem",
    borderRadius: "1rem",
  };

  return (
    <li style={liStyle} key={element.id}>
      {element.description}
      <Button onClick={() => onDelete(element.id)}>X</Button>
    </li>
  );
};

export default ListElement;
