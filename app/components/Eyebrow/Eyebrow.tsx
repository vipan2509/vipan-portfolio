import styles from "./Eyebrow.module.scss";

type EyebrowProps = {
  name: string;
  number : string;
};

function Eyebrow({ name, number }: EyebrowProps) {
  return (
    <div className={styles.layout}>
      <span>{number}</span>
      {name}
    </div>
  );
}

export default Eyebrow;