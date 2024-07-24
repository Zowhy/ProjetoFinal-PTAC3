import Image from "next/image";
import styles from "../pageId.module.css";

export default async function Produtos({ params }) {
    const response = await fetch("http://localhost:3000/api/" + params.id , {
        cache: "no-cache"
    })
    const data = await response.json()

    return (
        <main className={styles.listVinil}>
            <div className={styles.card}>
                <div className={styles.imagemContainer}>
                    <Image className={styles.imagemProduto} width={500} height={500} src={data.imagem} />
                </div>
                <div className={styles.detalhesProduto}>
                    <p className={styles.album}>Album: {data.album}</p>
                    <p className={styles.artista}>Artista: {data.artista}</p>
                    <p className={styles.preco}> Preço:  ${data.preco}</p>
                </div>
            </div>
        </main>
    )
}