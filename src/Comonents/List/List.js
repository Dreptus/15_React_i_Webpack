import { useState, useEffect } from "react";
import shortid from "shortid";

import Column from "../Columns/Column";
import ColumnForm from "../Columns/ColumnForm";
import classes from "./List.module.scss";

const List = () => {
  const [columns, setColumns] = useState([
    {
      id: 1,
      title: "Books",
      icon: "book",
      cards: [
        { id: 1, title: "This is Going to Hurt" },
        { id: 2, title: "Interpreter of Maladies" },
      ],
    },
    {
      id: 2,
      title: "Movies",
      icon: "film",
      cards: [
        { id: 1, title: "Harry Potter" },
        { id: 2, title: "Star Wars" },
      ],
    },
    {
      id: 3,
      title: "Games",
      icon: "gamepad",
      cards: [
        { id: 1, title: "The Witcher" },
        { id: 2, title: "Skyrim" },
      ],
    },
  ]);
  const addColumn = (newColumn) => {
    setColumns([
      ...columns,
      {
        id: shortid(),
        title: newColumn.title,
        icon: newColumn.icon,
        cards: [],
      },
    ]);
  };
  return (
    <div>
      <header className={classes.header}>
        <h2>
          Things to do<span>soon!</span>
        </h2>
      </header>
      <p className={classes.description}>
        Interesting things I want to check out
      </p>
      <section className={classes.columns}>
        {columns.map((column) => (
          <Column
            key={column.id}
            title={column.title}
            icon={column.icon}
            cards={column.cards}
          />
        ))}
        {/* <Column title="Books" icon="book" />
        <Column title="Movies" icon="film" />
        <Column title="Games" icon="gamepad" /> */}
      </section>
      <ColumnForm action={addColumn} />
    </div>
  );
};

export default List;
