import classes from "./Columns.module.scss";

const ColumnsCreating = (props) => {
  return (
    <article className={classes.column}>
      <h1 className={classes.title}>
        <span className={classes.icon + " fa fa-"+props.icon} />
        {props.title}
      </h1>
    </article>
  );
};

export default ColumnsCreating;
