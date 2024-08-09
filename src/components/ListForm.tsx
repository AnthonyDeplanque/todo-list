import { useState } from "react";
import Button from "./generics/Button";

export interface ListFormProps {
  onValidation: (value: string) => void;
}

const ListForm: React.FC<ListFormProps> = (props) => {
  const { onValidation } = props;
  const [description, setDescription] = useState<string>("");

  const listFormStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    width: "30%",
  };

  const divFormStyle: React.CSSProperties = {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyItems: "center",
    justifyContent: "center",
    paddingTop: "2rem",
    paddingBottom: "2rem",
  };

  return (
    <div style={divFormStyle}>
      <form style={listFormStyle}>
        <input
          value={description}
          placeholder="Ajouter un élément"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDescription(e.target.value)
          }
        ></input>

        <Button
          onClick={(e) => {
            e.preventDefault();
            onValidation(description);
            setDescription("");
          }}
        >
          Valider
        </Button>
      </form>
    </div>
  );
};

export default ListForm;
