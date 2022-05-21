import axios from "axios";
import React, { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { Link, Outlet } from "react-router-dom";


export const Home = () => {
    let brojac = 0;
    const readUrl = "http://localhost/React/pcshop/src/php/read.php";
    const [post, setPost] = useState([])
    useEffect( () => {
        axios.get(readUrl).then((response) => { setPost(response.data)
        });
            getOprema();
    }, [])
    const navigate = useNavigate()
    return( 
        <div className="Home">
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
                    </tr>
                </thead>
                <tbody>
                {post.map((artikl) => (
                        <tr>
                            <td scope='row'>{++brojac}</td>
                            <td>{artikl.id}</td>
                            <td><Link to={`/${artikl.id}`}>{artikl.naziv}</Link></td>
                            <td>{artikl.proizvodac}</td>
                            <td>{artikl.model}</td>
                            <td>{artikl.cijena}</td>
                            <td>{artikl.kolicina}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

    async function getOprema() {
            try{
                const response = await axios.get(readUrl)
                setPost(response.data)
            }
            catch(error) {
                console.error(error);
            }
    }
}
