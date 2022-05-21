import React, {useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';


export function Dodaj() {
    const [] = useState({})

    let navigate = useNavigate();


    const dodajOpremu =(i,n,p,m,c,k) => {
        var params = new URLSearchParams()
        params.append('id', i)
        params.append('naziv', n)
        params.append('proizvodac', p)
        params.append('model', m)
        params.append('cijena', c)
        params.append('kolicina', k)
        axios.post("http://localhost/React/pcshop/src/php/create.php", params)
        .then((response)=>{ navigate('/',{replace:true})});

        
    }
    const [inputs, setInputs] = useState({})
    const handleSubmit = (event) => {
        event.preventDefault()
        dodajOpremu(inputs.id, inputs.naziv, inputs.proizvodac, inputs.model, inputs.cijena, inputs.kolicina)
        alert(`${inputs.id} ${inputs.naziv} je dodan`)
    }

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value 
        setInputs(values => ({...values, [name]: value}))
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>Unesite ID:
            <input
                type="number"
                name="id"
                value={inputs.id || ""}
                onChange={handleChange}
                />
            </label>
            <br />
            <label>Unesite naziv:
                <input
                type="text"
                name="naziv"
                value={inputs.naziv || ""}
                onChange={handleChange}
                />
            </label>
            <br />
            <label>Unesite proizvodaca:
                <input
                type="text"
                name="proizvodac"
                value={inputs.proizvodac || ""}
                onChange={handleChange}
                />
            </label>
            <br/>
            <label>Unesite model:
                <input
                type="text"
                name="model"
                value={inputs.model || ""}
                onChange={handleChange}
                />
            </label>
            <br/>
            <label>Unesite cijenu:
                <input
                type="number"
                name="cijena"
                value={inputs.cijena || ""}
                onChange={handleChange}
                />
            </label>
            <br/>
            <label>Unesite kolicinu:
                <input
                type="number"
                name="kolicina"
                value={inputs.kolicina || ""}
                onChange={handleChange}
                />
            </label>
            <br/>
            <button className="btn btn-success">Dodaj</button>
        </form>
        </>
    )
}

/*
export function Dodaj() {
    const readUrl = "http://localhost/React/pcshop/src/php/create.php";
    const [contacts, setContacts] = useState(["http://localhost/React/pcshop/src/php/read.php"])
    const [addFormData, setAddFormData] = useState({
        id: '',
        ime: '',
        kategorije: '',
        cijena: '',
        model: '',
        dostupna_kolicina: ''
    })
    const handleAddFormChange = (event) => {
        event.preventDefault();


        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue

        setAddFormData(newFormData);
    }

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newContact = {
            id: addFormData.opremaId,
            ime: addFormData.opremaNaziv,
            kategorije: addFormData.opremaKategorija,
            cijena: addFormData.opremaCijena,
            model: addFormData.opremaModel,
            dostupna_kolicina: addFormData.opremaKolicina
        }

        const newContacts = [...contacts, newContact];
        setContacts(newContacts);
    }

    const handleDeleteClick = (contactId) => {
        const newContacts = [...contacts];

        const index = contacts.findIndex((contact) => contact.id === contactId)

        newContacts.splice(index, 1)

        setContacts(newContacts)
    }

    return (
        <div>
                <div>
                <form onSubmit={handleAddFormSubmit}>
                    <input type="text"
                        name="opremaId"
                        required='required'
                        placeholder="ID"
                        onChange={handleAddFormChange}
                    />
                    <input type="text"
                        name="opremaNaziv"
                        required='required'
                        placeholder="Naziv"
                        onChange={handleAddFormChange}
                    />
                    <input type="text"
                        name="opremaKategorija"
                        required='required'
                        placeholder="Kategorija"
                        onChange={handleAddFormChange}
                    />
                    <input type="number"
                        name="opremaCijena"
                        required='required'
                        placeholder="Cijena(kn)"
                        onChange={handleAddFormChange}
                    />
                    <input type="text"
                        name="opremaModel"
                        required='required'
                        placeholder="model"
                        onChange={handleAddFormChange}
                    />
                    <input type="number"
                        name="opremaKolicina"
                        required='required'
                        placeholder="Kolicina"
                        onChange={handleAddFormChange}
                    />
                    <button className="btn btn-info" type="submit" style={{ 'padding': '0px 20px' }}><h3>Dodaj</h3></button>

                </form>

            </div>
        </div>
    )
}*/
