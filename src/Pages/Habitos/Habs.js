import axios from "axios"
import { BsTrash3 } from "react-icons/bs"
import { Day, Days, Habitos } from "./styles"

export default function Habs({ post, setPost, token }) {
    const semana = ["D", "S", "T", "Q", "Q", "S", "S"]
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    function confimarDelete(h) {
        if (window.confirm("Deseja realmente deletar esse habito?")) {
            axios.delete(`${process.env.URL_BASE}/habits/${h.id}`, config)
                .then(res => setPost(post.filter(e => e.id !== h.id)))
                .catch(err => console.log(err.response.data))
        }
    }

    return (
        <>{post.map((h) => (
            <Habitos data-test="habit-container" key={h.id}>
                <div key={h.id}>
                    <h1 data-test="habit-name">{h.name}</h1>
                    <Days>{semana.map((d, i) => (
                        <Day
                            data-test="habit-day"
                            background={!h.days.includes(i) ? "#FFFFFF" : "#CFCFCF"}
                            color={!h.days.includes(i) ? "#DBDBDB" : "#FFFFFF"}
                        >{d}</Day>)
                    )}</Days>
                </div>
                <BsTrash3 data-test="habit-delete-btn" onClick={() => confimarDelete(h)} />
            </Habitos>
        ))}
        </>
    )
}