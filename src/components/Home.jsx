import axios from "axios";
import React, { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { Link, Outlet } from "react-router-dom";
import ModalDodaj from "../components/ModalDodaj.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faPlusCircle, faRemove, faSearch } from "@fortawesome/free-solid-svg-icons"
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css



export const Home = () => {
    let brojac = 0;
    const readUrl = "http://localhost/React/pcshop/src/php/read.php";
    const [post, setPost] = useState([])
    const [dodajTablicu, setDodajTablicu] = useState(0)

    useEffect(() => {
        axios.get(readUrl).then((response) => {
            setPost(response.data)
        });
        getOprema();
    }, [dodajTablicu])



    function Delete(artikl_id) {
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to do this.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => ObrisiArtikl(artikl_id)
                },
                {
                    label: 'No',
                }
            ]
        });
    }


    function ObrisiArtikl(artikl_id) {
        var params = new URLSearchParams()
        params.append('id', artikl_id)
        axios.post("http://localhost/React/pcshop/src/php/delete.php", params)
        alert("artikl, ID: " + artikl_id + " je obrisan");
        setDodajTablicu(5)
    }


    const navigate = useNavigate()
    return (
        <div className="Home">
            <ModalDodaj />
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>ID</th>
                        <th scope='col'>Naziv</th>
                        <th scope='col'>Proizvodac</th>
                        <th scope='col'>Model</th>
                        <th scope='col'>Cijena</th>
                        <th scope='col'>Količina</th>
                        <th scope="col">Uredi</th>
                        <th scope="col">Obriši</th>
                    </tr>
                </thead>
                <tbody>
                    {post.map((artikl) => (
                        <tr key={artikl.id}>
                            <td scope='row'>{++brojac}</td>
                            <td>{artikl.id}</td>
                            <td><Link to={`/${artikl.id}`} key={artikl.id}>{artikl.naziv}</Link></td>
                            <td>{artikl.proizvodac}</td>
                            <td>{artikl.model}</td>
                            <td>{artikl.cijena}</td>
                            <td>{artikl.kolicina}</td>
                            <td><Link to={`edit/${artikl.id}`}><button className='btn btn-warning'><FontAwesomeIcon icon={faPencil} /></button></Link></td>
                            <td><button onClick={() => Delete(artikl.id)} className='btn btn-danger'><FontAwesomeIcon icon={faRemove} /></button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

    async function getOprema() {
        try {
            const response = await axios.get(readUrl)
            setPost(response.data)
        }
        catch (error) {
            console.error(error);
        }
    }
}

export function Pretrazivanje() {
    const [query, setQuery] = useState("");
    const keys = ["first_name", "last_name", "email"];
    const search = (data) => {
        return data.filter((item) =>
            keys.some((key) => item[key].toLowerCase().includes(query))
        );
    };
}

