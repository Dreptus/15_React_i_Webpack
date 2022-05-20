import classes from "./TextInput.module.scss";

const TextInput = (props) => {
  return (
    <input
      type="text"
      className={classes.input}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    ></input>
  );
};

export default TextInput;
