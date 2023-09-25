import { Footer, Header } from "./stylesFixos";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Dados from "../../contexts/Dados";

export default function Fixos() {
    const dados = useContext(Dados)
    return (
        <>
            <Header data-test="header">
                <h1>TrackIt</h1>
                <img src={dados.userDados.image} />
            </Header>

            <Footer data-test="menu">
                <Link data-test="habit-link" to={"/habitos"}>
                    <h2>Hábitos</h2>
                </Link>
                <Link data-test="today-link" to={"/hoje"}><div>Hoje</div></Link>
                <Link data-test="history-link" to={"/historico"}>
                    <h2>Histórico</h2>
                </Link>
            </Footer>
        </>
    )
}