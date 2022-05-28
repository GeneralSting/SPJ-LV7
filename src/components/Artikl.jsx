import { useParams } from "react-router-dom";
import React, {useState, useEffect} from "react";
import axios from "axios";

export default function Artikl() {
    let params = useParams();
    let artikl = GetArtikl(parseInt(params.artiklId));
    return (
        <main>
            <h2>Model: {artikl.id}</h2>
        </main>
    );
}

export function GetArtikl(id) {
    const readUrl = "http://localhost/React/pcshop/src/php/read.php";
    const [post, setPost] = useState([])
    useEffect( () => {
        axios.get(readUrl).then((response) => { setPost(response.data)
        });
    }, [])
    console.log(post.find((artikl) => artikl.id === id))
    return post.find(
        (artikl) => artikl.id === id);
}