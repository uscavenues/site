import Shape from "./Shape";
import styles from "../styles/Shapes.module.css";

export default function Shapes() {
  return (
    <div className={styles.shapes}>
      <div className={styles.shapeTop + " " + styles.shapeRight}>
        <Shape svg={"/images/shapes/Star.svg"} />
      </div>
      <div className={styles.shapeMiddle}>
        <Shape svg={"/images/shapes/StarDotted.svg"} />
      </div>
    </div>
  );
}
