import classes from "./TextInput.module.scss";

const TextInput = (props) => {
  return (
    <input
      className={classes.input}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      type="text"
    />
  );
  }

export default TextInput;
