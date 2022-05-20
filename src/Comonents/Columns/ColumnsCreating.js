import CardForm from '../Card/CardForm';
import Card from '../Card/CardForm';
import classes from "./ColumnsCreating.module.scss";

const ColumnsCreating = (props) => {
  return (
    <article className={classes.column}>
      <h1 className={classes.title}>
        <span className={classes.icon + " fa fa-" + props.icon} />
        {props.title}
      </h1>
      <ul className={classes.cards}>
        {props.cards.map((card) => (
          <Card key={card.id} title={card.title} />
        ))}
      </ul>
     <CardForm columnId={props.id}  />
    </article>
  );
};

export default ColumnsCreating;
