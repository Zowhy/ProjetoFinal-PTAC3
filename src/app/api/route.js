import { NextResponse } from "next/server";
import Image from "next/image";

export const listVinil = [
    {
        id: 1,
        imagem: "/AlexG.jpg",
        album: "Trick",
        artista: "Alex G",
        view: 130913,
        preco: 145
    },
    {
        id: 2,
        imagem: "/Carti.jpg",
        album: "Whole Lotta Red",
        artista: "Playboicarti",
        view: 100000000,
        preco: 500
    },
    {
        id: 3,
        imagem: "/Frank.jpg",
        album: "Blond",
        artista: "Frank Ocean",
        view: 142958948,
        preco: 800
    },
    {
        id: 4,
        imagem: "/Lana.jpg",
        album: "Ultraviolence",
        artista: "Lana del Rey",
        view:12,
        preco: 450
    },
    {
        id: 5,
        imagem: "/Deftones.jpg",
        album: "Diamond Eyes",
        artista: "Deftones",
        view: 294891284,
        preco: 200
    },
    {
        id: 6,
        imagem: "/Tyler.jpg",
        album: "Igor",
        artista: "Tyler the Creator",
        view: 1000000000,
        preco: 700
    }
];

export async function GET(){
    return NextResponse.json(listVinil)
}