import express from 'express'
import cors from 'cors'
var app = express()
import {router} from "../routes/user.js"



export class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/users';

        // Middlewares
        this.middlewares();
        //Rutas de mi aplicación

        this.routes();
    }

    middlewares() {

        //CORS
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use (express.json());

        //directorio Público
        this.app.use(express.static('public')); //los que usan app.use son middlewares
    }

    routes() {
       
        this.app.use(this.usuariosPath, router);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }

    cors() {        

        this.app.get('/products/:id', function (req, res, next) {
            res.json({ msg: 'This is CORS-enabled for all origins!' })
        })

        this.app.listen(80, function () {
            console.log('CORS-enabled web server listening on port 80')
        })

    }
}