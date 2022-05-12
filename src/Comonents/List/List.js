import ColumnsCreating from "../Columns/Columns";
import classes from "./List.module.scss";

const List = () => {
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
        <ColumnsCreating icon='book' title="Books" />
        <ColumnsCreating icon ='film' title="Movies" />
        <ColumnsCreating icon='gamepad' title="Games" />
      </section>
    </div>
  );
};

export default List;
