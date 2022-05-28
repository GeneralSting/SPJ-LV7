import React, {useState, useEffect, useCallback} from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Form, Button, Modal } from 'react-bootstrap';


function DodajModal({name, onNameChange}) {

    const [inputs, setInputs] = useState({})

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        setShow(false)
        event.preventDefault()
        dodajOpremu(inputs.id, inputs.naziv, inputs.proizvodac, inputs.model, inputs.cijena, inputs.kolicina)
        alert(`${inputs.id} ${inputs.naziv} je dodan`)
    }

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
        .then( response => {
            
        })
    }


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Dodaj
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <label>Unesite ID:
                                <input
                                    type="number"
                                    name="id"
                                    value={inputs.id || ""}
                                    onChange={handleChange}
                                />
                            </label>
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1">
                            <label>Unesite naziv:
                                <input
                                    type="text"
                                    name="naziv"
                                    value={inputs.naziv || ""}
                                    onChange={handleChange}
                                />
                            </label>
                        </Form.Group>
                        <Form.Group
                            className='mb-3'
                            controlId='exampleForm-ControlTextarea2'>
                            <label>Unesite proizvodaca:
                                <input
                                    type="text"
                                    name="proizvodac"
                                    value={inputs.proizvodac || ""}
                                    onChange={handleChange}
                                />
                            </label>
                        </Form.Group>
                        <Form.Group
                            className='mb-3'
                            controlId='exampleForm-ControlTextarea2'>
                            <label>Unesite model:
                                <input
                                    type="text"
                                    name="model"
                                    value={inputs.model || ""}
                                    onChange={handleChange}
                                />
                            </label>
                        </Form.Group>
                        <Form.Group
                            className='mb-3'
                            controlId='exampleForm-ControlTextarea2'>
                            <label>Unesite cijenu:
                                <input
                                    type="number"
                                    name="cijena"
                                    value={inputs.cijena || ""}
                                    onChange={handleChange}
                                />
                            </label>
                        </Form.Group>
                        <Form.Group
                            className='mb-3'
                            controlId='exampleForm-ControlTextarea2'>
                            <label>Unesite kolicinu:
                                <input
                                    type="number"
                                    name="kolicina"
                                    value={inputs.kolicina || ""}
                                    onChange={handleChange}
                                />
                            </label>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type='submit' onClick={handleSubmit}>
                        Dodaj
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DodajModal;