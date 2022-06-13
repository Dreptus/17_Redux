import classes from "./Button.module.scss";

const ButtoHandler = (props) => {
  return (
    <button className={classes.button}>
      <span className={"fa fa-" + props.text} />
      {" " + props.children}
    </button>
  );
};

export default ButtoHandler;
