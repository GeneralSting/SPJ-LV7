import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import { GetArtikl } from './Artikl';



export function Edit() {

    let paramsArtikl = useParams();
    let artiklId = paramsArtikl.EditArtikl

    const [post, setPost] = useState([])

    const [naziv, setNaziv] = useState([])
    const [id, setId] = useState([])
    const [proizvodac, setProizvodac] = useState([])
    const [model, setModel] = useState([])
    const [cijena, setCijena] = useState([])
    const [kolicina, setKolicina] = useState([])



    useEffect(() => {
        GetArtikl(artiklId)
        
    }, [])

    async function GetArtikl(id)
    {
        try {
            const response = await axios.get(`http://localhost/React/pcshop/src/php/editArtikl.php?id=${id}`)
            setNaziv(response.data[0].naziv)
            setId(response.data[0].id)
            setProizvodac(response.data[0].proizvodac)
            setModel(response.data[0].model)
            setCijena(response.data[0].cijena)
            setKolicina(response.data[0].kolicina)
        }
        catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        GetArtikl(artiklId)
        
    }, [])

    const [] = useState({})

    let navigate = useNavigate();


    const dodajOpremu = (i, n, p, m, c, k) => {
        var params = new URLSearchParams()
        params.append('id', i)
        params.append('naziv', n)
        params.append('proizvodac', p)
        params.append('model', m)
        params.append('cijena', c)
        params.append('kolicina', k)
        alert(n + " " + p + " " + m + " " + c +" " + k);
        axios.post("http://localhost/React/pcshop/src/php/createEdit.php", params)
            .then((response) => { navigate('/', { replace: true }) });


    }
    const handleSubmit = (event) => {
        event.preventDefault()
        dodajOpremu(id, naziv, proizvodac, model, cijena, kolicina)
        alert(`${id} ${naziv} je dodan`)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Unesite ID:
                    <input
                        type="number"
                        name="id"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                </label>
                <br />
                <label>Unesite naziv:
                    <input
                        type="text"
                        name="naziv"
                        defaultValue={naziv}
                        onChange={(e) => setNaziv(e.target.value)}
                    />
                </label>
                <br />
                <label>Unesite proizvodaca:
                    <input
                        type="text"
                        name="proizvodac"
                        defaultValue={proizvodac}
                        onChange={(e) => setProizvodac(e.target.value)}
                    />
                </label>
                <br />
                <label>Unesite model:
                    <input
                        type="text"
                        name="model"
                        defaultValue={model}
                        onChange={(e) => setModel(e.target.value)}
                    />
                </label>
                <br />
                <label>Unesite cijenu:
                    <input
                        type="number"
                        name="cijena"
                        defaultValue={cijena}
                        onChange={(e) => setCijena(e.target.value)}
                    />
                </label>
                <br />
                <label>Unesite kolicinu:
                    <input
                        type="number"
                        name="kolicina"
                        defaultValue={kolicina}
                        onChange={(e) => setKolicina(e.target.value)}
                    />
                </label>
                <br />
                <button className="btn btn-success">Dodaj</button>
            </form>
        </>
    )
}
