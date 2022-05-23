import Card from '../Card/Card';
import CardForm from '../Card/CardForm';
import classes from "./Column.module.scss";

const Column = (props) => {
  return (
    <article className={classes.column}>
      <h2 className={classes.title}>
        <span className={classes.icon + " fa fa-" + props.icon} /> 
        {props.title}
      </h2>
      <ul className={classes.cards}>
        {props.cards.map((card) => (
           <Card key={card.id} title={card.title}/>
        ))}
      </ul>
      <CardForm action={props.addCard} columnId={props.id} />
    </article>
  );
};

export default Column;
