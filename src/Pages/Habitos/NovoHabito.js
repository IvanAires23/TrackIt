import { useContext, useEffect, useState } from "react";
import { Day, Days, Finish, New } from "./styles";
import { Oval } from "react-loader-spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Dados from "../../../contexts/Dados";
import { URL_base } from "../../URL";

export default function NovoHabito({ display, setDisplay }) {
    const semana = ["D", "S", "T", "Q", "Q", "S", "S"]
    const [name, setName] = useState("")
    const [enviar, setEnviar] = useState(false)
    const [diasSelecionados, setDiasSelecionados] = useState([])
    const dados = useContext(Dados)
    const navigate = useNavigate()
    const config = {
        headers: {
            "Authorization": `Bearer ${dados.userDados.token}`
        }
    }

    useEffect(() => {
        if (enviar === true) {
            const body = {
                name: name,
                days: diasSelecionados
            }
            axios.post(`${URL_base}/habits`, body, config)
                .then(res => {
                    setEnviar(false)
                    setName("")
                    setDiasSelecionados([])
                    setDisplay("none")
                })

                .catch(err => {
                    alert(err.response.data.message)
                    setEnviar(false)
                })
        }
    }, [enviar])

    function cancelar() {
        setDisplay("none")
    }

    function salvar() {
        setEnviar(true)
    }

    function selecionar(i) {
        if (!diasSelecionados.includes(i)) {
            setDiasSelecionados([...diasSelecionados, i].sort())
        }
        else {
            const newList = diasSelecionados.filter((d) => d !== i)
            setDiasSelecionados(newList.sort())
        }
    }

    return (
        <New data-test="habit-create-container" display={display}>
            <input
                data-test="habit-name-input"
                disabled={enviar}
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="nome do habito"
            />
            <Days>
                {semana.map((e, i) => (
                    <Day key={i}
                        data-test="habit-day"
                        disabled={enviar}
                        background={!diasSelecionados.includes(i) ? "#FFFFFF" : "#CFCFCF"}
                        color={!diasSelecionados.includes(i) ? "#DBDBDB" : "#FFFFFF"}
                        onClick={() => selecionar(i)}>{e}</Day>
                ))}
            </Days>

            <Finish>
                <button data-test="habit-create-cancel-btn" disabled={enviar} onClick={cancelar}>Cancelar</button>
                <button data-test="habit-create-save-btn" disabled={enviar} onClick={salvar}>{enviar ? <Oval
                    height={30}
                    width={30}
                    color="#ffffff"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={enviar}
                    ariaLabel='oval-loading'
                    secondaryColor="#ababab"
                    strokeWidth={2}
                    strokeWidthSecondary={2}

                /> : "Salvar"}</button>
            </Finish>

        </New>
    )
}