/*import { STATUS } from "./status.enum";*/



export class Contact {
    name = '';
    apellido = '';
    email = '';
    status = false;

    constructor(name, apellido, email, status){
        this.name = name;
        this.apellido = apellido;
        this.email = email;
        this.status = status;
    }
}