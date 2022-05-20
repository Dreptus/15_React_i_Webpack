import { useState } from "react";
import shortid from "shortid";
import ColumnForm from "../Columns/ColumnForm";
import ColumnsCreating from "../Columns/ColumnsCreating.js";

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
      { id: shortid(), title: newColumn.title, icon: newColumn.icon, card:[] },
    ]);
  };

  const addCard = (newCard, columnId) => {
    const columnsUpdated = columns.map((column) => {
      if (column.id === columnId)
        return {
          ...column,
          cards: [...column.cards, { id: shortid(), title: newCard.title }],
        };
      else return column;
    });

    setColumns(columnsUpdated);
  };

  return (
    <div className={classes.list}>
      <header className={classes.header}>
        <h2 className={classes.title}>
          Things to do <span>Soon!</span>
        </h2>
      </header>
      <p className={classes.description}>
        Interesting things I want to check out
      </p>
      <section className={classes.columns}>
        {columns.map((column) => (
          <ColumnsCreating
            key={column.id}
            id={column.id}
            title={column.title}
            icon={column.icon}
            cards={column.cards}
          />
        ))}
        <ColumnForm handleSubmit={addColumn} />
      </section>
    </div>
  );
};

export default List;
