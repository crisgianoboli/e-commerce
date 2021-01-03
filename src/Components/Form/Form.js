import { useState } from "react";
import {Button} from 'react-bootstrap';

export const Form = ({addOrder}) => {

    const [saveName, setSaveName] = useState("");
    const [saveMail, setSaveMail] = useState("");
    const [saveMail2, setSaveMail2] = useState("");
    const [savePhone, setSavePhone] = useState(0);
    

    const submitHandler = (event) => {
        let buyer = {
            name : saveName,
            email : saveMail,
            email2 : saveMail2,
            phone: savePhone
        }
        
        if (saveName.length>1 && saveMail === saveMail2 && savePhone.length>1) {
            addOrder(buyer); 
            event.preventDefault(); // evita que nos vallamos de la pagina
        } else {
            alert('validacion fallida, revisar datos');
            event.preventDefault();
        }        
    } 

    const checkInfo = () => {
        if (saveMail === saveMail2) {
            document.getElementById('btnBuy').removeAttribute("disabled");
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <label><input type="text" placeholder="nombre completo" onChange={(event) => setSaveName(event.target.value)}/></label>
            <label><input type="email" placeholder="email" onChange={(event) => setSaveMail(event.target.value)}/></label>
            <label><input type="email" placeholder="re ingrese su email para validar" onChange={(event) => setSaveMail2(event.target.value)}/></label>
            <label><input type="number" placeholder="Telefono" onChange={(event) => setSavePhone(event.target.value)}></input></label>
            <Button type="submit" id="btnBuy" onClick={checkInfo}>Comprar</Button>
        </form>
    )
}
