import Image from "next/image";
import styles from "../styles/Shape.module.css";

export default function Shape({ svg }: { svg: string }) {
  return (
    <Image
      className={styles.shapeImg}
      src={svg}
      height={300}
      width={300}
      alt="Background Shape"
    />
  );
}
