import { useState, useEffect } from "react";
import ButtoHandler from '../Button/Button';

import classes from "./ColumnForm.module.scss";

const ColumnForm = (props) => {
  const [icon, setIcon] = useState("");
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.action({ title: title, icon: icon });
    setTitle("");
    setIcon("");
  };

  return (
    <form onSubmit={handleSubmit} className={classes.columnForm}>
      Title:{" "}
      <input
        className={classes.input}
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      Icon:{" "}
      <input
        className={classes.input}
        type="text"
        value={icon}
        onChange={(e) => setIcon(e.target.value)}
      />
      <ButtoHandler text="plus">Add column</ButtoHandler>
    </form>
  );
};

export default ColumnForm;
