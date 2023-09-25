import { ContainerLogin, InputsLogin } from "./style"
import logo from "../../img/logo.png"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { Oval } from "react-loader-spinner"
import URL_BASE from "../../URL_BASE"


export default function Cadastrar() {
    const [info, setInfo] = useState(undefined)
    // da pra fazer com mais estados, mas esse jeito é melhor para fomrs grandes
    const [form, setForm] = useState({ email: "", name: "", image: "", password: "" })
    const [disabled, setDisable] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if (form.email !== "") {
            axios.post(`${URL_BASE}/auth/sign-up`, info)
                .then(() => navigate("/"))
                .catch(err => {
                    if (err.response.status === 409) {
                        alert(err.response.data.message)
                    } else {
                        alert(err.response.data.message)
                    }

                    setDisable(false)
                })
        }
    }, [info])

    function dadosUser(event) {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    function cadastro(e) {
        e.preventDefault()
        setInfo(form)
        setDisable(true)
    }

    return (
        <ContainerLogin>
            <div>
                <img src={logo} />
            </div>
            <InputsLogin onSubmit={cadastro}>
                <input
                    data-test="email-input"
                    disabled={disabled}
                    type="email"
                    name={"email"}
                    required
                    value={form.email}
                    onChange={dadosUser}
                    placeholder="email"
                />
                <input
                    data-test="user-name-input"
                    disabled={disabled}
                    name={"name"}
                    value={form.name}
                    onChange={dadosUser}
                    required
                    placeholder="nome" />
                <input
                    data-test="password-input"
                    disabled={disabled}
                    required
                    name={"password"}
                    value={form.password}
                    onChange={dadosUser}
                    placeholder="senha"
                />
                <input
                    data-test="user-image-input"
                    disabled={disabled}
                    name={"image"}
                    value={form.image}
                    onChange={dadosUser}
                    required
                    placeholder="foto" />
                <button data-test="signup-btn" disabled={disabled} type="submit">
                    {disabled ? <Oval
                        height={40}
                        width={40}
                        color="#ffffff"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={disabled}
                        ariaLabel='oval-loading'
                        secondaryColor="#ababab"
                        strokeWidth={2}
                        strokeWidthSecondary={2}

                    /> : "Entrar"}</button>
                <Link data-test="login-link" to={"/"}>
                    <div>Já tem uma conta? Faça login</div>
                </Link>
            </InputsLogin>
        </ContainerLogin >
    )
}