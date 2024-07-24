import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.rodape}>
      <div className={styles.container}>    
          <p>Opium</p>
          <p>Vinyl store where you can express yourself with music</p>
        </div>
    </footer>
  );
}