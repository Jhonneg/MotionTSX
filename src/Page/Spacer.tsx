import styles from "./Spacer.module.css";

type SpaceProps = {
  handleClick(): void;
  showHint: boolean;
};

export default function Spacer({ handleClick, showHint }: SpaceProps) {
  return (
    <div className={styles.spacer} onClick={handleClick}>
      {showHint && "Click to create the first paragraph"}
    </div>
  );
}
