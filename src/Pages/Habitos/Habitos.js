import { useContext, useEffect, useState } from "react";
import Context from "../../contexts/Context";
import { Container, MeusHabitos } from "./styles";
import NovoHabito from "./NovoHabito";
import axios from "axios";
import Habs from "./Habs";
import Dados from "../../contexts/Dados";
import URL_BASE from "../../URL_BASE";

export default function Habitos() {
    const TopFooter = useContext(Context)
    const [display, setDisplay] = useState("none")
    const [habitos, setHabitos] = useState([])
    const [post, setPost] = useState([])
    const dadosUser = useContext(Dados)
    const config = {
        headers: {
            "Authorization": `Bearer ${dadosUser.userDados.token}`
        }
    }

    useEffect(() => {
        axios.get(`${URL_BASE}/habits`, config)
            .then(res => {
                setPost(res.data)
                setHabitos(post)
            })
            .catch(err => console.log(err.response.data))
    }, [habitos])
    return (
        <>
            {TopFooter}
            <Container>
                <MeusHabitos>
                    <h1>Meus hábitos</h1>
                    <button data-test="habit-create-btn" onClick={() => setDisplay("flex")}>+</button>
                </MeusHabitos>

                <NovoHabito data-test="habit-create-container" display={display} setDisplay={setDisplay} />

                <div>
                    {habitos.length === 0 ?
                        "Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!"
                        : <Habs post={post} setPost={setPost} token={dadosUser.userDados.token} />}
                </div>
            </Container>
        </>
    )
}