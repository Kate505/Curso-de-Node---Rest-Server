import {response, request} from 'express'

export const usuariosGet = (req = request, res = response) => {

    //1.//const queryParams = req.query;
    const {q, nombre = 'No name', apikey} = req.query;

    res.json({
        msg: 'get API - controlador',
        //1.//queryParams
        q,
        nombre,
        apikey
    });
}

export const usuariosPut = (req = request, res = response) => {
    //postman: http://localhost:8080/api/users/1
    const {id} = req.params;
    res.json({
        msg: 'put API - controlador',
        id
    });
}

export const usuariosPost = (req = request, res = response) => {
    //postman: http://localhost:8080/api/users
    //1.//const body = req.body;
    const {nombre, edad} = req.body; //desestructurando obtengo solo lo que quiero, y no extraigo todo lo que mandan en el body

    res.status(201).json({
        msg: 'post API - controlador',
        //1.//body
        nombre,
        edad
    });
}

export const usuariosDelete = (req = request, res = response) => {
    res.json({
        msg: 'delete API - controlador'
    });
}

export const usuariosPatch = (req = request, res = response) => {
    res.json({
        msg: 'patch API - controlador'
    });
}