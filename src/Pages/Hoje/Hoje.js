import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Context from "../../contexts/Context";
import Dados from "../../contexts/Dados";
import { GoCheck } from "react-icons/go"
import { BoxContainer, Check, Container, Span, TituloHabito, Topo } from "./style";
import dayjs from "dayjs"
import URL_BASE from "../../URL_BASE";

export default function Hoje() {
    const [habitos, setHabitos] = useState([])
    const [count, setCount] = useState(0)
    const [percentagem, setPercentagem] = useState()
    const [reload, setReload] = useState(false)
    const [today, setToday] = useState(dayjs().format('dddd'))
    const [day, setDay] = useState()
    const mes = dayjs().format("DD/MM")
    const dados = useContext(Dados)
    const TopFooter = useContext(Context)
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

        if (today === 'Sunday') setDay("Domingo")
        else if (today === 'Monday') setDay("Segunda")
        else if (today === 'Tuesday') setDay("Terça")
        else if (today === 'Wednesday') setDay("Quarta")
        else if (today === 'Thursday') setDay("Quinta")
        else if (today === 'Friday') setDay("Sexta")
        else setDay("Sábado")
    }, [reload])

    useEffect(() => {
        let current = 0
        setPercentagem(100 / habitos.length)
        for (let i = 0; i < habitos.length; i++) {
            if (habitos[i].done === true) current++
        }
        setCount(current * percentagem)
    }, [habitos])



    function concluido(habit) {
        if (!habit.done) {
            axios.post(`${URL_BASE}/habits/${habit.id}/check`, {}, config)
                .then(() => {
                    setReload(true)
                    habit.currentSequence++
                    if (habit.currentSequence > habit.highestSequence) habit.highestSequence++
                })
                .catch(err => console.log(err.response.data))
        } else {
            axios.post(`${URL_BASE}/habits/${habit.id}/uncheck`, {}, config)
                .then(() => {
                    setReload(true)
                    habit.currentSequence--
                })
                .catch(err => console.log(err.response.data))
        }
        setReload(false)
    }
    return (
        <Container>
            {TopFooter}
            <Topo color={count === 0 || isNaN(count) || count === Infinity ? "#BABABA" : "#8FC549"}>
                <h1 data-test="today">{day + " - " + mes}</h1>
                <h2 data-test="today-counter">{count === 0 || isNaN(count) || count === Infinity ? "Nenhum hábito concluído ainda" : `${count.toFixed(0)}% dos hábitos concluídos`}</h2>
            </Topo>

            {habitos.map((h) => (
                <BoxContainer data-test="today-habit-container" key={h.id}>
                    <TituloHabito>
                        <h1 data-test="today-habit-name">{h.name}</h1>

                        <h2 data-test="today-habit-sequence" >{`Sequência atual: `}
                            <Span color={h.done ? "#8FC549" : "#666666"}>{
                                `${h.currentSequence} dias`}</Span></h2>

                        <h2 data-test="today-habit-record">{`Seu recorde: `}
                            <Span color={h.done ? "#8FC549" : "#666666"}>
                                {`${h.highestSequence} dias`}</Span>
                        </h2>
                    </TituloHabito>
                    <Check data-test="today-habit-check-btn" background={h.done ? "#8FC549" : "#EBEBEB"} onClick={() => concluido(h)}><GoCheck /></Check>
                </BoxContainer>
            ))
            }


        </Container >
    )
}