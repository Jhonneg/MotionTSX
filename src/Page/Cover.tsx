import styles from "./Cover.module.css";
import { useRef, ChangeEventHandler } from "react";
import notesImg from "../assets/notes-3d.png";
import FileImage from "../components/FileImage";

type CoverProps = {
  filePath?: string;
  changePageCover: (filePath: string) => void;
};

export default function Cover({ filePath, changePageCover }: CoverProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  function onChangeCoverImage() {
    fileInputRef.current?.click();
  }

  const onCoverImageUpload: ChangeEventHandler<HTMLInputElement> = (event) => {
    const target = event.target;
    console.log(target?.files?.[0]);
  };

  return (
    <div className={styles.cover}>
      {filePath ? (
        <FileImage className={styles.image} filePath={filePath} />
      ) : (
        <img src={notesImg} alt="Cover" className={styles.image} />
      )}
      <button className={styles.button} onClick={onChangeCoverImage}>
        Change cover
      </button>
      <input
        onChange={onCoverImageUpload}
        style={{ display: "none" }}
        ref={fileInputRef}
        type="file"
      />
    </div>
  );
}
