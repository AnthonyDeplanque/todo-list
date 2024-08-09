import { useState } from "react";
import Button from "./generics/Button";

export interface ListFormProps {
  onValidation: (value: string) => void;
}

const ListForm: React.FC<ListFormProps> = (props) => {
  const { onValidation } = props;
  const [description, setDescription] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

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

  const inputStyle: React.CSSProperties = {
    padding: "1rem",
    borderRadius: "1rem",
  };

  const ERROR_MESSAGE = <p>Veuillez ajouter un élément svp !</p>;

  return (
    <div style={divFormStyle}>
      <form style={listFormStyle}>
        <input
          style={inputStyle}
          value={description}
          placeholder="Ajouter un élément"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDescription(e.target.value)
          }
        ></input>

        {error && ERROR_MESSAGE}

        <Button
          onClick={(e) => {
            e.preventDefault();
            if (description !== "") {
              onValidation(description);
              setDescription("");
              setError(false);
            } else {
              setError(true);
            }
          }}
        >
          Valider
        </Button>
      </form>
    </div>
  );
};

export default ListForm;
