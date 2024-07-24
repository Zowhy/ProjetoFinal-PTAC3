import styles from "./header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <footer className={styles.rodape}>
      <div className={styles.container}>
        <div className="imagem">
        <Image
      width={200} 
      height={200}
      position= 'left'
      margin-left= 'auto'
      src={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Opium_-_Logo.png/600px-Opium_-_Logo.png?20231110130547"} className="img"/>
        </div>
     <p>vinyl store</p>
       
      </div>
    </footer>
  );
}