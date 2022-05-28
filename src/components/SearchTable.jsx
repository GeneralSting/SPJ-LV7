import React from 'react'
import { Link } from 'react-router-dom'

const SearchTable = ({ data }) => {

    return (
        <table className='table'>
            <tbody>
                <tr>
                    <th scope='col'>ID</th>
                    <th scope='col'>Naziv</th>
                    <th scope='col'>Proizvodac</th>
                    <th scope='col'>Model</th>
                    <th scope='col'>Cijena</th>
                    <th scope='col'>Količina</th>
                </tr>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td><Link to={`/${item.id}`} key={item.id}>{item.naziv}</Link></td>
                        <td>{item.proizvodac}</td>
                        <td>{item.model}</td>
                        <td>{item.cijena}</td>
                        <td>{item.kolicina}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default SearchTable
