import axios from "axios";
import { useContext, useEffect } from "react";
import Context from "../../contexts/Context";
import Dados from "../../contexts/Dados";
import { URL_base } from "../../URL";

export default function Hoje() {
    const TopFooter = useContext(Context)
    const dados = useContext(Dados)
    const config = {
        headers: {
            "Authorization": `Bearer ${dados.userDados.token}`
        }
    }

    useEffect(() => {
        axios.get(`${URL_base}/habits/today`, config)
            .then(res => console.log(res.data))
            .catch(err => console.log(err.response.data))
    }, [])

    return (
        <>
            {TopFooter}

        </>
    )
}