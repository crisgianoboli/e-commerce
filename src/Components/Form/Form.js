import { useState } from "react";

export const Form = ({addOrder}) => {

    const [saveName, setSaveName] = useState("");
    const [saveMail, setSaveMail] = useState("");
    const [savePhone, setSavePhone] = useState(0);

    const submitHandler = (event) => {
        let buyer = {
            name : saveName,
            email : saveMail,
            phone: savePhone
        }

        addOrder(buyer);
        event.preventDefault(); // evita que nos vallamos de la pagina
    } 

    return (
        <form onSubmit={submitHandler}>
            <label><input type="text" placeholder="nombre" onChange={(event) => setSaveName(event.target.value)}/></label>
            <label><input type="email" placeholder="email" onChange={(event) => setSaveMail(event.target.value)}/></label>
            <label><input type="number" placeholder="cellphone number" onChange={(event) => setSavePhone(event.target.value)}></input></label>
            <button type="submit">Submit</button>
        </form>
    )
}
