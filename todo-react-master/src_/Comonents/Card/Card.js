import classes from "./Card.module.scss";

const Card = (props) => {
  return <li className={classes.card}>{props.title}</li>;
};

export default Card;
