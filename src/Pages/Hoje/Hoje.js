import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Context from "../../contexts/Context";
import Dados from "../../contexts/Dados";
import { GoCheck } from "react-icons/go"
import { BoxContainer, Check, Container, Span, TituloHabito, Topo } from "./style";
import dayjs from "dayjs"
import URL_BASE from "../../URL_BASE";

export default function Hoje() {
    const TopFooter = useContext(Context)
    const [habitos, setHabitos] = useState([])
    const [check, setCheck] = useState([])
    const [percentagem, setPercentagem] = useState()
    const [num, setNum] = useState(0)
    const [dentro, setDentro] = useState(false)
    const vazio = {}
    const dados = useContext(Dados)
    const [d, setD] = useState(dayjs().format('dddd'))
    const mes = dayjs().format("DD/MM")
    const config = {
        headers: {
            "Authorization": `Bearer ${dados.userDados.token}`
        }
    }


    useEffect(() => {
        axios.get(`${URL_BASE}/habits/today`, config)
            .then(res => {
                setHabitos(res.data)
            })
            .catch(err => console.log(err.response.data))

        if (d === "Sunday") {
            setD("Domingo")
        } else if (d === "Monday") {
            setD("Segunda")
        } else if (d === "Tuesday") {
            setD("Terça")
        } else if (d === "Wednesday") {
            setD("Quarta")
        } else if (d === "Thursday") {
            setD("Quinta")
        } else if (d === "Friday") {
            setD("Sexta")
        } else {
            setD("Sábado")
        }

    }, [])

    useEffect(() => {
        setPercentagem(100 / habitos.length)
        for (let i = 0; i < habitos.length; i++) {

            if (habitos[i].done === true) {
                setCheck([...check, habitos[i].id])
            }

        }
        setNum(check.length * percentagem)
    }, [habitos])



    function concluido(i) {
        if (check.includes(i)) {
            setDentro(false)
            const newList = check.filter((h) => h !== i)
            setCheck(newList)
            setNum(num - percentagem)
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${i}/uncheck`, vazio, config)
                .catch(err => console.log(err.response))
        }
        else if (!check.includes(i)) {
            setDentro(true)
            setCheck([...check, i])
            setNum(num + percentagem)
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${i}/check`, vazio, config)
                .catch(err => console.log(err.response.data))
        }


    }
    return (
        <Container>
            {TopFooter}
            <Topo color={check.length === 0 ? "#BABABA" : "#8FC549"}>
                <h1 data-test="today">{d + " - " + mes}</h1>
                <h2 data-test="today-counter">{check.length !== 0 ? `${num.toFixed(0)}% dos hábitos concluídos` : "Nenhum hábito concluído ainda"}</h2>
            </Topo>

            {habitos.map((h) => (
                <BoxContainer data-test="today-habit-container" key={h.id}>
                    <TituloHabito>
                        <h1 data-test="today-habit-name">{h.name}</h1>

                        <h2 data-test="today-habit-sequence" >{`Sequência atual: `}
                            <Span color={check.includes(h.id) || dentro === true ? "#8FC549" : "#666666"}>{
                                `${check.includes(h.id) || dentro === true ? h.currentSequence + 1 : h.currentSequence} dias`}</Span></h2>

                        <h2 data-test="today-habit-record">{`Seu recorde: `}
                            <Span color={h.highestSequence === h.currentSequence && h.currentSequence !== 0 || check.includes(h.id) && dentro === true ? "#8FC549" : "#666666"}>
                                {`${check.includes(h.id) || dentro === true ? h.highestSequence + 1 : h.highestSequence} dias`}</Span>
                        </h2>
                    </TituloHabito>
                    <Check data-test="today-habit-check-btn" background={check.includes(h.id) ? "#8FC549" : "#EBEBEB"} onClick={() => concluido(h.id, h.done)}><GoCheck /></Check>
                </BoxContainer>
            ))
            }


        </Container >
    )
}