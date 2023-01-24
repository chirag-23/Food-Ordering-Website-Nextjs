import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN CITY</h1>
      <p className={styles.desc}>
      Order a delicious pizza on the go, anywhere, anytime. Every time you order, you get a hot and fresh pizza delivered at your doorstep in less than thirty minutes.
      </p>
      <p className={styles.desc}>
        Hurry up and place your order now!
      </p>
      <div className={styles.wrapper}>
        {pizzaList?.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
