import { useState, useEffect } from "react";
import ButtoHandler from "../Button/Button";
import TextInput from "../TextInput/TextInput";

import classes from "./CardForm.module.scss";

const CardForm = (props) => {
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.action({ title: title}, props.columnId);
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
