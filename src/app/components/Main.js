"use client";

import { NextResponse } from "next/server";
import Link from "next/link";
import styles from "./main.module.css";
import Image from "next/image";
import Error from "./Error";
import Loading from "./Loading";




 

  if (isError) {
    return <ServerError />;
  }

  if (listProduto.length === 0) {
    return <Loading />;
  }

  return (
   
      <main className={styles.main}>
        {listProduto.map((produto) => (
          <div className={styles.card} key={produto.id}>
            <div className={styles.imagem} >
           
              <Image
              src={produto.imagem}
              className={styles.imagem}
              alt={produto.album}
              width={200}
              height={200}
            />
               </div>
            <h3>{produto.album}</h3>
            <p>{produto.artista}</p>
            <p>Preço: ${produto.preco}</p>
           

            <Link href={"/produtos/" + produto.id} key={produto.id}>
              <button class="button">Ver mais</button>
            </Link>
          </div>
        ))}
      </main>
  );
}
