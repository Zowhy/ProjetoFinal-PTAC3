import { NextResponse } from "next/server";
import Image from "next/image";

export const listVinil = [
    {
        id: 1,
        imagem: "/AlexG.jpg",
        album: "Trick",
        artista: "Alex G",
        preco: 145
    },
    {
        id: 2,
        imagem: "/Carti.jpg",
        album: "Whole Lotta Red",
        artista: "Playboicarti",
        preco: 500
    },
    {
        id: 3,
        imagem: "/Frank.jpg",
        album: "Blond",
        artista: "Frank Ocean",
        preco: 800
    },
    {
        id: 4,
        imagem: "/Lana.jpg",
        album: "Ultraviolence",
        artista: "Lana del Rey",
        preco: 450
    },
    {
        id: 5,
        imagem: "/Deftones.jpg",
        album: "Diamond Eyes",
        artista: "Deftones",
        preco: 200
    },
    {
        id: 6,
        imagem: "/Tyler.jpg",
        album: "Igor",
        artista: "Tyler the Creator",
        preco: 700
    }
];

export async function GET(){
    return NextResponse.json(listVinil)
}