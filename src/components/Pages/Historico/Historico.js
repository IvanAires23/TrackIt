import { useContext } from "react"
import Context from "../../../contexts/Context"
import { Titulo } from "./style"

export default function Historico() {
    const TopFooter = useContext(Context)

    return (
        <>
            {TopFooter}
            <Titulo>
                <h1>Histórico</h1>
                <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
            </Titulo>
        </>
    )
}