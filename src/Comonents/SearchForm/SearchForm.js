import ButtoHandler from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import classes from "./SearchForm.module.scss";

const SearchForm = () => {
  return (
    <form className={classes.searchForm}>
      <TextInput placeholder="Search..." />
      <ButtoHandler text="search">Search</ButtoHandler>
      <TextInput placeholder="Add new column" />
      <ButtoHandler text="circle-plus">Create</ButtoHandler>
    </form>
  );
};

export default SearchForm;
