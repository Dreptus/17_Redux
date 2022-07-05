import classes from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={classes.hero}>
      <h1 className={classes.title}>My first React App</h1>
      <p className={classes.subtitle}>A simple to-do app, with lists, columns and card</p>
    </div>
  );
};

export default Hero;
