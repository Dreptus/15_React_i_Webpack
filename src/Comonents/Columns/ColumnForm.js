import { useState } from "react";
import ButtoHandler from "../Button/Button";

import classes from "./ColumnForm.module.scss";

const ColumnForm = (props) => {
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit({ title: title, icon: icon });
    setTitle("");
    setIcon("");
  };

  return (
    <form onSubmit={handleSubmit}>
      Title:
      <input
        className={classes.columnForm}
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      Icon:
      <input
        className={classes.columnForm}
        type="text"
        value={icon}
        onChange={(e) => setIcon(e.target.value)}
      />
      <ButtoHandler text="circle-plus">Add Column</ButtoHandler>
    </form>
  );
};

export default ColumnForm;
