import { useSelector } from "react-redux";

import Card from "../Card/Card";
import CardForm from "../Card/CardForm";
import classes from "./Column.module.scss";

const Column = (props) => {
  const cards = useSelector((state) =>
    state.cards.filter((card) => card.columnId === props.id)
  );

  return (
    <article className={classes.column}>
      <h2 className={classes.title}>
        <span className={classes.icon + " fa fa-" + props.icon} />
        {props.title}
      </h2>
      <ul className={classes.cards}>
        {cards.map((card) => (
          <Card key={card.id} title={card.title} />
        ))}
      </ul>
      <CardForm columnId = {props.columnId}/>
    </article>
  );
};

export default Column;
