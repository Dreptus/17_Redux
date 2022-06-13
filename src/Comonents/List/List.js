import { useSelector } from "react-redux";

import Column from "../Columns/Column";
import ColumnForm from "../Columns/ColumnForm";
import classes from "./List.module.scss";

const List = () => {
  const columns = useSelector((state) => state.columns);

  return (
    <div>
      <header className={classes.header}>
        <h2>
          Things to do<span>soon!</span>
        </h2>
      </header>
      <p className={classes.description}>
        Interesting things I want to check out
      </p>
      <section className={classes.columns}>
        {columns.map((column) => (
          <Column key={column.id} {...column} />
        ))}
        {/* <Column title="Books" icon="book" />
        <Column title="Movies" icon="film" />
        <Column title="Games" icon="gamepad" /> */}
      </section>
      <ColumnForm />
    </div>
  );
};

export default List;
