import { useState} from "react";
import { useDispatch } from "react-redux";

import ButtoHandler from "../Button/Button";
import TextInput from "../TextInput/TextInput";

import classes from "./CardForm.module.scss";

const CardForm = (props) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_CARD", newCard: { title } });

    // props.action({ title: title}, props.columnId);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className={classes.card}>
      <TextInput value={title} onChange={(e) => setTitle(e.target.value)} />
      <ButtoHandler text="plus">Add Item</ButtoHandler>
    </form>
  );
};

export default CardForm;
