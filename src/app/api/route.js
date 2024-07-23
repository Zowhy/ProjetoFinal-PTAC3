import { NextResponse } from "next/server";
import { Link } from "react-router-dom";

export const listVinil = [
    {
        id: 1,
        album: "Wholle Lotta Red",
        artista: "PlayboiCarti",
        preco: "R$500,00",
        img: ""
    },
    {
        id: 2,
        album: "Igor",
        artista: "Tyler-The-Creator",
        preco: "R$250,00",
        img: ""
    },
    {
        id: 3,
        album: "Blond",
        artista: "Frank Ocean",
        preco: "R$350,00",
        img: ""
    },
    {
        id: 4,
        album: "Diamond Eyes",
        artista: "Deftones",
        preco: "R$450,00",
        img: "https://imusic.b-cdn.net/images/item/original/330/0093624967330.jpg?deftones-2010-diamond-eyes-lp&class=scaled&v=1271018545"
    },
    {
        id: 5,
        album: "Trick",
        artista: "Alex G",
        preco: "R$50,00",
        img: ""
    },
    {
        id: 6,
        album: "Lana del Rey",
        artista: "Ultraviolence",
        preco: "R$90,00",
        img: ""
    }
    
];

export async function GET(){
    return NextResponse.json(listaDeLivros)
}